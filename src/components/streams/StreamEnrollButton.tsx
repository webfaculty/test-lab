import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEnrollments, SkillStream, streamLabels } from "@/hooks/useEnrollments";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StreamEnrollButtonProps {
  stream: SkillStream;
  size?: "default" | "lg";
  className?: string;
}

const StreamEnrollButton = ({ stream, size = "lg", className = "" }: StreamEnrollButtonProps) => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { enrollments, enrollInStream, loading } = useEnrollments();

  // Check if user is a student
  const isStudent = profile?.user_type === "student";

  // Check if user has any active/pending enrollment (excluding pending_payment which can be changed)
  const hasLockedEnrollment = enrollments.some(
    e => e.status !== 'cancelled' && e.status !== 'pending_payment'
  );

  // Check for pending_payment enrollment (can be changed)
  const hasPendingPaymentEnrollment = enrollments.some(
    e => e.status === 'pending_payment'
  );

  // Check if enrolled in this specific stream
  const currentStreamEnrollment = enrollments.find(e => e.stream === stream && e.status !== 'cancelled');
  const isEnrolledInThisStream = !!currentStreamEnrollment;

  // Check enrollment status
  const enrollmentStatus = currentStreamEnrollment?.status;

  const handleEnrollClick = async () => {
    // Not logged in - redirect to join page with stream context
    if (!user) {
      navigate(`/join?stream=${stream}`);
      return;
    }

    // Not a student - show message
    if (!isStudent) {
      toast({
        title: "Student Account Required",
        description: "Only students can enroll in training streams. Please sign up as a student.",
        variant: "destructive",
      });
      return;
    }

    // Already enrolled (locked) in another stream - cannot change
    if (hasLockedEnrollment && !isEnrolledInThisStream) {
      toast({
        title: "Already Enrolled",
        description: `You are already enrolled in a stream. Complete your current program before registering for another.`,
        variant: "destructive",
      });
      return;
    }

    // Has pending payment in another stream - redirect to My Stream to change
    if (hasPendingPaymentEnrollment && !isEnrolledInThisStream) {
      toast({
        title: "Already Registered",
        description: `You have a pending registration. Go to My Stream to change your selection before payment.`,
      });
      navigate("/dashboard/student/courses");
      return;
    }

    // Already enrolled in this stream - go to dashboard
    if (isEnrolledInThisStream) {
      navigate("/dashboard/student/courses");
      return;
    }

    // Proceed with enrollment
    const success = await enrollInStream(stream);
    if (success) {
      navigate("/dashboard/student/courses");
    }
  };

  if (loading) {
    return (
      <Button variant="cta" size={size} disabled className={className}>
        <Loader2 className="h-4 w-4 animate-spin mr-2" />
        Loading...
      </Button>
    );
  }

  // Show different states based on enrollment
  if (isEnrolledInThisStream) {
    if (enrollmentStatus === 'active' || enrollmentStatus === 'completed') {
      return (
        <Button variant="cta" size={size} onClick={handleEnrollClick} className={className}>
          <CheckCircle className="h-4 w-4 mr-2" />
          View My Course
        </Button>
      );
    }
    if (enrollmentStatus === 'pending_payment') {
      return (
        <Button variant="cta" size={size} onClick={handleEnrollClick} className={className}>
          <AlertCircle className="h-4 w-4 mr-2" />
          Enroll {streamLabels[stream]}
        </Button>
      );
    }
    if (enrollmentStatus === 'pending_approval') {
      return (
        <Button variant="cta" size={size} onClick={handleEnrollClick} className={className}>
          <AlertCircle className="h-4 w-4 mr-2" />
          View Status
        </Button>
      );
    }
  }

  // Show locked state if enrolled (not pending_payment) in another stream
  if (hasLockedEnrollment && !isEnrolledInThisStream) {
    return (
      <Button 
        variant="outline" 
        size={size} 
        disabled 
        className={className}
        title="You are enrolled in another stream"
      >
        Already Enrolled in Another Stream
      </Button>
    );
  }

  // Show "registered elsewhere" state - can change from My Stream
  if (hasPendingPaymentEnrollment && !isEnrolledInThisStream) {
    return (
      <Button 
        variant="outline" 
        size={size} 
        onClick={() => navigate("/dashboard/student/courses")}
        className={className}
        title="Go to My Stream to change your registration"
      >
        View My Registered Stream
      </Button>
    );
  }

  // Default - can enroll
  return (
    <Button variant="cta" size={size} onClick={handleEnrollClick} className={className}>
      Enroll Now
    </Button>
  );
};

export default StreamEnrollButton;
