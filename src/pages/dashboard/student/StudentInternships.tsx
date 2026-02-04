import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardHeader from "@/components/DashboardHeader";
import { Briefcase, Building2, Calendar, Loader2 } from "lucide-react";
import { useStudentInternships, applicationStatusLabels, applicationStatusColors } from "@/hooks/useStudentInternships";

const StudentInternships = () => {
  const navigate = useNavigate();
  const { 
    applications, 
    availableInternships, 
    loading 
  } = useStudentInternships();

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-accent" />
            Internships
          </h1>
          <p className="text-muted-foreground mt-2">
            View your internship matches and track application status
          </p>
        </div>

        {/* My Applications */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">My Internship Journey</h2>
          
          {applications.length > 0 ? (
            <div className="grid gap-4">
              {applications.map((application) => (
                <Card key={application.id} className="border-l-4 border-l-accent">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {application.internship?.title || 'Internship'}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {application.internship?.company_name || 'Company'}
                        </CardDescription>
                      </div>
                      <Badge className={applicationStatusColors[application.status]}>
                        {applicationStatusLabels[application.status]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {application.internship?.duration}
                      </span>
                      <Badge variant="outline">{application.internship?.stream}</Badge>
                    </div>
                    {application.status === 'active' && application.started_at && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Started on {new Date(application.started_at).toLocaleDateString()}
                      </p>
                    )}
                    {application.status === 'completed' && application.completed_at && (
                      <p className="text-sm text-green-600 mt-2">
                        Completed on {new Date(application.completed_at).toLocaleDateString()}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No internship matches yet</h3>
                <p className="text-muted-foreground">
                  Complete your training to receive internship suggestions matched to your skills.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Available Internships Preview */}
        {availableInternships.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Opportunities</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {availableInternships.slice(0, 6).map((internship) => (
                <Card key={internship.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge variant="outline" className="mb-2 w-fit">{internship.stream}</Badge>
                    <CardTitle className="text-lg">{internship.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{internship.positions} position{internship.positions > 1 ? 's' : ''}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Internship matching is based on your training stream and institute recommendations.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentInternships;
