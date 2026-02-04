import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export interface Internship {
  id: string;
  company_id: string;
  title: string;
  stream: string;
  duration: string;
  positions: number;
  description: string;
  requirements: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface NewInternship {
  title: string;
  stream: string;
  duration: string;
  positions: string;
  description: string;
  requirements: string;
}

export const useInternships = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInternships = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("internships")
      .select("*")
      .eq("company_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching internships:", error);
      toast({
        title: "Error",
        description: "Failed to load internships",
        variant: "destructive",
      });
    } else {
      setInternships(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInternships();
  }, [user]);

  const streamLabels: Record<string, string> = {
    "ux-ui-design": "UX/UI Design",
    "full-stack-development": "Full Stack Development",
    "digital-marketing": "Digital Marketing",
    "creative-video-design": "Creative Video Design",
  };

  const durationLabels: Record<string, string> = {
    "3-months": "3 months",
    "4-months": "4 months",
    "5-months": "5 months",
    "6-months": "6 months",
  };

  const createInternship = async (newInternship: NewInternship) => {
    if (!user) return false;

    const { error } = await supabase.from("internships").insert({
      company_id: user.id,
      title: newInternship.title,
      stream: streamLabels[newInternship.stream] || newInternship.stream,
      duration: durationLabels[newInternship.duration] || newInternship.duration,
      positions: parseInt(newInternship.positions) || 1,
      description: newInternship.description,
      requirements: newInternship.requirements || null,
      status: "draft",
    });

    if (error) {
      console.error("Error creating internship:", error);
      toast({
        title: "Error",
        description: "Failed to create internship",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Internship Created",
      description: `"${newInternship.title}" has been created as a draft.`,
    });

    await fetchInternships();
    return true;
  };

  const deleteInternship = async (id: string) => {
    const { error } = await supabase.from("internships").delete().eq("id", id);

    if (error) {
      console.error("Error deleting internship:", error);
      toast({
        title: "Error",
        description: "Failed to delete internship",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Internship Deleted",
      description: "The internship has been removed.",
    });

    await fetchInternships();
    return true;
  };

  const updateInternshipStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("internships")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Error updating internship:", error);
      toast({
        title: "Error",
        description: "Failed to update internship status",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Status Updated",
      description: `Internship is now ${status}.`,
    });

    await fetchInternships();
    return true;
  };

  // Calculate stats
  const activeListings = internships.filter((i) => i.status === "active").length;
  const openPositions = internships.reduce((sum, i) => sum + i.positions, 0);

  return {
    internships,
    loading,
    createInternship,
    deleteInternship,
    updateInternshipStatus,
    activeListings,
    openPositions,
    refetch: fetchInternships,
  };
};
