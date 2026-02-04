import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces"),
  email: z.string()
    .trim()
    .min(1, "Email is required")
    .max(255, "Email must be less than 255 characters")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"),
  phone: z.string()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),
  category: z.enum(["student", "company", "institution"], {
    required_error: "Please select a category",
  }),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
  
  // Student fields
  placementSupport: z.enum(["need_placement", "higher_studies", "need_guidance"]).optional(),
  industriesInterested: z.array(z.string()).optional(),
  
  // Company fields
  companyName: z.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(150, "Company name must be less than 150 characters")
    .regex(/^[A-Za-z0-9][A-Za-z0-9 .&()-]{1,149}$/, "Invalid company name")
    .optional()
    .or(z.literal("")),
  companySize: z.enum(["startup", "small_medium", "large_enterprise"]).optional(),
  companyEnquiryPurposes: z.array(z.string()).optional(),
  
  // Institution fields
  institutionName: z.string()
    .trim()
    .min(2, "Institution name must be at least 2 characters")
    .max(150, "Institution name must be less than 150 characters")
    .regex(/^[A-Za-z][A-Za-z .,'&()-]{1,149}$/, "Invalid institution name")
    .optional()
    .or(z.literal("")),
  institutionType: z.enum(["college", "university", "training_institute"]).optional(),
  institutionEnquiryPurposes: z.array(z.string()).optional(),
  
  // Honeypot
  honeypot: z.string().optional(),
}).refine((data) => {
  if (data.category === "student") {
    return data.placementSupport && data.industriesInterested && data.industriesInterested.length > 0;
  }
  return true;
}, {
  message: "Please complete all student-specific fields",
  path: ["placementSupport"],
}).refine((data) => {
  if (data.category === "company") {
    const companyNameValid = data.companyName && data.companyName.trim().length >= 2;
    return companyNameValid && data.companySize && data.companyEnquiryPurposes && data.companyEnquiryPurposes.length > 0;
  }
  return true;
}, {
  message: "Please complete all company-specific fields",
  path: ["companyName"],
}).refine((data) => {
  if (data.category === "institution") {
    const institutionNameValid = data.institutionName && data.institutionName.trim().length >= 2;
    return institutionNameValid && data.institutionType;
  }
  return true;
}, {
  message: "Please complete all institution-specific fields",
  path: ["institutionName"],
});

type ContactFormData = z.infer<typeof contactSchema>;

const industryOptions = [
  { id: "it", label: "IT Industry" },
  { id: "banking", label: "Corporate Banking" },
  { id: "product", label: "Product-based companies (Google, Amazon, Microsoft, etc.)" },
];

const companyPurposeOptions = [
  { id: "internship_hiring", label: "Internship hiring" },
  { id: "project_interns", label: "Project-based interns" },
  { id: "talent_pipeline", label: "Full-time talent pipeline" },
  { id: "industry_collaboration", label: "Industry collaboration" },
];

const institutionPurposeOptions = [
  { id: "partnership", label: "Partnership inquiry" },
  { id: "training_programs", label: "Training programs" },
  { id: "internship_placement", label: "Internship placement" },
  { id: "curriculum_alignment", label: "Curriculum alignment" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: undefined,
      message: "",
      placementSupport: undefined,
      industriesInterested: [],
      companyName: "",
      companySize: undefined,
      companyEnquiryPurposes: [],
      institutionName: "",
      institutionType: undefined,
      institutionEnquiryPurposes: [],
      honeypot: "",
    },
  });

  const selectedCategory = form.watch("category");

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check - if filled, silently reject
    if (data.honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        category: data.category,
        message: data.message,
        placement_support: data.category === "student" ? data.placementSupport : null,
        industries_interested: data.category === "student" ? data.industriesInterested : null,
        company_name: data.category === "company" ? data.companyName : null,
        company_size: data.category === "company" ? data.companySize : null,
        company_enquiry_purposes: data.category === "company" ? data.companyEnquiryPurposes : null,
        institution_name: data.category === "institution" ? data.institutionName : null,
        institution_type: data.category === "institution" ? data.institutionType : null,
        institution_enquiry_purposes: data.category === "institution" ? data.institutionEnquiryPurposes : null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting IN10SIP. Our team will get back to you shortly.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (
    fieldName: "industriesInterested" | "companyEnquiryPurposes" | "institutionEnquiryPurposes",
    value: string,
    checked: boolean
  ) => {
    const currentValues = form.getValues(fieldName) || [];
    if (checked) {
      form.setValue(fieldName, [...currentValues, value]);
    } else {
      form.setValue(fieldName, currentValues.filter((v) => v !== value));
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-accent py-14 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-accent-foreground/80 uppercase tracking-wider mb-4">
              Contact IN10SIP
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto">
              Have questions or want to partner? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  3 Problems. 1 Solution.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Enabling real-world capability through structured internships.
                  <br />
                  Building the bridge between learning and real work.
                </p>

                <div className="space-y-6">
                  <Card className="border-none shadow-none bg-muted/50">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">Madurai</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-none bg-muted/50">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a
                          href="mailto:Join@In10sip.com"
                          className="text-primary hover:underline"
                        >
                          Join@In10sip.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-none bg-muted/50">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone Number</h3>
                        <div className="flex flex-col gap-1">
                          <a
                            href="tel:+919025286836"
                            className="text-primary hover:underline"
                          >
                            +91 90252 86836
                          </a>
                          <a
                            href="tel:+918122861545"
                            className="text-primary hover:underline"
                          >
                            +91 81228 61545
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {isSubmitted ? (
                  <Alert className="bg-accent/10 border-accent/30">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <AlertDescription className="text-foreground ml-2">
                      Thank you for contacting IN10SIP. Our team will get back to you shortly.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Honeypot field - hidden from users */}
                      <input
                        type="text"
                        {...form.register("honeypot")}
                        className="absolute opacity-0 pointer-events-none"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Category */}
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="company">Company</SelectItem>
                                <SelectItem value="institution">Institution</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Student-specific fields */}
                      {selectedCategory === "student" && (
                        <div className="space-y-6 p-4 bg-muted/30 rounded-lg border">
                          <FormField
                            control={form.control}
                            name="placementSupport"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Do you need placement support? *</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="space-y-2"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="need_placement" id="need_placement" />
                                      <Label htmlFor="need_placement">Yes, I need placement</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="higher_studies" id="higher_studies" />
                                      <Label htmlFor="higher_studies">I am planning higher studies</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="need_guidance" id="need_guidance" />
                                      <Label htmlFor="need_guidance">Need guidance</Label>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="space-y-3">
                            <Label>Which industry are you interested in? *</Label>
                            {industryOptions.map((option) => (
                              <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={option.id}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("industriesInterested", option.id, !!checked)
                                  }
                                />
                                <Label htmlFor={option.id} className="font-normal">
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Company-specific fields */}
                      {selectedCategory === "company" && (
                        <div className="space-y-6 p-4 bg-muted/30 rounded-lg border">
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="companySize"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Size *</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="space-y-2"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="startup" id="startup" />
                                      <Label htmlFor="startup">Startup</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="small_medium" id="small_medium" />
                                      <Label htmlFor="small_medium">Small / Medium Enterprise</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="large_enterprise" id="large_enterprise" />
                                      <Label htmlFor="large_enterprise">Large Enterprise</Label>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="space-y-3">
                            <Label>Purpose of Enquiry *</Label>
                            {companyPurposeOptions.map((option) => (
                              <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={option.id}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("companyEnquiryPurposes", option.id, !!checked)
                                  }
                                />
                                <Label htmlFor={option.id} className="font-normal">
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Institution-specific fields */}
                      {selectedCategory === "institution" && (
                        <div className="space-y-6 p-4 bg-muted/30 rounded-lg border">
                          <FormField
                            control={form.control}
                            name="institutionName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Institution Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your institution name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="institutionType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Institution Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select institution type" />
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

                          <div className="space-y-3">
                            <Label>Purpose of Enquiry (optional)</Label>
                            {institutionPurposeOptions.map((option) => (
                              <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={option.id}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange("institutionEnquiryPurposes", option.id, !!checked)
                                  }
                                />
                                <Label htmlFor={option.id} className="font-normal">
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help you?"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="cta"
                        className="w-full cta-spacing"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
