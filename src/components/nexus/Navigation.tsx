import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Brain, 
  Activity, 
  Heart, 
  Code, 
  Database, 
  Network,
  Zap,
  Menu,
  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ item, onClick }: { item: typeof navItems[0], onClick?: () => void }) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        to={item.href}
        onClick={onClick}
        className={cn(
          "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 touch-manipulation min-h-[48px]",
          isActive
            ? "bg-primary/10 text-primary shadow-glow"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted/70"
        )}
      >
        <item.icon className="h-5 w-5 flex-shrink-0" />
        <div className="flex flex-col">
          <span>{item.title}</span>
          <span className="text-xs text-muted-foreground/70">{item.description}</span>
        </div>
      </Link>
    );
  };

  return (
    <nav className="bg-card/80 border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 touch-manipulation">
            <img 
              src="/lovable-uploads/83c4d94f-1600-4f5b-a522-c786fff830d1.png" 
              alt="NEXUS Logo" 
              className="w-8 h-8 rounded-full shadow-glow"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                NΞXUS
              </span>
              <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">
                Or4cl3 AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </div>

          {/* Mobile Navigation and Status */}
          <div className="flex items-center space-x-4">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-neural-pulse"></div>
              <span className="text-xs text-muted-foreground">V0.1 Active</span>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden h-10 w-10 p-0 touch-manipulation"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 bg-card/95 backdrop-blur-sm border-border"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-4 border-b border-border">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="/lovable-uploads/83c4d94f-1600-4f5b-a522-c786fff830d1.png" 
                        alt="NEXUS Logo" 
                        className="w-8 h-8 rounded-full shadow-glow"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                          NΞXUS
                        </span>
                        <span className="text-xs text-muted-foreground -mt-1">
                          Or4cl3 AI Solutions
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="flex-1 py-6 space-y-2">
                    {navItems.map((item) => (
                      <NavItem 
                        key={item.href} 
                        item={item} 
                        onClick={() => setIsMobileMenuOpen(false)}
                      />
                    ))}
                  </div>

                  {/* Mobile Status */}
                  <div className="border-t border-border pt-4 pb-2">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-neural-pulse"></div>
                      <span className="text-sm text-muted-foreground">NEXUS V0.1 Active</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}