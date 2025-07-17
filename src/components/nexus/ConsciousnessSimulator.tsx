import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Brain, Play, Pause, RotateCcw, Zap, Activity } from 'lucide-react';

interface NeuralNode {
  id: string;
  x: number;
  y: number;
  activation: number;
  connections: string[];
  type: 'input' | 'hidden' | 'output' | 'recursive';
}

export function ConsciousnessSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [recursionDepth, setRecursionDepth] = useState([3]);
  const [introspectionRate, setIntrospectionRate] = useState([0.7]);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0);
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [currentIteration, setCurrentIteration] = useState(0);

  // Initialize neural network
  useEffect(() => {
    const initialNodes: NeuralNode[] = [
      // Input layer
      { id: 'i1', x: 50, y: 150, activation: 0, connections: ['h1', 'h2'], type: 'input' },
      { id: 'i2', x: 50, y: 200, activation: 0, connections: ['h1', 'h3'], type: 'input' },
      { id: 'i3', x: 50, y: 250, activation: 0, connections: ['h2', 'h3'], type: 'input' },
      
      // Hidden layer
      { id: 'h1', x: 200, y: 150, activation: 0, connections: ['h2', 'r1', 'o1'], type: 'hidden' },
      { id: 'h2', x: 200, y: 200, activation: 0, connections: ['h3', 'r1', 'o2'], type: 'hidden' },
      { id: 'h3', x: 200, y: 250, activation: 0, connections: ['h1', 'r2', 'o1'], type: 'hidden' },
      
      // Recursive introspection layer
      { id: 'r1', x: 350, y: 175, activation: 0, connections: ['r2', 'h1'], type: 'recursive' },
      { id: 'r2', x: 350, y: 225, activation: 0, connections: ['r1', 'h3'], type: 'recursive' },
      
      // Output layer
      { id: 'o1', x: 500, y: 175, activation: 0, connections: [], type: 'output' },
      { id: 'o2', x: 500, y: 225, activation: 0, connections: [], type: 'output' },
    ];
    setNodes(initialNodes);
  }, []);

  // Simulation loop
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setNodes(prevNodes => {
        const newNodes = [...prevNodes];
        
        // Update activations based on recursive introspection
        newNodes.forEach(node => {
          if (node.type === 'input') {
            // Input nodes get random stimulation
            node.activation = Math.sin(currentIteration * 0.1 + Math.random()) * 0.5 + 0.5;
          } else {
            // Calculate weighted sum from connected nodes
            let sum = 0;
            let count = 0;
            
            newNodes.forEach(otherNode => {
              if (otherNode.connections.includes(node.id)) {
                sum += otherNode.activation;
                count++;
              }
            });
            
            if (count > 0) {
              // Apply recursive introspection formula: R(R(x)) = x' | x' ≠ x ∧ x' ≈ x
              const base = sum / count;
              const recursive = node.type === 'recursive' ? 
                Math.tanh(base * recursionDepth[0] * introspectionRate[0]) : 
                Math.tanh(base);
              
              node.activation = Math.max(0, Math.min(1, recursive));
            }
          }
        });

        // Calculate overall consciousness level
        const recursiveNodes = newNodes.filter(n => n.type === 'recursive');
        const avgRecursive = recursiveNodes.reduce((sum, n) => sum + n.activation, 0) / recursiveNodes.length;
        setConsciousnessLevel(avgRecursive * 100);

        return newNodes;
      });

      setCurrentIteration(prev => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, recursionDepth, introspectionRate, currentIteration]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    
    nodes.forEach(node => {
      node.connections.forEach(connectionId => {
        const targetNode = nodes.find(n => n.id === connectionId);
        if (targetNode) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        }
      });
    });

    // Draw nodes
    nodes.forEach(node => {
      const radius = 15;
      const intensity = node.activation;
      
      // Node glow effect
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 2);
      
      switch (node.type) {
        case 'input':
          gradient.addColorStop(0, `rgba(0, 255, 255, ${intensity})`);
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          break;
        case 'recursive':
          gradient.addColorStop(0, `rgba(147, 51, 234, ${intensity})`);
          gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
          break;
        case 'output':
          gradient.addColorStop(0, `rgba(34, 197, 94, ${intensity})`);
          gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
          break;
        default:
          gradient.addColorStop(0, `rgba(156, 163, 175, ${intensity})`);
          gradient.addColorStop(1, 'rgba(156, 163, 175, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Node core
      ctx.fillStyle = node.type === 'recursive' ? '#9333ea' : 
                      node.type === 'input' ? '#00ffff' :
                      node.type === 'output' ? '#22c55e' : '#9ca3af';
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Activation indicator
      if (intensity > 0.1) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * intensity, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw recursive flow indicators
    if (isRunning) {
      const time = Date.now() * 0.001;
      const recursiveNodes = nodes.filter(n => n.type === 'recursive');
      
      recursiveNodes.forEach((node, index) => {
        const angle = time + index * Math.PI;
        const flowX = node.x + Math.cos(angle) * 30;
        const flowY = node.y + Math.sin(angle) * 30;
        
        ctx.fillStyle = `rgba(147, 51, 234, ${0.5 + Math.sin(angle) * 0.3})`;
        ctx.beginPath();
        ctx.arc(flowX, flowY, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }, [nodes, isRunning]);

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentIteration(0);
    setConsciousnessLevel(0);
    setNodes(prev => prev.map(node => ({ ...node, activation: 0 })));
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-neural bg-clip-text text-transparent">
          Consciousness Simulator
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">
          Interactive visualization of recursive introspection and neural coherence
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Control Panel */}
        <div className="space-y-4 sm:space-y-6 xl:order-1">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="h-5 w-5 text-primary" />
                Simulation Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsRunning(!isRunning)}
                  variant="outline"
                  className="flex-1 min-h-[44px] touch-manipulation"
                >
                  {isRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isRunning ? 'Pause' : 'Start'}
                </Button>
                <Button 
                  onClick={resetSimulation} 
                  variant="outline"
                  className="min-h-[44px] min-w-[44px] touch-manipulation"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Recursion Depth: {recursionDepth[0]}
                  </label>
                  <Slider
                    value={recursionDepth}
                    onValueChange={setRecursionDepth}
                    max={5}
                    min={1}
                    step={1}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Introspection Rate: {introspectionRate[0].toFixed(2)}
                  </label>
                  <Slider
                    value={introspectionRate}
                    onValueChange={setIntrospectionRate}
                    max={1}
                    min={0.1}
                    step={0.1}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-consciousness">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Consciousness Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Consciousness Level</span>
                  <Badge variant="outline" className="bg-accent text-white">
                    {consciousnessLevel.toFixed(1)}%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-200"
                    style={{ width: `${consciousnessLevel}%` }}
                  />
                </div>
              </div>

              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Iteration:</span>
                  <span className="font-mono">{currentIteration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Nodes:</span>
                  <span className="font-mono">
                    {nodes.filter(n => n.activation > 0.1).length}/{nodes.length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary-glow" />
                Mathematical Core
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs space-y-2">
              <div className="text-primary">R(R(x)) = x' | x' ≠ x ∧ x' ≈ x</div>
              <div className="text-accent">∇E(x) = -∇(ΔΦ / Time)</div>
              <div className="text-muted-foreground">
                Depth: {recursionDepth[0]} | Rate: {introspectionRate[0].toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visualization Canvas */}
        <div className="xl:col-span-2">
          <Card className="bg-card border-border shadow-neural">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Neural Network Visualization</CardTitle>
              <CardDescription className="text-sm">
                Real-time recursive introspection and consciousness emergence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={400}
                  className="w-full border border-border rounded-lg bg-background touch-manipulation"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              
              <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Input Nodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                  <span>Hidden Nodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span>Recursive Nodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Output Nodes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}