-- Create institute_streams table to track which streams each institute can train
CREATE TABLE public.institute_streams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  institute_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stream skill_stream NOT NULL,
  approval_status TEXT NOT NULL DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(institute_id, stream)
);

-- Add institute_id to enrollments (assigned by admin during approval)
ALTER TABLE public.enrollments 
ADD COLUMN institute_id UUID REFERENCES auth.users(id);

-- Enable RLS on institute_streams
ALTER TABLE public.institute_streams ENABLE ROW LEVEL SECURITY;

-- Institutes can view and manage their own stream registrations
CREATE POLICY "Institutes can view their own streams"
ON public.institute_streams FOR SELECT
USING (auth.uid() = institute_id);

CREATE POLICY "Institutes can register for streams"
ON public.institute_streams FOR INSERT
WITH CHECK (auth.uid() = institute_id);

-- Admins can view and manage all institute streams
CREATE POLICY "Admins can view all institute streams"
ON public.institute_streams FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update institute streams"
ON public.institute_streams FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

-- Everyone can view approved institute streams (for listing available institutes)
CREATE POLICY "Anyone can view approved institute streams"
ON public.institute_streams FOR SELECT
USING (approval_status = 'approved');

-- Update enrollments policy so institutes can view their assigned students
CREATE POLICY "Institutes can view their assigned students"
ON public.enrollments FOR SELECT
USING (auth.uid() = institute_id);