import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { LogOut, ArrowLeft } from "lucide-react";

interface DashboardHeaderProps {
  displayName?: string;
  onSignOut?: () => void;
  backPath?: string;
  backLabel?: string;
  onBack?: () => void;
}

const DashboardHeader = ({
  displayName,
  onSignOut,
  backPath,
  backLabel = "Back to Dashboard",
  onBack,
}: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {displayName && (
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {displayName}
            </span>
          )}
          {onBack && (
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{backLabel}</span>
            </Button>
          )}
          {onSignOut && (
            <Button variant="outline" size="sm" onClick={onSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
