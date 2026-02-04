-- Drop the problematic policies causing infinite recursion
DROP POLICY IF EXISTS "Institutes can view students from their institution" ON public.profiles;
DROP POLICY IF EXISTS "Institutes can update student approval status" ON public.profiles;

-- Create a security definer function to get institute name without recursion
CREATE OR REPLACE FUNCTION public.get_institute_name(_user_id uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT institute_name
  FROM public.profiles
  WHERE user_id = _user_id
    AND user_type = 'institute'
  LIMIT 1
$$;

-- Recreate policies using the security definer function
CREATE POLICY "Institutes can view students from their institution"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  user_type = 'student' 
  AND institution_name IS NOT NULL 
  AND institution_name = public.get_institute_name(auth.uid())
);

CREATE POLICY "Institutes can update student approval status"
ON public.profiles
FOR UPDATE
TO authenticated
USING (
  user_type = 'student' 
  AND institution_name IS NOT NULL 
  AND institution_name = public.get_institute_name(auth.uid())
)
WITH CHECK (
  user_type = 'student' 
  AND institution_name IS NOT NULL 
  AND institution_name = public.get_institute_name(auth.uid())
);