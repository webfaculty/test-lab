import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { ArrowLeft, FileText, User, Calendar, Briefcase, CheckCircle, XCircle, Clock } from "lucide-react";

const CompanyApplications = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Placeholder data for applications
  const applications = [
    {
      id: 1,
      candidateName: "Priya Sharma",
      position: "UX/UI Design Intern",
      appliedDate: "2025-01-25",
      status: "pending",
      institution: "Delhi Technical Institute",
      stream: "UX/UI Design",
    },
    {
      id: 2,
      candidateName: "Rahul Verma",
      position: "Full Stack Development Intern",
      appliedDate: "2025-01-24",
      status: "shortlisted",
      institution: "Mumbai Engineering College",
      stream: "Full Stack Development",
    },
    {
      id: 3,
      candidateName: "Ananya Patel",
      position: "Full Stack Development Intern",
      appliedDate: "2025-01-23",
      status: "pending",
      institution: "Bangalore Business School",
      stream: "Full Stack Development",
    },
    {
      id: 4,
      candidateName: "Vikram Singh",
      position: "UX/UI Design Intern",
      appliedDate: "2025-01-22",
      status: "rejected",
      institution: "Chennai Tech University",
      stream: "UX/UI Design",
    },
    {
      id: 5,
      candidateName: "Sneha Reddy",
      position: "Full Stack Development Intern",
      appliedDate: "2025-01-21",
      status: "accepted",
      institution: "Hyderabad Design Academy",
      stream: "Full Stack Development",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Pending Review</Badge>;
      case "shortlisted":
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Shortlisted</Badge>;
      case "accepted":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Accepted</Badge>;
      case "rejected":
        return <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filterApplications = (status: string) => {
    if (status === "all") return applications;
    return applications.filter((app) => app.status === status);
  };

  const ApplicationCard = ({ application }: { application: typeof applications[0] }) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">{application.candidateName}</h3>
                <p className="text-sm text-muted-foreground">{application.institution}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {application.position}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Applied {new Date(application.appliedDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{application.stream}</Badge>
              {getStatusBadge(application.status)}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm">
              View Profile
            </Button>
            {application.status === "pending" && (
              <div className="flex gap-1">
                <Button size="sm" variant="outline" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <XCircle className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName={profile?.company_name || profile?.email || "Company"}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate("/dashboard/company")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <FileText className="h-8 w-8 text-accent" />
            Applications
          </h1>
          <p className="text-muted-foreground mt-2">
            Review and manage intern applications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Pending
              </CardDescription>
              <CardTitle className="text-2xl">{filterApplications("pending").length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1 text-blue-600">
                Shortlisted
              </CardDescription>
              <CardTitle className="text-2xl">{filterApplications("shortlisted").length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1 text-green-600">
                Accepted
              </CardDescription>
              <CardTitle className="text-2xl">{filterApplications("accepted").length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1 text-red-600">
                Rejected
              </CardDescription>
              <CardTitle className="text-2xl">{filterApplications("rejected").length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Applications Tabs */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({filterApplications("pending").length})</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted ({filterApplications("shortlisted").length})</TabsTrigger>
            <TabsTrigger value="accepted">Accepted ({filterApplications("accepted").length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({filterApplications("rejected").length})</TabsTrigger>
          </TabsList>

          {["all", "pending", "shortlisted", "accepted", "rejected"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              {filterApplications(tab).length > 0 ? (
                filterApplications(tab).map((application) => (
                  <ApplicationCard key={application.id} application={application} />
                ))
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">No applications found</h3>
                  <p className="text-muted-foreground">
                    {tab === "all" ? "No applications have been received yet" : `No ${tab} applications`}
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default CompanyApplications;
