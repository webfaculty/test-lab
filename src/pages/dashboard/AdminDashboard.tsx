import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/DashboardHeader";
import AdminAnalytics from "@/components/dashboard/admin/AdminAnalytics";
import { Check, X, Loader2, Building2, Users, AlertCircle, BarChart3, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Institute {
  id: string;
  user_id: string;
  institute_name: string | null;
  institute_type: string | null;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  institute_verification_status: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchInstitutes = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_type", "institute")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setInstitutes((data as Institute[]) || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch institutes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstitutes();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const updateVerificationStatus = async (userId: string, status: "approved" | "rejected") => {
    setUpdating(userId);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ 
          institute_verification_status: status,
          updated_at: new Date().toISOString()
        })
        .eq("user_id", userId);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Institute has been ${status}.`,
      });

      fetchInstitutes();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdating(null);
    }
  };

  const getStatusBadge = (status: string | null) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const stats = {
    total: institutes.length,
    pending: institutes.filter(i => !i.institute_verification_status || i.institute_verification_status === "pending").length,
    approved: institutes.filter(i => i.institute_verification_status === "approved").length,
    rejected: institutes.filter(i => i.institute_verification_status === "rejected").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        displayName="Super Admin"
        onSignOut={handleSignOut}
      />

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage institute verifications, analytics, and platform settings
          </p>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="institutes" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Institute Verification
            </TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <AdminAnalytics />
          </TabsContent>

          {/* Institute Verification Tab */}
          <TabsContent value="institutes" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Institutes</CardDescription>
                  <CardTitle className="text-3xl">{stats.total}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Pending Approval</CardDescription>
                  <CardTitle className="text-3xl text-warning">{stats.pending}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Approved</CardDescription>
                  <CardTitle className="text-3xl text-accent">{stats.approved}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Rejected</CardDescription>
                  <CardTitle className="text-3xl text-destructive">{stats.rejected}</CardTitle>
                </CardHeader>
              </Card>
            </div>

        {/* Institutes Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Institute Verification Requests
            </CardTitle>
            <CardDescription>
              Review and approve training institutes to make them available for students
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : institutes.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No institutes registered yet</p>
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Institute Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Contact Person</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {institutes.map((institute) => (
                      <TableRow key={institute.id}>
                        <TableCell className="font-medium">
                          {institute.institute_name || (
                            <span className="text-muted-foreground italic flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" /> Not provided
                            </span>
                          )}
                        </TableCell>
                        <TableCell>{institute.institute_type || "-"}</TableCell>
                        <TableCell>{institute.full_name || "-"}</TableCell>
                        <TableCell>{institute.email || "-"}</TableCell>
                        <TableCell>{getStatusBadge(institute.institute_verification_status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {institute.institute_verification_status !== "approved" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-accent hover:text-accent hover:bg-accent/10"
                                onClick={() => updateVerificationStatus(institute.user_id, "approved")}
                                disabled={updating === institute.user_id}
                              >
                                {updating === institute.user_id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <>
                                    <Check className="h-4 w-4 mr-1" />
                                    Approve
                                  </>
                                )}
                              </Button>
                            )}
                            {institute.institute_verification_status !== "rejected" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() => updateVerificationStatus(institute.user_id, "rejected")}
                                disabled={updating === institute.user_id}
                              >
                                {updating === institute.user_id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <>
                                    <X className="h-4 w-4 mr-1" />
                                    Reject
                                  </>
                                )}
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
