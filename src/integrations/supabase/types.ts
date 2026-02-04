export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      certificates: {
        Row: {
          certificate_number: string
          certificate_type: Database["public"]["Enums"]["certificate_type"]
          created_at: string
          download_url: string | null
          enrollment_id: string | null
          id: string
          internship_application_id: string | null
          issued_at: string
          student_id: string
        }
        Insert: {
          certificate_number: string
          certificate_type: Database["public"]["Enums"]["certificate_type"]
          created_at?: string
          download_url?: string | null
          enrollment_id?: string | null
          id?: string
          internship_application_id?: string | null
          issued_at?: string
          student_id: string
        }
        Update: {
          certificate_number?: string
          certificate_type?: Database["public"]["Enums"]["certificate_type"]
          created_at?: string
          download_url?: string | null
          enrollment_id?: string | null
          id?: string
          internship_application_id?: string | null
          issued_at?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificates_internship_application_id_fkey"
            columns: ["internship_application_id"]
            isOneToOne: false
            referencedRelation: "internship_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          category: Database["public"]["Enums"]["contact_category"]
          company_enquiry_purposes: string[] | null
          company_name: string | null
          company_size: Database["public"]["Enums"]["company_size"] | null
          created_at: string
          email: string
          honeypot: string | null
          id: string
          industries_interested: string[] | null
          institution_enquiry_purposes: string[] | null
          institution_name: string | null
          institution_type:
            | Database["public"]["Enums"]["institution_type"]
            | null
          message: string
          name: string
          phone: string | null
          placement_support:
            | Database["public"]["Enums"]["placement_support"]
            | null
          status: Database["public"]["Enums"]["contact_status"]
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["contact_category"]
          company_enquiry_purposes?: string[] | null
          company_name?: string | null
          company_size?: Database["public"]["Enums"]["company_size"] | null
          created_at?: string
          email: string
          honeypot?: string | null
          id?: string
          industries_interested?: string[] | null
          institution_enquiry_purposes?: string[] | null
          institution_name?: string | null
          institution_type?:
            | Database["public"]["Enums"]["institution_type"]
            | null
          message: string
          name: string
          phone?: string | null
          placement_support?:
            | Database["public"]["Enums"]["placement_support"]
            | null
          status?: Database["public"]["Enums"]["contact_status"]
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["contact_category"]
          company_enquiry_purposes?: string[] | null
          company_name?: string | null
          company_size?: Database["public"]["Enums"]["company_size"] | null
          created_at?: string
          email?: string
          honeypot?: string | null
          id?: string
          industries_interested?: string[] | null
          institution_enquiry_purposes?: string[] | null
          institution_name?: string | null
          institution_type?:
            | Database["public"]["Enums"]["institution_type"]
            | null
          message?: string
          name?: string
          phone?: string | null
          placement_support?:
            | Database["public"]["Enums"]["placement_support"]
            | null
          status?: Database["public"]["Enums"]["contact_status"]
          updated_at?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          completed_at: string | null
          created_at: string
          enrolled_at: string
          id: string
          institute_id: string | null
          status: Database["public"]["Enums"]["enrollment_status"]
          stream: Database["public"]["Enums"]["skill_stream"]
          student_id: string
          updated_at: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          completed_at?: string | null
          created_at?: string
          enrolled_at?: string
          id?: string
          institute_id?: string | null
          status?: Database["public"]["Enums"]["enrollment_status"]
          stream: Database["public"]["Enums"]["skill_stream"]
          student_id: string
          updated_at?: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          completed_at?: string | null
          created_at?: string
          enrolled_at?: string
          id?: string
          institute_id?: string | null
          status?: Database["public"]["Enums"]["enrollment_status"]
          stream?: Database["public"]["Enums"]["skill_stream"]
          student_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      institute_streams: {
        Row: {
          approval_status: string
          approved_at: string | null
          approved_by: string | null
          created_at: string
          id: string
          institute_id: string
          stream: Database["public"]["Enums"]["skill_stream"]
        }
        Insert: {
          approval_status?: string
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          id?: string
          institute_id: string
          stream: Database["public"]["Enums"]["skill_stream"]
        }
        Update: {
          approval_status?: string
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          id?: string
          institute_id?: string
          stream?: Database["public"]["Enums"]["skill_stream"]
        }
        Relationships: []
      }
      internship_applications: {
        Row: {
          admin_reviewed_at: string | null
          admin_reviewed_by: string | null
          completed_at: string | null
          created_at: string
          id: string
          institute_reviewed_at: string | null
          institute_reviewed_by: string | null
          internship_id: string
          notes: string | null
          started_at: string | null
          status: Database["public"]["Enums"]["application_status"]
          student_id: string
          suggested_at: string
          updated_at: string
        }
        Insert: {
          admin_reviewed_at?: string | null
          admin_reviewed_by?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          institute_reviewed_at?: string | null
          institute_reviewed_by?: string | null
          internship_id: string
          notes?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          student_id: string
          suggested_at?: string
          updated_at?: string
        }
        Update: {
          admin_reviewed_at?: string | null
          admin_reviewed_by?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          institute_reviewed_at?: string | null
          institute_reviewed_by?: string | null
          internship_id?: string
          notes?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          student_id?: string
          suggested_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "internship_applications_internship_id_fkey"
            columns: ["internship_id"]
            isOneToOne: false
            referencedRelation: "internships"
            referencedColumns: ["id"]
          },
        ]
      }
      internships: {
        Row: {
          company_id: string
          created_at: string
          description: string
          duration: string
          id: string
          positions: number
          requirements: string | null
          status: string
          stream: string
          title: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          description: string
          duration: string
          id?: string
          positions?: number
          requirements?: string | null
          status?: string
          stream: string
          title: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          description?: string
          duration?: string
          id?: string
          positions?: number
          requirements?: string | null
          status?: string
          stream?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      module_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          enrollment_id: string
          id: string
          module_id: string
          progress_percentage: number
          started_at: string | null
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          enrollment_id: string
          id?: string
          module_id: string
          progress_percentage?: number
          started_at?: string | null
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          enrollment_id?: string
          id?: string
          module_id?: string
          progress_percentage?: number
          started_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "module_progress_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_progress_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "training_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_name: string | null
          company_size: string | null
          course_name: string | null
          created_at: string
          email: string | null
          full_name: string | null
          graduation_year: number | null
          id: string
          industry: string | null
          institute_approval_status: string | null
          institute_name: string | null
          institute_type: string | null
          institute_verification_status: string | null
          institution_name: string | null
          phone: string | null
          updated_at: string
          user_id: string
          user_type: string
        }
        Insert: {
          company_name?: string | null
          company_size?: string | null
          course_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          graduation_year?: number | null
          id?: string
          industry?: string | null
          institute_approval_status?: string | null
          institute_name?: string | null
          institute_type?: string | null
          institute_verification_status?: string | null
          institution_name?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
          user_type: string
        }
        Update: {
          company_name?: string | null
          company_size?: string | null
          course_name?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          graduation_year?: number | null
          id?: string
          industry?: string | null
          institute_approval_status?: string | null
          institute_name?: string | null
          institute_type?: string | null
          institute_verification_status?: string | null
          institution_name?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          user_type?: string
        }
        Relationships: []
      }
      training_modules: {
        Row: {
          created_at: string
          description: string | null
          duration_weeks: number
          id: string
          module_number: number
          stream: Database["public"]["Enums"]["skill_stream"]
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_weeks?: number
          id?: string
          module_number: number
          stream: Database["public"]["Enums"]["skill_stream"]
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_weeks?: number
          id?: string
          module_number?: number
          stream?: Database["public"]["Enums"]["skill_stream"]
          title?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_approved_institutes: {
        Args: never
        Returns: {
          institute_name: string
        }[]
      }
      get_institute_name: { Args: { _user_id: string }; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      application_status:
        | "suggested"
        | "institute_approved"
        | "admin_approved"
        | "active"
        | "completed"
        | "rejected"
      certificate_type: "training_completion" | "internship_completion"
      company_size: "startup" | "small_medium" | "large_enterprise"
      contact_category: "student" | "company" | "institution"
      contact_status: "new" | "in_progress" | "closed"
      enrollment_status:
        | "pending_payment"
        | "pending_approval"
        | "active"
        | "completed"
        | "cancelled"
      institution_type: "college" | "university" | "training_institute"
      placement_support: "need_placement" | "higher_studies" | "need_guidance"
      skill_stream:
        | "ux-ui-design"
        | "full-stack-development"
        | "digital-marketing"
        | "creative-video-design"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      application_status: [
        "suggested",
        "institute_approved",
        "admin_approved",
        "active",
        "completed",
        "rejected",
      ],
      certificate_type: ["training_completion", "internship_completion"],
      company_size: ["startup", "small_medium", "large_enterprise"],
      contact_category: ["student", "company", "institution"],
      contact_status: ["new", "in_progress", "closed"],
      enrollment_status: [
        "pending_payment",
        "pending_approval",
        "active",
        "completed",
        "cancelled",
      ],
      institution_type: ["college", "university", "training_institute"],
      placement_support: ["need_placement", "higher_studies", "need_guidance"],
      skill_stream: [
        "ux-ui-design",
        "full-stack-development",
        "digital-marketing",
        "creative-video-design",
      ],
    },
  },
} as const
