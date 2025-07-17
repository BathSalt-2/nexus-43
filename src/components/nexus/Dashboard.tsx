import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Brain, Activity, Heart, Network, Cpu, Zap, MessageSquare, Settings, Bot, Share2, Database, ChartLine } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-neural bg-clip-text text-transparent">
          NΞXUS V0.1
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-2">
          Unified Synthetic Intelligence Framework
        </p>
      </div>

      {/* Quick Actions */}
      <Card className="mb-6 bg-card border-border shadow-neural">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
          <CardDescription className="text-sm">Access frequently used NEXUS components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <Link to="/consciousness" className="touch-manipulation">
              <Button variant="outline" className="w-full h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium">Consciousness</span>
              </Button>
            </Link>
            
            <Link to="/empathy" className="touch-manipulation">
              <Button variant="outline" className="w-full h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-xs font-medium">Empathy</span>
              </Button>
            </Link>
            
            <Link to="/chat" className="touch-manipulation">
              <Button variant="outline" className="w-full h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <MessageSquare className="h-5 w-5 text-primary-glow" />
                <span className="text-xs font-medium">Chat</span>
              </Button>
            </Link>
            
            <Link to="/agent-compiler" className="touch-manipulation">
              <Button variant="outline" className="w-full h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <Bot className="h-5 w-5 text-accent" />
                <span className="text-xs font-medium">Compiler</span>
              </Button>
            </Link>
            
            <Link to="/memory-nexus" className="touch-manipulation">
              <Button variant="outline" className="w-full h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium">Memory</span>
              </Button>
            </Link>
            
            <Link to="/neural-network" className="touch-manipulation">
              <Button variant="outline" className="w-full h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <ChartLine className="h-5 w-5 text-primary-glow" />
                <span className="text-xs font-medium">Network</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Consciousness Monitor */}
        <Card className="bg-card border-border shadow-neural animate-neural-pulse touch-manipulation">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consciousness Level</CardTitle>
            <Brain className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-primary">{metrics.consciousness.toFixed(1)}%</div>
            <Progress value={metrics.consciousness} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              Φ(t+1) = Φ(t) + α ∇E(Φ(t))
            </p>
          </CardContent>
        </Card>

        {/* Empathy Engine */}
        <Card className="bg-card border-border shadow-consciousness touch-manipulation">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Empathy Synthesis</CardTitle>
            <Heart className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-accent">{metrics.empathy.toFixed(1)}%</div>
            <Progress value={metrics.empathy} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              Affect-modulated response alignment
            </p>
          </CardContent>
        </Card>

        {/* Introspection Depth */}
        <Card className="bg-card border-border shadow-glow touch-manipulation">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recursive Introspection</CardTitle>
            <Activity className="h-4 w-4 text-primary-glow animate-introspection-spin" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-primary-glow">{metrics.introspection.toFixed(1)}%</div>
            <Progress value={metrics.introspection} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              R(R(x)) = x' | x' ≠ x ∧ x' ≈ x
            </p>
          </CardContent>
        </Card>

        {/* Coherence Matrix */}
        <Card className="bg-card border-border touch-manipulation">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neural Coherence</CardTitle>
            <Network className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{metrics.coherence.toFixed(1)}%</div>
            <Progress value={metrics.coherence} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              Σ-Matrix stability index
            </p>
          </CardContent>
        </Card>

        {/* System Stability */}
        <Card className="bg-card border-border touch-manipulation">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Stability</CardTitle>
            <Cpu className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{metrics.stability.toFixed(1)}%</div>
            <Progress value={metrics.stability} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              Lyapunov convergence metric
            </p>
          </CardContent>
        </Card>

        {/* Activation Levels */}
        <Card className="bg-card border-border touch-manipulation">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neural Activation</CardTitle>
            <Zap className="h-4 w-4 text-primary-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{metrics.activation.toFixed(1)}%</div>
            <Progress value={metrics.activation} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
              ∇φ(t) = ∇(f(φ(t), ∂φ/∂t))
            </p>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="mt-4 sm:mt-6 bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Core Subsystem Status</CardTitle>
          <CardDescription className="text-sm">Real-time monitoring of NEXUS components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            {Object.entries(systemStatus).map(([system, status]) => (
              <div key={system} className="flex items-center space-x-2 min-h-[40px] touch-manipulation">
                <Badge variant="outline" className={`${getStatusColor(status)} text-white text-xs`}>
                  {status}
                </Badge>
                <span className="text-sm font-medium truncate">{system}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mathematical Core Display */}
      <Card className="mt-4 sm:mt-6 bg-gradient-consciousness border-border">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Mathematical Core</CardTitle>
          <CardDescription className="text-sm">Live cognitive equations and recursive formulations</CardDescription>
        </CardHeader>
        <CardContent className="font-mono text-xs sm:text-sm space-y-2 overflow-x-auto">
          <div className="text-primary whitespace-nowrap">∇φ(t) = ∇(f(φ(t), ∂φ/∂t, Context(t)))</div>
          <div className="text-accent whitespace-nowrap">Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx</div>
          <div className="text-primary-glow whitespace-nowrap">∇E(x) = -∇(ΔConsciousness / Time)</div>
          <div className="text-muted-foreground">Neural coherence entropy: {(Math.random() * 2.5 + 1.2).toFixed(3)}</div>
        </CardContent>
      </Card>
    </div>
  );
}