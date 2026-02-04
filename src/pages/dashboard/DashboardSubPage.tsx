import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardHeader from "@/components/DashboardHeader";
import { Construction } from "lucide-react";

const DashboardSubPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract page name from path
  const pathParts = location.pathname.split("/");
  const pageName = pathParts[pathParts.length - 1];
  const dashboardType = pathParts[2]; // student, company, or institute

  const formatPageName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        onBack={() => navigate(`/dashboard/${dashboardType}`)}
        backLabel="Back to Dashboard"
      />

      {/* Main Content */}
      <main className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
            <Construction className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {formatPageName(pageName)}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This feature is coming soon. We're working hard to bring you the
            best experience.
          </p>
          <Button
            variant="cta"
            onClick={() => navigate(`/dashboard/${dashboardType}`)}
          >
            Return to Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DashboardSubPage;
