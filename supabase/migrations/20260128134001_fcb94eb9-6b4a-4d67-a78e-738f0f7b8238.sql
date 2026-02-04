-- Create enum for contact category
CREATE TYPE public.contact_category AS ENUM ('student', 'company', 'institution');

-- Create enum for contact submission status
CREATE TYPE public.contact_status AS ENUM ('new', 'in_progress', 'closed');

-- Create enum for placement support options
CREATE TYPE public.placement_support AS ENUM ('need_placement', 'higher_studies', 'need_guidance');

-- Create enum for company size options
CREATE TYPE public.company_size AS ENUM ('startup', 'small_medium', 'large_enterprise');

-- Create enum for institution type options
CREATE TYPE public.institution_type AS ENUM ('college', 'university', 'training_institute');

-- Create the contact_submissions table
CREATE TABLE public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    
    -- Common fields
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    category contact_category NOT NULL,
    message TEXT NOT NULL,
    status contact_status NOT NULL DEFAULT 'new',
    
    -- Student-specific fields
    placement_support placement_support,
    industries_interested TEXT[],
    
    -- Company-specific fields
    company_name TEXT,
    company_size company_size,
    company_enquiry_purposes TEXT[],
    
    -- Institution-specific fields
    institution_name TEXT,
    institution_type institution_type,
    institution_enquiry_purposes TEXT[],
    
    -- Honeypot field for spam protection
    honeypot TEXT
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can submit a contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Create policy for selecting (only authenticated users with admin role can view)
-- For now, we'll create a simple policy that allows authenticated users to view
-- This will be refined when admin dashboard is implemented
CREATE POLICY "Authenticated users can view submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create policy for updating (only authenticated users can update)
CREATE POLICY "Authenticated users can update submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_contact_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_contact_updated_at();

-- Create index for filtering by category and status
CREATE INDEX idx_contact_submissions_category ON public.contact_submissions(category);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);