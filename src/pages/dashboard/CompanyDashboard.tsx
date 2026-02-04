import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { Building2, Users, Briefcase, FileText, ArrowRight } from "lucide-react";

const CompanyDashboard = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const dashboardCards = [
    {
      title: "Company Profile",
      description: "Manage your company information",
      icon: Building2,
      path: "/dashboard/company/profile",
    },
    {
      title: "Internship Posts",
      description: "Create and manage internship listings",
      icon: Briefcase,
      path: "/dashboard/company/internships",
    },
    {
      title: "Talent Pool",
      description: "Browse pre-trained candidates",
      icon: Users,
      path: "/dashboard/company/talent",
    },
    {
      title: "Applications",
      description: "Review intern applications",
      icon: FileText,
      path: "/dashboard/company/applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName={profile?.company_name || profile?.email || "Company"}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Company Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your internship programs and find pre-trained talent
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
              <CardContent>
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

export default CompanyDashboard;
