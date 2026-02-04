import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export type SkillStream = 'ux-ui-design' | 'full-stack-development' | 'digital-marketing' | 'creative-video-design';
export type EnrollmentStatus = 'pending_payment' | 'pending_approval' | 'active' | 'completed' | 'cancelled';

export interface TrainingModule {
  id: string;
  stream: SkillStream;
  module_number: number;
  title: string;
  description: string | null;
  duration_weeks: number;
}

export interface ModuleProgress {
  id: string;
  enrollment_id: string;
  module_id: string;
  started_at: string | null;
  completed_at: string | null;
  progress_percentage: number;
}

export interface InstituteInfo {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  contact_person: string | null;
}

export interface Enrollment {
  id: string;
  student_id: string;
  stream: SkillStream;
  status: EnrollmentStatus;
  enrolled_at: string;
  approved_at: string | null;
  completed_at: string | null;
  institute_id: string | null;
}

export interface EnrollmentWithProgress extends Enrollment {
  modules: TrainingModule[];
  progress: ModuleProgress[];
  overallProgress: number;
  institute: InstituteInfo | null;
}

export const streamLabels: Record<SkillStream, string> = {
  'ux-ui-design': 'UX/UI Design',
  'full-stack-development': 'Full Stack Development',
  'digital-marketing': 'Digital Marketing',
  'creative-video-design': 'Creative Video Design',
};

export const useEnrollments = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [enrollments, setEnrollments] = useState<EnrollmentWithProgress[]>([]);
  const [availableStreams, setAvailableStreams] = useState<SkillStream[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEnrollments = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      // Fetch enrollments
      const { data: enrollmentData, error: enrollmentError } = await supabase
        .from("enrollments")
        .select("*")
        .eq("student_id", user.id);

      if (enrollmentError) throw enrollmentError;

      // Fetch all training modules
      const { data: modulesData, error: modulesError } = await supabase
        .from("training_modules")
        .select("*")
        .order("module_number");

      if (modulesError) throw modulesError;

      // Fetch module progress for this student's enrollments
      const enrollmentIds = (enrollmentData || []).map(e => e.id);
      let progressData: ModuleProgress[] = [];
      
      if (enrollmentIds.length > 0) {
        const { data: progress, error: progressError } = await supabase
          .from("module_progress")
          .select("*")
          .in("enrollment_id", enrollmentIds);

        if (progressError) throw progressError;
        progressData = (progress || []) as ModuleProgress[];
      }

      // Fetch institute information for assigned enrollments
      const instituteIds = [...new Set((enrollmentData || []).map(e => e.institute_id).filter(Boolean))];
      let instituteData: Record<string, InstituteInfo> = {};
      
      if (instituteIds.length > 0) {
        const { data: institutes, error: instituteError } = await supabase
          .from("profiles")
          .select("user_id, institute_name, email, phone, full_name")
          .in("user_id", instituteIds)
          .eq("user_type", "institute");

        if (instituteError) throw instituteError;

        (institutes || []).forEach(inst => {
          instituteData[inst.user_id] = {
            id: inst.user_id,
            name: inst.institute_name || 'Training Institute',
            email: inst.email,
            phone: inst.phone,
            contact_person: inst.full_name,
          };
        });
      }

      // Combine data
      const enrichedEnrollments: EnrollmentWithProgress[] = (enrollmentData || []).map(enrollment => {
        const modules = (modulesData || []).filter(m => m.stream === enrollment.stream) as TrainingModule[];
        const progress = progressData.filter(p => p.enrollment_id === enrollment.id);
        
        // Calculate overall progress
        const totalModules = modules.length;
        const inProgressTotal = progress.reduce((sum, p) => {
          if (p.completed_at) return sum + 100;
          return sum + p.progress_percentage;
        }, 0);
        const overallProgress = totalModules > 0 ? Math.round(inProgressTotal / totalModules) : 0;

        return {
          ...enrollment,
          modules,
          progress,
          overallProgress,
          institute: enrollment.institute_id ? instituteData[enrollment.institute_id] || null : null,
        } as EnrollmentWithProgress;
      });

      setEnrollments(enrichedEnrollments);

      // Calculate available streams (not enrolled)
      const enrolledStreams = (enrollmentData || []).map(e => e.stream as SkillStream);
      const allStreams: SkillStream[] = ['ux-ui-design', 'full-stack-development', 'digital-marketing', 'creative-video-design'];
      setAvailableStreams(allStreams.filter(s => !enrolledStreams.includes(s)));

    } catch (error) {
      console.error("Error fetching enrollments:", error);
      toast({
        title: "Error",
        description: "Failed to load course data",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchEnrollments();
  }, [user]);

  const enrollInStream = async (stream: SkillStream) => {
    if (!user) return false;

    try {
      const { error } = await supabase.from("enrollments").insert({
        student_id: user.id,
        stream,
        status: "pending_payment",
      });

      if (error) throw error;

      toast({
        title: "Registration Submitted",
        description: `Your registration for ${streamLabels[stream]} is pending payment. Complete payment to proceed with enrollment.`,
      });

      await fetchEnrollments();
      return true;
    } catch (error) {
      console.error("Error enrolling:", error);
      toast({
        title: "Error",
        description: "Failed to submit enrollment",
        variant: "destructive",
      });
      return false;
    }
  };

  const cancelRegistration = async (enrollmentId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from("enrollments")
        .update({ status: "cancelled" })
        .eq("id", enrollmentId)
        .eq("student_id", user.id)
        .eq("status", "pending_payment"); // Only allow cancelling pending_payment

      if (error) throw error;

      toast({
        title: "Registration Cancelled",
        description: "You can now register for a different stream.",
      });

      await fetchEnrollments();
      return true;
    } catch (error) {
      console.error("Error cancelling registration:", error);
      toast({
        title: "Error",
        description: "Failed to cancel registration",
        variant: "destructive",
      });
      return false;
    }
  };

  // Stats
  const activeEnrollments = enrollments.filter(e => e.status === 'active').length;
  const completedEnrollments = enrollments.filter(e => e.status === 'completed').length;
  const pendingEnrollments = enrollments.filter(e => e.status === 'pending_payment' || e.status === 'pending_approval').length;

  return {
    enrollments,
    availableStreams,
    loading,
    enrollInStream,
    cancelRegistration,
    activeEnrollments,
    completedEnrollments,
    pendingEnrollments,
    refetch: fetchEnrollments,
  };
};
