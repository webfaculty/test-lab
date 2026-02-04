-- Add approval_status to profiles for institutes (if not exists, it's reusing institute_approval_status concept but for institutes themselves)
-- We'll use a new column 'institute_verification_status' for institute accounts

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS institute_verification_status text DEFAULT 'pending';

-- Create an index for faster lookups of approved institutes
CREATE INDEX IF NOT EXISTS idx_profiles_approved_institutes 
ON public.profiles (institute_name, institute_verification_status) 
WHERE user_type = 'institute';

-- Create a function to get approved institute names for student dropdown
CREATE OR REPLACE FUNCTION public.get_approved_institutes()
RETURNS TABLE(institute_name text)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT DISTINCT p.institute_name
  FROM public.profiles p
  WHERE p.user_type = 'institute'
    AND p.institute_name IS NOT NULL
    AND p.institute_verification_status = 'approved'
  ORDER BY p.institute_name
$$;

-- Allow authenticated users to call this function (for student dropdown)
GRANT EXECUTE ON FUNCTION public.get_approved_institutes() TO authenticated;

-- Create policy for admins to view all profiles (for admin panel)
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create policy for admins to update any profile (for approval workflow)
CREATE POLICY "Admins can update all profiles"
ON public.profiles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));