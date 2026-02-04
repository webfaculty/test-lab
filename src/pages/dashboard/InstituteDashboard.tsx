import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { School, Users, BookOpen, BarChart, ArrowRight } from "lucide-react";

const InstituteDashboard = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const dashboardCards = [
    {
      title: "Institute Profile",
      description: "Manage your institute information",
      icon: School,
      path: "/dashboard/institute/profile",
    },
    {
      title: "Students",
      description: "Manage enrolled students",
      icon: Users,
      path: "/dashboard/institute/students",
    },
    {
      title: "Training Programs",
      description: "Manage your training curriculum",
      icon: BookOpen,
      path: "/dashboard/institute/programs",
    },
    {
      title: "Analytics",
      description: "View placement statistics",
      icon: BarChart,
      path: "/dashboard/institute/analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName={profile?.institute_name || profile?.email || "Institute"}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Institute Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your training programs and student placements
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

export default InstituteDashboard;
