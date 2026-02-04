import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardHeader from "@/components/DashboardHeader";
import { GraduationCap, Award, Download, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { useCertificates, certificateTypeLabels } from "@/hooks/useCertificates";
import { useEnrollments, streamLabels } from "@/hooks/useEnrollments";
import sampleCertificate from "@/assets/sample-certificate.png";

const StudentCertifications = () => {
  const navigate = useNavigate();
  const { certificates, trainingCertificates, internshipCertificates, loading: certsLoading } = useCertificates();
  const { enrollments, loading: enrollmentsLoading } = useEnrollments();

  const loading = certsLoading || enrollmentsLoading;

  const handleDownloadCertificate = (certName: string, downloadUrl?: string | null) => {
    const link = document.createElement("a");
    link.href = downloadUrl || sampleCertificate;
    link.download = `${certName.replace(/\s+/g, "-")}-Certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate upcoming certificates based on active enrollments
  const upcomingCertificates = enrollments
    .filter(e => e.status === 'active')
    .map(e => ({
      id: e.id,
      type: 'training' as const,
      stream: e.stream,
      progress: e.overallProgress,
    }));

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
            <GraduationCap className="h-8 w-8 text-accent" />
            My Certifications
          </h1>
          <p className="text-muted-foreground mt-2">
            View your earned certifications and track upcoming achievements
          </p>
        </div>

        {/* Earned Certifications */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            Earned Certifications
          </h2>
          
          {certificates.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {certificates.map((cert) => (
                <Card key={cert.id} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {cert.stream ? streamLabels[cert.stream as keyof typeof streamLabels] || cert.stream : 'Certificate'}
                        </Badge>
                        <CardTitle className="text-lg">
                          {certificateTypeLabels[cert.certificate_type]}
                        </CardTitle>
                        <CardDescription>IN10SIP Academy</CardDescription>
                      </div>
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {new Date(cert.issued_at).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Certificate #: {cert.certificate_number}
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 gap-2"
                        onClick={() => handleDownloadCertificate(cert.title || 'Certificate', cert.download_url)}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No certifications earned yet</h3>
                <p className="text-muted-foreground">
                  Complete your training courses and internships to earn certifications
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Upcoming/In-Progress Certifications */}
        {upcomingCertificates.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Upcoming Certifications</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingCertificates.map((cert) => (
                <Card key={cert.id} className="opacity-90">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {streamLabels[cert.stream]}
                        </Badge>
                        <CardTitle className="text-lg">Training Completion Certificate</CardTitle>
                        <CardDescription>Course Completion</CardDescription>
                      </div>
                      <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                        In Progress
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Course Progress</span>
                        <span className="font-medium">{cert.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all" 
                          style={{ width: `${cert.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Complete all modules to earn this certificate
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentCertifications;
