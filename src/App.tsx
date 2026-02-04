import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Streams from "./pages/Streams";
import StreamDetail from "./pages/StreamDetail";
import UXUIDesign from "./pages/streams/UXUIDesign";
import DigitalMarketing from "./pages/streams/DigitalMarketing";
import FullStackDevelopment from "./pages/streams/FullStackDevelopment";
import CreativeVideoDesign from "./pages/streams/CreativeVideoDesign";
import ForStudents from "./pages/ForStudents";
import ForCompanies from "./pages/ForCompanies";
import ForInstitutes from "./pages/ForInstitutes";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Join from "./pages/Join";
import Install from "./pages/Install";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import CompanyDashboard from "./pages/dashboard/CompanyDashboard";
import CompanyProfile from "./pages/dashboard/company/CompanyProfile";
import CompanyInternships from "./pages/dashboard/company/CompanyInternships";
import CompanyTalentPool from "./pages/dashboard/company/CompanyTalentPool";
import CompanyApplications from "./pages/dashboard/company/CompanyApplications";
import InstituteDashboard from "./pages/dashboard/InstituteDashboard";
import DashboardSubPage from "./pages/dashboard/DashboardSubPage";
import InstituteProfile from "./pages/dashboard/institute/InstituteProfile";
import InstituteStudents from "./pages/dashboard/institute/InstituteStudents";
import StudentProfile from "./pages/dashboard/student/StudentProfile";
import StudentCourses from "./pages/dashboard/student/StudentCourses";
import StudentInternships from "./pages/dashboard/student/StudentInternships";
import StudentCertifications from "./pages/dashboard/student/StudentCertifications";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/streams/ux-ui-design" element={<UXUIDesign />} />
            <Route path="/streams/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/streams/full-stack-development" element={<FullStackDevelopment />} />
            <Route path="/streams/creative-video-design" element={<CreativeVideoDesign />} />
            <Route path="/streams/:slug" element={<StreamDetail />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-companies" element={<ForCompanies />} />
            <Route path="/for-institutes" element={<ForInstitutes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/join" element={<Join />} />
            <Route path="/install" element={<Install />} />
            
            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard/student"
              element={
                <ProtectedRoute allowedUserTypes={["student"]}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/student/profile"
              element={
                <ProtectedRoute allowedUserTypes={["student"]}>
                  <StudentProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/student/courses"
              element={
                <ProtectedRoute allowedUserTypes={["student"]}>
                  <StudentCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/student/internships"
              element={
                <ProtectedRoute allowedUserTypes={["student"]}>
                  <StudentInternships />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/student/certifications"
              element={
                <ProtectedRoute allowedUserTypes={["student"]}>
                  <StudentCertifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/student/:section"
              element={
                <ProtectedRoute allowedUserTypes={["student"]}>
                  <DashboardSubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/company"
              element={
                <ProtectedRoute allowedUserTypes={["company"]}>
                  <CompanyDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/company/profile"
              element={
                <ProtectedRoute allowedUserTypes={["company"]}>
                  <CompanyProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/company/internships"
              element={
                <ProtectedRoute allowedUserTypes={["company"]}>
                  <CompanyInternships />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/company/talent"
              element={
                <ProtectedRoute allowedUserTypes={["company"]}>
                  <CompanyTalentPool />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/company/applications"
              element={
                <ProtectedRoute allowedUserTypes={["company"]}>
                  <CompanyApplications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/company/:section"
              element={
                <ProtectedRoute allowedUserTypes={["company"]}>
                  <DashboardSubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/institute"
              element={
                <ProtectedRoute allowedUserTypes={["institute"]}>
                  <InstituteDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/institute/profile"
              element={
                <ProtectedRoute allowedUserTypes={["institute"]}>
                  <InstituteProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/institute/students"
              element={
                <ProtectedRoute allowedUserTypes={["institute"]}>
                  <InstituteStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/institute/:section"
              element={
                <ProtectedRoute allowedUserTypes={["institute"]}>
                  <DashboardSubPage />
                </ProtectedRoute>
              }
            />
            
            {/* Admin Dashboard Route */}
            <Route
              path="/dashboard/admin"
              element={
                <ProtectedRoute allowedUserTypes={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
