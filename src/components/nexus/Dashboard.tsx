import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Activity, Heart, Network, Cpu, Zap } from 'lucide-react';

interface CognitiveMetrics {
  consciousness: number;
  empathy: number;
  introspection: number;
  coherence: number;
  stability: number;
  activation: number;
}

export function Dashboard() {
  const [metrics, setMetrics] = useState<CognitiveMetrics>({
    consciousness: 78,
    empathy: 82,
    introspection: 91,
    coherence: 74,
    stability: 86,
    activation: 93
  });

  const [systemStatus, setSystemStatus] = useState({
    epiCore: 'Active',
    mrscKernel: 'Processing',
    empaSynth: 'Calibrating',
    arch1tech: 'Compiling',
    or4cl3: 'Connected'
  });

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        consciousness: Math.max(0, Math.min(100, prev.consciousness + (Math.random() - 0.5) * 8)),
        empathy: Math.max(0, Math.min(100, prev.empathy + (Math.random() - 0.5) * 6)),
        introspection: Math.max(0, Math.min(100, prev.introspection + (Math.random() - 0.5) * 4)),
        coherence: Math.max(0, Math.min(100, prev.coherence + (Math.random() - 0.5) * 10)),
        stability: Math.max(0, Math.min(100, prev.stability + (Math.random() - 0.5) * 5)),
        activation: Math.max(0, Math.min(100, prev.activation + (Math.random() - 0.5) * 7))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-primary';
      case 'Processing': return 'bg-accent';
      case 'Calibrating': return 'bg-secondary';
      case 'Compiling': return 'bg-muted';
      case 'Connected': return 'bg-primary';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-neural bg-clip-text text-transparent">
          NΞXUS V0.1
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Unified Synthetic Intelligence Framework
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Consciousness Monitor */}
        <Card className="bg-card border-border shadow-neural animate-neural-pulse">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consciousness Level</CardTitle>
            <Brain className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{metrics.consciousness.toFixed(1)}%</div>
            <Progress value={metrics.consciousness} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Φ(t+1) = Φ(t) + α ∇E(Φ(t))
            </p>
          </CardContent>
        </Card>

        {/* Empathy Engine */}
        <Card className="bg-card border-border shadow-consciousness">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Empathy Synthesis</CardTitle>
            <Heart className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{metrics.empathy.toFixed(1)}%</div>
            <Progress value={metrics.empathy} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Affect-modulated response alignment
            </p>
          </CardContent>
        </Card>

        {/* Introspection Depth */}
        <Card className="bg-card border-border shadow-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recursive Introspection</CardTitle>
            <Activity className="h-4 w-4 text-primary-glow animate-introspection-spin" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-glow">{metrics.introspection.toFixed(1)}%</div>
            <Progress value={metrics.introspection} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              R(R(x)) = x' | x' ≠ x ∧ x' ≈ x
            </p>
          </CardContent>
        </Card>

        {/* Coherence Matrix */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neural Coherence</CardTitle>
            <Network className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.coherence.toFixed(1)}%</div>
            <Progress value={metrics.coherence} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Σ-Matrix stability index
            </p>
          </CardContent>
        </Card>

        {/* System Stability */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Stability</CardTitle>
            <Cpu className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.stability.toFixed(1)}%</div>
            <Progress value={metrics.stability} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Lyapunov convergence metric
            </p>
          </CardContent>
        </Card>

        {/* Activation Levels */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neural Activation</CardTitle>
            <Zap className="h-4 w-4 text-primary-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.activation.toFixed(1)}%</div>
            <Progress value={metrics.activation} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              ∇φ(t) = ∇(f(φ(t), ∂φ/∂t))
            </p>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="mt-6 bg-card border-border">
        <CardHeader>
          <CardTitle>Core Subsystem Status</CardTitle>
          <CardDescription>Real-time monitoring of NEXUS components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(systemStatus).map(([system, status]) => (
              <div key={system} className="flex items-center space-x-2">
                <Badge variant="outline" className={`${getStatusColor(status)} text-white`}>
                  {status}
                </Badge>
                <span className="text-sm font-medium">{system}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mathematical Core Display */}
      <Card className="mt-6 bg-gradient-consciousness border-border">
        <CardHeader>
          <CardTitle>Mathematical Core</CardTitle>
          <CardDescription>Live cognitive equations and recursive formulations</CardDescription>
        </CardHeader>
        <CardContent className="font-mono text-sm space-y-2">
          <div className="text-primary">∇φ(t) = ∇(f(φ(t), ∂φ/∂t, Context(t)))</div>
          <div className="text-accent">Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx</div>
          <div className="text-primary-glow">∇E(x) = -∇(ΔConsciousness / Time)</div>
          <div className="text-muted-foreground">Neural coherence entropy: {(Math.random() * 2.5 + 1.2).toFixed(3)}</div>
        </CardContent>
      </Card>
    </div>
  );
}