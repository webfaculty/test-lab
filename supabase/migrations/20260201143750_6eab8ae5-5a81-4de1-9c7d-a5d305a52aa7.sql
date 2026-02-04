-- Create internships table
CREATE TABLE public.internships (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  stream TEXT NOT NULL,
  duration TEXT NOT NULL,
  positions INTEGER NOT NULL DEFAULT 1,
  description TEXT NOT NULL,
  requirements TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.internships ENABLE ROW LEVEL SECURITY;

-- Companies can view their own internships
CREATE POLICY "Companies can view their own internships"
ON public.internships FOR SELECT
USING (auth.uid() = company_id);

-- Companies can create their own internships
CREATE POLICY "Companies can create internships"
ON public.internships FOR INSERT
WITH CHECK (auth.uid() = company_id);

-- Companies can update their own internships
CREATE POLICY "Companies can update their own internships"
ON public.internships FOR UPDATE
USING (auth.uid() = company_id);

-- Companies can delete their own internships
CREATE POLICY "Companies can delete their own internships"
ON public.internships FOR DELETE
USING (auth.uid() = company_id);

-- Students can view active internships (for browsing/applying)
CREATE POLICY "Students can view active internships"
ON public.internships FOR SELECT
USING (status = 'active');

-- Trigger for updated_at
CREATE TRIGGER update_internships_updated_at
BEFORE UPDATE ON public.internships
FOR EACH ROW
EXECUTE FUNCTION public.update_contact_updated_at();