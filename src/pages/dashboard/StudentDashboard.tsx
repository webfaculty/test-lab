import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { BookOpen, Briefcase, GraduationCap, User, ArrowRight, Loader2 } from "lucide-react";
import { useEnrollments } from "@/hooks/useEnrollments";
import { useStudentInternships } from "@/hooks/useStudentInternships";
import { useCertificates } from "@/hooks/useCertificates";

const StudentDashboard = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  
  const { activeEnrollments, completedEnrollments, pendingEnrollments, loading: enrollmentsLoading } = useEnrollments();
  const { activeInternships, pendingApplications, loading: internshipsLoading } = useStudentInternships();
  const { certificates, loading: certsLoading } = useCertificates();

  const loading = enrollmentsLoading || internshipsLoading || certsLoading;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const dashboardCards = [
    {
      title: "My Profile",
      description: "View and update your profile information",
      icon: User,
      path: "/dashboard/student/profile",
      stat: null,
    },
    {
      title: "My Stream",
      description: "View your registered or enrolled training stream",
      icon: BookOpen,
      path: "/dashboard/student/courses",
      stat: loading ? null : `${activeEnrollments} enrolled${pendingEnrollments > 0 ? `, ${pendingEnrollments} registered` : ''}`,
    },
    {
      title: "Internships",
      description: "View your internship matches and status",
      icon: Briefcase,
      path: "/dashboard/student/internships",
      stat: loading ? null : `${activeInternships} active${pendingApplications > 0 ? `, ${pendingApplications} pending` : ''}`,
    },
    {
      title: "Certifications",
      description: "View your earned certifications",
      icon: GraduationCap,
      path: "/dashboard/student/certifications",
      stat: loading ? null : `${certificates.length} earned`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName={profile?.full_name || profile?.email || "Student"}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your internship journey and track your progress
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dashboardCards.map((card) => (
            <Card 
              key={card.path} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(card.path)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <card.icon className="h-5 w-5 text-accent" />
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {card.stat !== null && (
                  <div className="text-sm font-medium text-muted-foreground">
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      card.stat
                    )}
                  </div>
                )}
                <Button variant="outline" className="w-full group">
                  View
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
