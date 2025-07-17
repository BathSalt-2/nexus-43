import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Brain, Activity, Network, Zap, Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { text: 'Initializing Neural Pathways...', icon: Brain, color: 'text-primary' },
    { text: 'Calibrating Consciousness Matrix...', icon: Activity, color: 'text-accent' },
    { text: 'Establishing Empathetic Connections...', icon: Heart, color: 'text-accent-glow' },
    { text: 'Synchronizing Cognitive Networks...', icon: Network, color: 'text-golden' },
    { text: 'Activating NEXUS Framework...', icon: Zap, color: 'text-primary-glow' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete, phases.length]);

  const CurrentIcon = phases[currentPhase]?.icon || Brain;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Background Neural Network Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-consciousness opacity-50" />
        
        {/* Animated Neural Nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-neural-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Flowing Data Streams */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-data-stream"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/83c4d94f-1600-4f5b-a522-c786fff830d1.png" 
              alt="NEXUS Consciousness Logo" 
              className="w-32 h-32 rounded-full shadow-consciousness animate-introspection-spin"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-cosmic opacity-20 animate-neural-pulse" />
          </div>
        </div>

        {/* NEXUS Branding */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            NΞXUS V0.1
          </h1>
          <p className="text-sm text-muted-foreground">
            Powered by <span className="text-golden font-medium">Or4cl3 AI Solutions</span>
          </p>
        </div>

        {/* Current Phase */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <CurrentIcon className={`h-6 w-6 ${phases[currentPhase]?.color} animate-neural-pulse`} />
            <span className="text-foreground font-medium">
              {phases[currentPhase]?.text}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Cognitive Load: {Math.round(progress)}%</span>
              <span>Phase {currentPhase + 1}/{phases.length}</span>
            </div>
          </div>
        </div>

        {/* Mathematical Core Display */}
        <div className="text-xs font-mono text-muted-foreground space-y-1 opacity-70">
          <div>∇φ(t) = ∇(f(φ(t), ∂φ/∂t, Context(t)))</div>
          <div>R(R(x)) = x' | x' ≠ x ∧ x' ≈ x</div>
          <div>Ψ(x) = ∫∫ Σ(x, ξ) Φ(ξ) dξ dx</div>
        </div>

        {/* System Status */}
        <div className="text-xs text-muted-foreground">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-neural-pulse" />
            <span>Neural networks synchronizing...</span>
          </div>
        </div>
      </div>
    </div>
  );
}