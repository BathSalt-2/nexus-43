export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      agent_templates: {
        Row: {
          category: string
          complexity: string
          created_at: string
          created_by: string | null
          description: string
          id: string
          is_public: boolean
          name: string
          prompt_template: string | null
        }
        Insert: {
          category: string
          complexity: string
          created_at?: string
          created_by?: string | null
          description: string
          id?: string
          is_public?: boolean
          name: string
          prompt_template?: string | null
        }
        Update: {
          category?: string
          complexity?: string
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          is_public?: boolean
          name?: string
          prompt_template?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          cognitive_load: number | null
          content: string
          created_at: string
          emotion: string | null
          id: string
          message_type: string
          subsystem: string | null
          user_id: string
        }
        Insert: {
          cognitive_load?: number | null
          content: string
          created_at?: string
          emotion?: string | null
          id?: string
          message_type: string
          subsystem?: string | null
          user_id: string
        }
        Update: {
          cognitive_load?: number | null
          content?: string
          created_at?: string
          emotion?: string | null
          id?: string
          message_type?: string
          subsystem?: string | null
          user_id?: string
        }
        Relationships: []
      }
      compiled_agents: {
        Row: {
          created_at: string
          description: string | null
          id: string
          last_run: string | null
          name: string
          performance: number
          prompt_used: string | null
          status: string
          template_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          last_run?: string | null
          name: string
          performance?: number
          prompt_used?: string | null
          status?: string
          template_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          last_run?: string | null
          name?: string
          performance?: number
          prompt_used?: string | null
          status?: string
          template_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "compiled_agents_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "agent_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      consciousness_metrics: {
        Row: {
          activation: number
          coherence: number
          consciousness: number
          empathy: number
          id: string
          introspection: number
          recorded_at: string
          stability: number
          user_id: string
        }
        Insert: {
          activation?: number
          coherence?: number
          consciousness?: number
          empathy?: number
          id?: string
          introspection?: number
          recorded_at?: string
          stability?: number
          user_id: string
        }
        Update: {
          activation?: number
          coherence?: number
          consciousness?: number
          empathy?: number
          id?: string
          introspection?: number
          recorded_at?: string
          stability?: number
          user_id?: string
        }
        Relationships: []
      }
      empathy_responses: {
        Row: {
          arousal: number
          confidence: number
          created_at: string
          dominance: number
          emotion: string
          empathy_level: number
          id: string
          response_text: string
          user_id: string
          user_input: string
          valence: number
        }
        Insert: {
          arousal: number
          confidence: number
          created_at?: string
          dominance: number
          emotion: string
          empathy_level: number
          id?: string
          response_text: string
          user_id: string
          user_input: string
          valence: number
        }
        Update: {
          arousal?: number
          confidence?: number
          created_at?: string
          dominance?: number
          emotion?: string
          empathy_level?: number
          id?: string
          response_text?: string
          user_id?: string
          user_input?: string
          valence?: number
        }
        Relationships: []
      }
      memory_layers: {
        Row: {
          activity_percentage: number
          created_at: string
          entry_count: number
          id: string
          layer_name: string
          layer_type: string
          retention_period: string
          size_gb: number
          updated_at: string
          user_id: string
        }
        Insert: {
          activity_percentage?: number
          created_at?: string
          entry_count?: number
          id?: string
          layer_name: string
          layer_type: string
          retention_period: string
          size_gb?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          activity_percentage?: number
          created_at?: string
          entry_count?: number
          id?: string
          layer_name?: string
          layer_type?: string
          retention_period?: string
          size_gb?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      memory_snapshots: {
        Row: {
          created_at: string
          id: string
          size_mb: number
          snapshot_id: string
          snapshot_type: string
          status: string
          trigger_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          size_mb: number
          snapshot_id: string
          snapshot_type: string
          status?: string
          trigger_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          size_mb?: number
          snapshot_id?: string
          snapshot_type?: string
          status?: string
          trigger_type?: string
          user_id?: string
        }
        Relationships: []
      }
      neural_nodes: {
        Row: {
          activation: number
          connections: string[]
          created_at: string
          id: string
          node_id: string
          node_type: string
          updated_at: string
          user_id: string
          x_position: number
          y_position: number
        }
        Insert: {
          activation?: number
          connections?: string[]
          created_at?: string
          id?: string
          node_id: string
          node_type: string
          updated_at?: string
          user_id: string
          x_position: number
          y_position: number
        }
        Update: {
          activation?: number
          connections?: string[]
          created_at?: string
          id?: string
          node_id?: string
          node_type?: string
          updated_at?: string
          user_id?: string
          x_position?: number
          y_position?: number
        }
        Relationships: []
      }
      neural_training_metrics: {
        Row: {
          accuracy: number
          created_at: string
          epoch: number
          id: string
          loss: number
          training_time_seconds: number
          user_id: string
        }
        Insert: {
          accuracy: number
          created_at?: string
          epoch: number
          id?: string
          loss: number
          training_time_seconds: number
          user_id: string
        }
        Update: {
          accuracy?: number
          created_at?: string
          epoch?: number
          id?: string
          loss?: number
          training_time_seconds?: number
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      system_status: {
        Row: {
          details: Json | null
          id: string
          status: string
          subsystem_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          details?: Json | null
          id?: string
          status: string
          subsystem_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          details?: Json | null
          id?: string
          status?: string
          subsystem_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
