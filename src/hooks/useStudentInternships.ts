import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export type ApplicationStatus = 'suggested' | 'institute_approved' | 'admin_approved' | 'active' | 'completed' | 'rejected';

export interface InternshipApplication {
  id: string;
  student_id: string;
  internship_id: string;
  status: ApplicationStatus;
  suggested_at: string;
  started_at: string | null;
  completed_at: string | null;
  notes: string | null;
  internship?: {
    id: string;
    title: string;
    stream: string;
    duration: string;
    company_id: string;
    company_name?: string;
  };
}

export const applicationStatusLabels: Record<ApplicationStatus, string> = {
  'suggested': 'Suggested Match',
  'institute_approved': 'Institute Approved',
  'admin_approved': 'Admin Approved',
  'active': 'In Progress',
  'completed': 'Completed',
  'rejected': 'Not Selected',
};

export const applicationStatusColors: Record<ApplicationStatus, string> = {
  'suggested': 'bg-blue-100 text-blue-800 border-blue-200',
  'institute_approved': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'admin_approved': 'bg-green-100 text-green-800 border-green-200',
  'active': 'bg-accent/10 text-accent border-accent/20',
  'completed': 'bg-primary/10 text-primary border-primary/20',
  'rejected': 'bg-destructive/10 text-destructive border-destructive/20',
};

export const useStudentInternships = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [applications, setApplications] = useState<InternshipApplication[]>([]);
  const [availableInternships, setAvailableInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      // Fetch student's applications
      const { data: appData, error: appError } = await supabase
        .from("internship_applications")
        .select(`
          *,
          internship:internships(id, title, stream, duration, company_id)
        `)
        .eq("student_id", user.id)
        .order("suggested_at", { ascending: false });

      if (appError) throw appError;

      // Get company names for internships
      const companyIds = [...new Set((appData || []).map(a => a.internship?.company_id).filter(Boolean))];
      let companyNames: Record<string, string> = {};
      
      if (companyIds.length > 0) {
        const { data: profiles } = await supabase
          .from("profiles")
          .select("user_id, company_name")
          .in("user_id", companyIds);
        
        (profiles || []).forEach(p => {
          if (p.company_name) companyNames[p.user_id] = p.company_name;
        });
      }

      const enrichedApps = (appData || []).map(app => ({
        ...app,
        internship: app.internship ? {
          ...app.internship,
          company_name: companyNames[app.internship.company_id] || 'Unknown Company',
        } : undefined,
      })) as InternshipApplication[];

      setApplications(enrichedApps);

      // Fetch available internships (active ones student hasn't applied to)
      const appliedIds = (appData || []).map(a => a.internship_id);
      const { data: available, error: availError } = await supabase
        .from("internships")
        .select("*")
        .eq("status", "active");

      if (availError) throw availError;

      setAvailableInternships((available || []).filter(i => !appliedIds.includes(i.id)));

    } catch (error) {
      console.error("Error fetching internship applications:", error);
      toast({
        title: "Error",
        description: "Failed to load internship data",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, [user]);

  // Stats
  const activeInternships = applications.filter(a => a.status === 'active').length;
  const completedInternships = applications.filter(a => a.status === 'completed').length;
  const pendingApplications = applications.filter(a => 
    ['suggested', 'institute_approved', 'admin_approved'].includes(a.status)
  ).length;

  return {
    applications,
    availableInternships,
    loading,
    activeInternships,
    completedInternships,
    pendingApplications,
    refetch: fetchApplications,
  };
};
