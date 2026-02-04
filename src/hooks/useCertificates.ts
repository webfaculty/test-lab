import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export type CertificateType = 'training_completion' | 'internship_completion';

export interface Certificate {
  id: string;
  student_id: string;
  enrollment_id: string | null;
  internship_application_id: string | null;
  certificate_type: CertificateType;
  certificate_number: string;
  issued_at: string;
  download_url: string | null;
  stream?: string;
  title?: string;
}

export const certificateTypeLabels: Record<CertificateType, string> = {
  'training_completion': 'Training Completion Certificate',
  'internship_completion': 'Internship Completion Certificate',
};

export const useCertificates = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCertificates = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("certificates")
        .select(`
          *,
          enrollment:enrollments(stream),
          internship_application:internship_applications(
            internship:internships(title, stream)
          )
        `)
        .eq("student_id", user.id)
        .order("issued_at", { ascending: false });

      if (error) throw error;

      const enrichedCerts = (data || []).map(cert => {
        let stream = '';
        let title = '';
        
        if (cert.certificate_type === 'training_completion' && cert.enrollment) {
          stream = cert.enrollment.stream;
          title = `${stream} Training Completion`;
        } else if (cert.certificate_type === 'internship_completion' && cert.internship_application?.internship) {
          stream = cert.internship_application.internship.stream;
          title = cert.internship_application.internship.title;
        }

        return {
          id: cert.id,
          student_id: cert.student_id,
          enrollment_id: cert.enrollment_id,
          internship_application_id: cert.internship_application_id,
          certificate_type: cert.certificate_type as CertificateType,
          certificate_number: cert.certificate_number,
          issued_at: cert.issued_at,
          download_url: cert.download_url,
          stream,
          title,
        };
      });

      setCertificates(enrichedCerts);

    } catch (error) {
      console.error("Error fetching certificates:", error);
      toast({
        title: "Error",
        description: "Failed to load certificates",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCertificates();
  }, [user]);

  const trainingCertificates = certificates.filter(c => c.certificate_type === 'training_completion');
  const internshipCertificates = certificates.filter(c => c.certificate_type === 'internship_completion');

  return {
    certificates,
    trainingCertificates,
    internshipCertificates,
    loading,
    refetch: fetchCertificates,
  };
};
