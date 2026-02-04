import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardHeader from "@/components/DashboardHeader";
import { BookOpen, Clock, CheckCircle, Loader2, Plus, Phone, Mail, Video, MapPin, RefreshCw, ExternalLink } from "lucide-react";
import { useEnrollments, streamLabels, EnrollmentStatus } from "@/hooks/useEnrollments";
import { useToast } from "@/hooks/use-toast";

const StudentCourses = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    enrollments, 
    loading, 
    cancelRegistration,
  } = useEnrollments();

  // Check if student can change their registration (only pending_payment allows change)
  const pendingPaymentEnrollment = enrollments.find(e => e.status === 'pending_payment');
  const canChangeStream = !!pendingPaymentEnrollment;

  const getStatusBadge = (status: EnrollmentStatus) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Completed</Badge>;
      case "active":
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Enrolled</Badge>;
      case "pending_payment":
        return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Registered - Pending Payment</Badge>;
      case "pending_approval":
        return <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">Enrolled - Pending Approval</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Not Started</Badge>;
    }
  };

  const handleChangeStream = async () => {
    if (pendingPaymentEnrollment) {
      const success = await cancelRegistration(pendingPaymentEnrollment.id);
      if (success) {
        toast({
          title: "Registration Cancelled",
          description: "You can now choose a different stream.",
        });
        navigate("/streams");
      }
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        onBack={() => navigate("/dashboard/student")}
        backLabel="Back to Dashboard"
      />

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-accent" />
              My Stream
            </h1>
            <p className="text-muted-foreground mt-2">
              {enrollments.length === 0 
                ? "Choose a training stream to begin your learning journey"
                : canChangeStream 
                  ? "Your registered stream. Complete payment to finalize enrollment."
                  : "Track your enrolled training stream and monitor your progress"}
            </p>
          </div>
          
          {/* Show different buttons based on state */}
          {enrollments.length === 0 ? (
            <Button className="gap-2" onClick={() => navigate("/streams")}>
              <Plus className="h-4 w-4" />
              Choose a Stream
            </Button>
          ) : canChangeStream && (
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={() => navigate("/streams")}>
                <ExternalLink className="h-4 w-4" />
                Explore Streams
              </Button>
              <Button variant="secondary" className="gap-2" onClick={handleChangeStream}>
                <RefreshCw className="h-4 w-4" />
                Change Stream
              </Button>
            </div>
          )}
        </div>

        {enrollments.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {enrollments.map((enrollment) => (
              <Card key={enrollment.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{streamLabels[enrollment.stream]}</CardTitle>
                      <CardDescription>Training Program</CardDescription>
                    </div>
                    {getStatusBadge(enrollment.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrollment.status === 'active' || enrollment.status === 'completed' ? (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{enrollment.overallProgress}%</span>
                        </div>
                        <Progress value={enrollment.overallProgress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          <span>
                            {enrollment.progress.filter(p => p.completed_at).length}/{enrollment.modules.length} Modules
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Started {new Date(enrollment.enrolled_at).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Continue Learning
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground text-center">
                        {enrollment.status === 'pending_payment' 
                          ? 'Complete your payment to proceed with enrollment.' 
                          : enrollment.status === 'pending_approval'
                            ? 'Payment received. Your registration is being reviewed by admin.'
                            : 'Your registration is being processed.'}
                      </p>
                      
                      {/* Contact Details - Show institute if assigned, otherwise IN10SIP */}
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        {enrollment.institute ? (
                          <>
                            <p className="text-sm font-medium">
                              Your Training Institute
                            </p>
                            <p className="text-sm text-foreground font-medium">
                              {enrollment.institute.name}
                            </p>
                            {enrollment.institute.contact_person && (
                              <p className="text-xs text-muted-foreground">
                                Contact: {enrollment.institute.contact_person}
                              </p>
                            )}
                            <div className="space-y-1.5 text-sm text-muted-foreground pt-1">
                              {enrollment.institute.phone && (
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4 text-accent" />
                                  <a href={`tel:${enrollment.institute.phone}`} className="hover:text-foreground transition-colors">
                                    {enrollment.institute.phone}
                                  </a>
                                </div>
                              )}
                              {enrollment.institute.email && (
                                <div className="flex items-center gap-2">
                                  <Mail className="h-4 w-4 text-accent" />
                                  <a href={`mailto:${enrollment.institute.email}`} className="hover:text-foreground transition-colors">
                                    {enrollment.institute.email}
                                  </a>
                                </div>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-sm font-medium">
                              {enrollment.status === 'pending_payment' 
                                ? 'Contact for Enrollment Assistance'
                                : 'Contact IN10SIP'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Contact Person: Sharmi
                            </p>
                            <div className="space-y-1.5 text-sm text-muted-foreground pt-1">
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-accent" />
                                <a href="tel:+919025286836" className="hover:text-foreground transition-colors">
                                  +91 90252 86836
                                </a>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-accent" />
                                <a href="mailto:sharmilamake@gmail.com" className="hover:text-foreground transition-colors">
                                  sharmilamake@gmail.com
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Book Consultation - only show when pending payment */}
                      {enrollment.status === 'pending_payment' && (
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-center">Book a Consultation</p>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              className="flex-1 gap-2"
                              onClick={() => window.open('https://calendly.com', '_blank')}
                            >
                              <Video className="h-4 w-4" />
                              Online
                            </Button>
                            <Button 
                              variant="outline" 
                              className="flex-1 gap-2"
                              onClick={() => navigate('/contact?consultation=offline')}
                            >
                              <MapPin className="h-4 w-4" />
                              Offline
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      <Badge variant="outline" className="font-normal w-full justify-center">
                        Registered on {new Date(enrollment.enrolled_at).toLocaleDateString()}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No registrations yet</h3>
              <p className="text-muted-foreground mb-4">
                Explore our training streams and register to start your learning journey
              </p>
              <Button variant="cta" onClick={() => navigate("/streams")}>
                Browse Streams
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default StudentCourses;
