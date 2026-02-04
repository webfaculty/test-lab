import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { ArrowLeft, Users, CheckCircle, XCircle, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Student {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  course_name: string | null;
  graduation_year: number | null;
  institute_approval_status: string | null;
}

const InstituteStudents = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    if (!profile?.institute_name) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("id, user_id, full_name, email, phone, course_name, graduation_year, institute_approval_status")
      .eq("user_type", "student")
      .eq("institution_name", profile.institute_name);

    if (error) {
      console.error("Error fetching students:", error);
      toast.error("Failed to load students");
    } else {
      setStudents(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, [profile?.institute_name]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const updateApprovalStatus = async (studentId: string, status: "approved" | "rejected") => {
    const { error } = await supabase
      .from("profiles")
      .update({ institute_approval_status: status })
      .eq("id", studentId);

    if (error) {
      console.error("Error updating approval status:", error);
      toast.error("Failed to update student status");
    } else {
      toast.success(`Student ${status === "approved" ? "approved" : "rejected"} successfully`);
      fetchStudents();
    }
  };

  const getStatusBadge = (status: string | null) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-accent text-accent-foreground"><CheckCircle className="h-3 w-3 mr-1" /> Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Rejected</Badge>;
      default:
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName={profile?.institute_name || profile?.email || "Institute"}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <main className="container py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/dashboard/institute")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Students from {profile?.institute_name || "Your Institute"}
            </CardTitle>
            <CardDescription>
              Review and approve students who registered with IN10SIP from your institution
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!profile?.institute_name ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Please complete your institute profile first to view students.
                </p>
                <Button onClick={() => navigate("/dashboard/institute/profile")}>
                  Complete Profile
                </Button>
              </div>
            ) : loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              </div>
            ) : students.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  No students have registered from your institution yet.
                </p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Graduation Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">
                        {student.full_name || "Not provided"}
                      </TableCell>
                      <TableCell>{student.email || "Not provided"}</TableCell>
                      <TableCell>{student.phone || "Not provided"}</TableCell>
                      <TableCell>{student.course_name || "Not provided"}</TableCell>
                      <TableCell>{student.graduation_year || "Not provided"}</TableCell>
                      <TableCell>{getStatusBadge(student.institute_approval_status)}</TableCell>
                      <TableCell className="text-right">
                        {student.institute_approval_status !== "approved" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="mr-2"
                            onClick={() => updateApprovalStatus(student.id, "approved")}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                        )}
                        {student.institute_approval_status !== "rejected" && (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updateApprovalStatus(student.id, "rejected")}
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InstituteStudents;
