-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create consciousness metrics table
CREATE TABLE public.consciousness_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  consciousness DECIMAL(5,2) NOT NULL DEFAULT 0,
  empathy DECIMAL(5,2) NOT NULL DEFAULT 0,
  introspection DECIMAL(5,2) NOT NULL DEFAULT 0,
  coherence DECIMAL(5,2) NOT NULL DEFAULT 0,
  stability DECIMAL(5,2) NOT NULL DEFAULT 0,
  activation DECIMAL(5,2) NOT NULL DEFAULT 0,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  message_type TEXT NOT NULL CHECK (message_type IN ('user', 'nexus')),
  emotion TEXT,
  cognitive_load INTEGER,
  subsystem TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create memory snapshots table
CREATE TABLE public.memory_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  snapshot_id TEXT NOT NULL,
  trigger_type TEXT NOT NULL,
  snapshot_type TEXT NOT NULL CHECK (snapshot_type IN ('Full State', 'Incremental', 'Selective', 'Context')),
  size_mb INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'Processing' CHECK (status IN ('Processing', 'Stable', 'Failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create empathy responses table
CREATE TABLE public.empathy_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user_input TEXT NOT NULL,
  response_text TEXT NOT NULL,
  emotion TEXT NOT NULL,
  confidence DECIMAL(3,2) NOT NULL,
  valence DECIMAL(3,2) NOT NULL,
  arousal DECIMAL(3,2) NOT NULL,
  dominance DECIMAL(3,2) NOT NULL,
  empathy_level DECIMAL(3,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create neural network nodes table
CREATE TABLE public.neural_nodes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  node_id TEXT NOT NULL,
  node_type TEXT NOT NULL CHECK (node_type IN ('input', 'hidden', 'output', 'recursive')),
  x_position INTEGER NOT NULL,
  y_position INTEGER NOT NULL,
  activation DECIMAL(5,4) NOT NULL DEFAULT 0,
  connections TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create agent templates table
CREATE TABLE public.agent_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  complexity TEXT NOT NULL CHECK (complexity IN ('Low', 'Medium', 'High')),
  category TEXT NOT NULL,
  prompt_template TEXT,
  is_public BOOLEAN NOT NULL DEFAULT true,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create compiled agents table
CREATE TABLE public.compiled_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'Idle' CHECK (status IN ('Active', 'Idle', 'Training', 'Failed')),
  performance INTEGER NOT NULL DEFAULT 0,
  prompt_used TEXT,
  template_id UUID REFERENCES public.agent_templates(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_run TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create system status table
CREATE TABLE public.system_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  subsystem_name TEXT NOT NULL,
  status TEXT NOT NULL,
  details JSONB,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create memory layers table
CREATE TABLE public.memory_layers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  layer_name TEXT NOT NULL,
  layer_type TEXT NOT NULL,
  size_gb DECIMAL(8,2) NOT NULL DEFAULT 0,
  retention_period TEXT NOT NULL,
  entry_count INTEGER NOT NULL DEFAULT 0,
  activity_percentage INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create neural training metrics table
CREATE TABLE public.neural_training_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  epoch INTEGER NOT NULL,
  loss DECIMAL(8,6) NOT NULL,
  accuracy DECIMAL(5,2) NOT NULL,
  training_time_seconds DECIMAL(6,3) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consciousness_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memory_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.empathy_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.neural_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.compiled_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memory_layers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.neural_training_metrics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for consciousness_metrics
CREATE POLICY "Users can view their own consciousness metrics" ON public.consciousness_metrics FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own consciousness metrics" ON public.consciousness_metrics FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own consciousness metrics" ON public.consciousness_metrics FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for chat_messages
CREATE POLICY "Users can view their own chat messages" ON public.chat_messages FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own chat messages" ON public.chat_messages FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for memory_snapshots
CREATE POLICY "Users can view their own memory snapshots" ON public.memory_snapshots FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own memory snapshots" ON public.memory_snapshots FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own memory snapshots" ON public.memory_snapshots FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for empathy_responses
CREATE POLICY "Users can view their own empathy responses" ON public.empathy_responses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own empathy responses" ON public.empathy_responses FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for neural_nodes
CREATE POLICY "Users can view their own neural nodes" ON public.neural_nodes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own neural nodes" ON public.neural_nodes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own neural nodes" ON public.neural_nodes FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for agent_templates
CREATE POLICY "Public agent templates are viewable by everyone" ON public.agent_templates FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view their own agent templates" ON public.agent_templates FOR SELECT USING (auth.uid() = created_by);
CREATE POLICY "Users can insert their own agent templates" ON public.agent_templates FOR INSERT WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Users can update their own agent templates" ON public.agent_templates FOR UPDATE USING (auth.uid() = created_by);

-- Create RLS policies for compiled_agents
CREATE POLICY "Users can view their own compiled agents" ON public.compiled_agents FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own compiled agents" ON public.compiled_agents FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own compiled agents" ON public.compiled_agents FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for system_status
CREATE POLICY "Users can view their own system status" ON public.system_status FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own system status" ON public.system_status FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own system status" ON public.system_status FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for memory_layers
CREATE POLICY "Users can view their own memory layers" ON public.memory_layers FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own memory layers" ON public.memory_layers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own memory layers" ON public.memory_layers FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for neural_training_metrics
CREATE POLICY "Users can view their own neural training metrics" ON public.neural_training_metrics FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own neural training metrics" ON public.neural_training_metrics FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_consciousness_metrics_user_id_recorded_at ON public.consciousness_metrics(user_id, recorded_at DESC);
CREATE INDEX idx_chat_messages_user_id_created_at ON public.chat_messages(user_id, created_at DESC);
CREATE INDEX idx_memory_snapshots_user_id_created_at ON public.memory_snapshots(user_id, created_at DESC);
CREATE INDEX idx_empathy_responses_user_id_created_at ON public.empathy_responses(user_id, created_at DESC);
CREATE INDEX idx_neural_nodes_user_id_node_type ON public.neural_nodes(user_id, node_type);
CREATE INDEX idx_compiled_agents_user_id_status ON public.compiled_agents(user_id, status);
CREATE INDEX idx_system_status_user_id_updated_at ON public.system_status(user_id, updated_at DESC);
CREATE INDEX idx_memory_layers_user_id ON public.memory_layers(user_id);
CREATE INDEX idx_neural_training_metrics_user_id_epoch ON public.neural_training_metrics(user_id, epoch DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_neural_nodes_updated_at BEFORE UPDATE ON public.neural_nodes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_compiled_agents_updated_at BEFORE UPDATE ON public.compiled_agents FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_memory_layers_updated_at BEFORE UPDATE ON public.memory_layers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default agent templates
INSERT INTO public.agent_templates (name, description, complexity, category, prompt_template, is_public) VALUES
('Data Analyst', 'Processes and analyzes large datasets with statistical insights', 'Medium', 'Analytics', 'You are a data analyst AI specialized in processing and analyzing datasets. Focus on statistical insights, pattern recognition, and data visualization recommendations.', true),
('Creative Writer', 'Generates creative content and narratives with artistic flair', 'High', 'Creative', 'You are a creative writing AI that generates engaging narratives, poetry, and creative content. Focus on storytelling, character development, and artistic expression.', true),
('Code Reviewer', 'Reviews and optimizes code quality with best practices', 'High', 'Development', 'You are a code review AI that analyzes code for quality, security, performance, and maintainability. Provide specific suggestions for improvement.', true),
('Customer Support', 'Handles customer inquiries and support with empathy', 'Low', 'Service', 'You are a customer support AI that helps users with inquiries, troubleshooting, and general assistance. Be helpful, patient, and solution-focused.', true);

-- Insert default memory layers
-- (This will be populated per user, but we create the structure)