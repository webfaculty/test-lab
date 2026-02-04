import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

const instituteProfileSchema = z.object({
  institute_name: z.string().min(2, "Institute name must be at least 2 characters").max(150, "Institute name must be less than 150 characters"),
  institute_type: z.enum(["college", "university", "training_institute"], {
    required_error: "Please select an institute type",
  }),
  full_name: z.string().min(2, "Contact person name must be at least 2 characters").max(100, "Name must be less than 100 characters").optional().or(z.literal("")),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().regex(/^[+]?[0-9\s-]{10,15}$/, "Invalid phone number").optional().or(z.literal("")),
});

type InstituteProfileFormValues = z.infer<typeof instituteProfileSchema>;

const InstituteProfile = () => {
  const { profile, signOut, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const form = useForm<InstituteProfileFormValues>({
    resolver: zodResolver(instituteProfileSchema),
    defaultValues: {
      institute_name: "",
      institute_type: undefined,
      full_name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (error) throw error;

        if (data) {
          form.reset({
            institute_name: data.institute_name || "",
            institute_type: data.institute_type as "college" | "university" | "training_institute" | undefined,
            full_name: data.full_name || "",
            email: data.email || "",
            phone: data.phone || "",
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setIsFetching(false);
      }
    };

    fetchProfile();
  }, [user, form]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const onSubmit = async (values: InstituteProfileFormValues) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          institute_name: values.institute_name,
          institute_type: values.institute_type,
          full_name: values.full_name || null,
          email: values.email || null,
          phone: values.phone || null,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", user.id);

      if (error) throw error;

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
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

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Institute Profile</CardTitle>
            <CardDescription>
              Manage your institute information and contact details
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isFetching ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="institute_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institute Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your institute name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="institute_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institute Type *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select institute type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="college">College</SelectItem>
                            <SelectItem value="university">University</SelectItem>
                            <SelectItem value="training_institute">Training Institute</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name of the primary contact" {...field} />
                        </FormControl>
                        <FormDescription>
                          The person responsible for coordinating with IN10SIP
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="contact@institute.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Profile
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InstituteProfile;
