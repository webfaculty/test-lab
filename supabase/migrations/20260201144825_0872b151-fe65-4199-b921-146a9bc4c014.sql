-- Enum for enrollment status
CREATE TYPE public.enrollment_status AS ENUM ('pending_payment', 'pending_approval', 'active', 'completed', 'cancelled');

-- Enum for internship application status
CREATE TYPE public.application_status AS ENUM ('suggested', 'institute_approved', 'admin_approved', 'active', 'completed', 'rejected');

-- Enum for certificate type
CREATE TYPE public.certificate_type AS ENUM ('training_completion', 'internship_completion');

-- Stream enum for consistency
CREATE TYPE public.skill_stream AS ENUM ('ux-ui-design', 'full-stack-development', 'digital-marketing', 'creative-video-design');

-- Training modules for each stream
CREATE TABLE public.training_modules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stream skill_stream NOT NULL,
  module_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  duration_weeks INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(stream, module_number)
);

-- Student enrollments (links student to a stream)
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stream skill_stream NOT NULL,
  status enrollment_status NOT NULL DEFAULT 'pending_payment',
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by UUID REFERENCES auth.users(id),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(student_id, stream)
);

-- Module progress tracking
CREATE TABLE public.module_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  enrollment_id UUID NOT NULL REFERENCES public.enrollments(id) ON DELETE CASCADE,
  module_id UUID NOT NULL REFERENCES public.training_modules(id) ON DELETE CASCADE,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  progress_percentage INTEGER NOT NULL DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(enrollment_id, module_id)
);

-- Internship applications (student applies to internship)
CREATE TABLE public.internship_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  internship_id UUID NOT NULL REFERENCES public.internships(id) ON DELETE CASCADE,
  status application_status NOT NULL DEFAULT 'suggested',
  suggested_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  institute_reviewed_at TIMESTAMP WITH TIME ZONE,
  institute_reviewed_by UUID REFERENCES auth.users(id),
  admin_reviewed_at TIMESTAMP WITH TIME ZONE,
  admin_reviewed_by UUID REFERENCES auth.users(id),
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(student_id, internship_id)
);

-- Student certificates
CREATE TABLE public.certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES public.enrollments(id) ON DELETE SET NULL,
  internship_application_id UUID REFERENCES public.internship_applications(id) ON DELETE SET NULL,
  certificate_type certificate_type NOT NULL,
  certificate_number TEXT NOT NULL UNIQUE,
  issued_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  download_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.training_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internship_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Training modules: Everyone can view
CREATE POLICY "Anyone can view training modules"
ON public.training_modules FOR SELECT USING (true);

-- Enrollments: Students can view their own, admins can view all
CREATE POLICY "Students can view their own enrollments"
ON public.enrollments FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Admins can view all enrollments"
ON public.enrollments FOR SELECT USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Students can create their own enrollment"
ON public.enrollments FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Admins can update enrollments"
ON public.enrollments FOR UPDATE USING (has_role(auth.uid(), 'admin'));

-- Module progress: Students can manage their own
CREATE POLICY "Students can view their own progress"
ON public.module_progress FOR SELECT USING (
  EXISTS (SELECT 1 FROM enrollments e WHERE e.id = enrollment_id AND e.student_id = auth.uid())
);

CREATE POLICY "Students can update their own progress"
ON public.module_progress FOR UPDATE USING (
  EXISTS (SELECT 1 FROM enrollments e WHERE e.id = enrollment_id AND e.student_id = auth.uid())
);

CREATE POLICY "Students can insert their own progress"
ON public.module_progress FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM enrollments e WHERE e.id = enrollment_id AND e.student_id = auth.uid())
);

CREATE POLICY "Admins can manage all progress"
ON public.module_progress FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Internship applications: Students view own, institutes view their students, admins view all
CREATE POLICY "Students can view their own applications"
ON public.internship_applications FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Admins can view all applications"
ON public.internship_applications FOR SELECT USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "System can create applications"
ON public.internship_applications FOR INSERT WITH CHECK (true);

CREATE POLICY "Institutes can update applications for their students"
ON public.internship_applications FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM profiles p 
    WHERE p.user_id = student_id 
    AND p.institution_name = get_institute_name(auth.uid())
  )
);

CREATE POLICY "Admins can update all applications"
ON public.internship_applications FOR UPDATE USING (has_role(auth.uid(), 'admin'));

-- Certificates: Students view own, admins view all
CREATE POLICY "Students can view their own certificates"
ON public.certificates FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Admins can manage all certificates"
ON public.certificates FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Triggers for updated_at
CREATE TRIGGER update_enrollments_updated_at
BEFORE UPDATE ON public.enrollments
FOR EACH ROW EXECUTE FUNCTION public.update_contact_updated_at();

CREATE TRIGGER update_module_progress_updated_at
BEFORE UPDATE ON public.module_progress
FOR EACH ROW EXECUTE FUNCTION public.update_contact_updated_at();

CREATE TRIGGER update_internship_applications_updated_at
BEFORE UPDATE ON public.internship_applications
FOR EACH ROW EXECUTE FUNCTION public.update_contact_updated_at();