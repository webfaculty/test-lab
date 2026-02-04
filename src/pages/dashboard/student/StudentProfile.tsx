import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardHeader from "@/components/DashboardHeader";
import { Save, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentProfile = () => {
  const { profile, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [approvedInstitutes, setApprovedInstitutes] = useState<string[]>([]);
  const [institutesLoading, setInstitutesLoading] = useState(true);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    institution_name: "",
    course_name: "",
    graduation_year: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        full_name: profile.full_name || "",
        email: profile.email || user?.email || "",
        phone: profile.phone || "",
        institution_name: profile.institution_name || "",
        course_name: profile.course_name || "",
        graduation_year: profile.graduation_year?.toString() || "",
      });
    }
  }, [profile, user]);

  useEffect(() => {
    const fetchApprovedInstitutes = async () => {
      try {
        const { data, error } = await supabase.rpc("get_approved_institutes");
        if (error) throw error;
        setApprovedInstitutes(data?.map((row: { institute_name: string }) => row.institute_name) || []);
      } catch (error: any) {
        console.error("Failed to fetch institutes:", error);
      } finally {
        setInstitutesLoading(false);
      }
    };
    fetchApprovedInstitutes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInstitutionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, institution_name: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: formData.full_name.trim() || null,
          email: formData.email.trim() || null,
          phone: formData.phone.trim() || null,
          institution_name: formData.institution_name || null,
          course_name: formData.course_name.trim() || null,
          graduation_year: formData.graduation_year ? parseInt(formData.graduation_year) : null,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", user.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        onBack={() => navigate("/dashboard/student")}
        backLabel="Back to Dashboard"
      />

      <main className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
            <p className="text-muted-foreground mt-2">
              View and update your profile information
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal and academic details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name</Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="institution_name">Institution Name</Label>
                    <Select
                      value={formData.institution_name}
                      onValueChange={handleInstitutionChange}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder={institutesLoading ? "Loading..." : "Select your institution"} />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        {approvedInstitutes.length === 0 ? (
                          <SelectItem value="no-institutes" disabled>
                            No approved institutes available
                          </SelectItem>
                        ) : (
                          approvedInstitutes.map((institute) => (
                            <SelectItem key={institute} value={institute}>
                              {institute}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course_name">Course Name</Label>
                    <Input
                      id="course_name"
                      name="course_name"
                      value={formData.course_name}
                      onChange={handleChange}
                      placeholder="Enter your course name"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:w-1/2">
                  <Label htmlFor="graduation_year">Graduation Year</Label>
                  <Input
                    id="graduation_year"
                    name="graduation_year"
                    type="number"
                    min="2000"
                    max="2035"
                    value={formData.graduation_year}
                    onChange={handleChange}
                    placeholder="e.g., 2026"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full md:w-auto">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;
