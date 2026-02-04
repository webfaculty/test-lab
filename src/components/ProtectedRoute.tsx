import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedUserTypes?: string[];
}

const ProtectedRoute = ({ children, allowedUserTypes }: ProtectedRouteProps) => {
  const { user, profile, loading, isAdmin } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/join" state={{ from: location }} replace />;
  }

  // Check for admin access
  if (allowedUserTypes?.includes("admin")) {
    if (!isAdmin) {
      // Redirect non-admins to their dashboard
      const dashboardPath = profile ? `/dashboard/${profile.user_type}` : "/";
      return <Navigate to={dashboardPath} replace />;
    }
    return <>{children}</>;
  }

  if (allowedUserTypes && profile && !allowedUserTypes.includes(profile.user_type)) {
    // Redirect to the correct dashboard based on user type
    const dashboardPath = `/dashboard/${profile.user_type}`;
    return <Navigate to={dashboardPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
