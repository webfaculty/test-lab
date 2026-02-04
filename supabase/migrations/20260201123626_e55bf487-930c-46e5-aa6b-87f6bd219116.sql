-- Add institute approval status to profiles table
ALTER TABLE public.profiles 
ADD COLUMN institute_approval_status text DEFAULT 'pending' 
CHECK (institute_approval_status IN ('pending', 'approved', 'rejected'));

-- Create index for faster queries
CREATE INDEX idx_profiles_institution_name ON public.profiles(institution_name);
CREATE INDEX idx_profiles_institute_approval_status ON public.profiles(institute_approval_status);

-- Allow institutes to view students from their institution
CREATE POLICY "Institutes can view students from their institution"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  user_type = 'student' 
  AND institution_name IS NOT NULL 
  AND institution_name = (
    SELECT institute_name FROM public.profiles WHERE user_id = auth.uid() AND user_type = 'institute'
  )
);

-- Allow institutes to update approval status for their students
CREATE POLICY "Institutes can update student approval status"
ON public.profiles
FOR UPDATE
TO authenticated
USING (
  user_type = 'student' 
  AND institution_name IS NOT NULL 
  AND institution_name = (
    SELECT institute_name FROM public.profiles WHERE user_id = auth.uid() AND user_type = 'institute'
  )
)
WITH CHECK (
  user_type = 'student' 
  AND institution_name IS NOT NULL 
  AND institution_name = (
    SELECT institute_name FROM public.profiles WHERE user_id = auth.uid() AND user_type = 'institute'
  )
);