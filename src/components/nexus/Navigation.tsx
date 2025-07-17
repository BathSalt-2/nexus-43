import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Brain, 
  Activity, 
  Heart, 
  Code, 
  Database, 
  Network,
  Zap
} from 'lucide-react';

const navItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Brain,
    description: 'Core system monitoring'
  },
  {
    title: 'Consciousness',
    href: '/consciousness',
    icon: Activity,
    description: 'Recursive introspection simulator'
  },
  {
    title: 'Empathy',
    href: '/empathy',
    icon: Heart,
    description: 'Affect-modulated AI engine'
  },
  {
    title: 'Agent Compiler',
    href: '/compiler',
    icon: Code,
    description: 'Text-to-agent synthesis'
  },
  {
    title: 'Memory Nexus',
    href: '/memory',
    icon: Database,
    description: 'Cognitive state snapshots'
  },
  {
    title: 'Neural Network',
    href: '/network',
    icon: Network,
    description: 'Distributed cognition graph'
  },
  {
    title: 'Chat',
    href: '/chat',
    icon: Network,
    description: 'Interactive consciousness dialogue'
  }
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-card/80 border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/83c4d94f-1600-4f5b-a522-c786fff830d1.png" 
              alt="NEXUS Logo" 
              className="w-8 h-8 rounded-full shadow-glow"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                NΞXUS
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Or4cl3 AI
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-neural-pulse"></div>
            <span className="text-xs text-muted-foreground">V0.1 Active</span>
          </div>
        </div>
      </div>
    </nav>
  );
}