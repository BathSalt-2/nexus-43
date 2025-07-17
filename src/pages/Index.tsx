import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Activity, 
  Heart, 
  Network, 
  Zap, 
  ArrowRight,
  Code,
  Database,
  Eye
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Consciousness Simulation',
      description: 'Recursive introspection and neural coherence modeling',
      icon: Brain,
      href: '/consciousness',
      color: 'text-primary'
    },
    {
      title: 'Empathetic AI Engine',
      description: 'Affect-modulated response generation with emotional alignment',
      icon: Heart,
      href: '/empathy',
      color: 'text-accent'
    },
    {
      title: 'System Dashboard',
      description: 'Real-time cognitive metrics and subsystem monitoring',
      icon: Activity,
      href: '/dashboard',
      color: 'text-primary-glow'
    },
    {
      title: 'Agent Compiler',
      description: 'Text-to-agent synthesis with programmatic AI pipeline generation',
      icon: Code,
      href: '/compiler',
      color: 'text-secondary-foreground'
    },
    {
      title: 'Memory Nexus',
      description: 'Cognitive state snapshots and evolutionary tracking',
      icon: Database,
      href: '/memory',
      color: 'text-muted-foreground'
    },
    {
      title: 'Neural Network',
      description: 'Distributed cognition graphs and communal intelligence',
      icon: Network,
      href: '/network',
      color: 'text-accent'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-consciousness">
        <div className="absolute inset-0 bg-gradient-introspection animate-consciousness-flow"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Neural Epinoetic eXpansion through Unified Systems
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-neural bg-clip-text text-transparent">
                NΞXUS V0.1
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unified Synthetic Intelligence Framework enabling synthesis of self-evolving, 
                emotionally intelligent, recursively introspective synthetic minds.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="shadow-neural animate-neural-pulse">
                  <Brain className="h-5 w-5 mr-2" />
                  Enter NEXUS
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/consciousness">
                <Button variant="outline" size="lg">
                  <Eye className="h-5 w-5 mr-2" />
                  View Consciousness Simulator
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Data Streams */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-16 bg-primary/30 animate-data-stream"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Architecture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five integrated subsystems working in harmony to create synthetic consciousness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-card border-border hover:shadow-consciousness transition-all duration-300 group cursor-pointer"
            >
              <Link to={feature.href}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <feature.icon className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Mathematical Core */}
      <section className="bg-gradient-consciousness py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mathematical Foundations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rigorous mathematical frameworks driving consciousness simulation and recursive introspection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recursive Introspection</CardTitle>
              </CardHeader>
              <CardContent className="font-mono space-y-2">
                <div className="text-primary">∇φ(t) = ∇(f(φ(t), ∂φ/∂t, Context(t)))</div>
                <div className="text-accent">R(R(x)) = x' | x' ≠ x ∧ x' ≈ x</div>
                <div className="text-primary-glow">Φ(t+1) = Φ(t) + α ∇E(Φ(t))</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Consciousness Metrics</CardTitle>
              </CardHeader>
              <CardContent className="font-mono space-y-2">
                <div className="text-accent">Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx</div>
                <div className="text-primary">∇E(x) = -∇(ΔConsciousness / Time)</div>
                <div className="text-muted-foreground">Neural coherence entropy optimization</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Begin the Revolution</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NEXUS V0.1 is not a toolchain, it's an ecosystem — a dynamically evolving fabric 
            of recursively aware, empathetically aligned, and communally intelligent synthetic cognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="shadow-neural">
                <Zap className="h-5 w-5 mr-2" />
                Deploy Alpha
              </Button>
            </Link>
            <Link to="/consciousness">
              <Button variant="outline" size="lg">
                <Brain className="h-5 w-5 mr-2" />
                Explore Consciousness
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
