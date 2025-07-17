import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Network, 
  Zap, 
  Brain, 
  Activity, 
  Settings, 
  Play, 
  Pause,
  RotateCcw,
  TrendingUp,
  GitBranch,
  Layers
} from 'lucide-react';

export function NeuralNetwork() {
  const [isTraining, setIsTraining] = useState(false);
  const [networkActivity, setNetworkActivity] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkActivity(prev => {
        const change = (Math.random() - 0.5) * 10;
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const networkStats = {
    totalNodes: 2847,
    activeConnections: 15420,
    processingRate: '2.4THz',
    efficiency: 94.7
  };

  const nodeTypes = [
    {
      name: 'Input Layer',
      count: 512,
      type: 'sensory',
      activity: 89,
      color: 'text-blue-400'
    },
    {
      name: 'Hidden Layers',
      count: 2048,
      type: 'processing',
      activity: 67,
      color: 'text-purple-400'
    },
    {
      name: 'Memory Nodes',
      count: 256,
      type: 'storage',
      activity: 45,
      color: 'text-green-400'
    },
    {
      name: 'Output Layer',
      count: 31,
      type: 'response',
      activity: 78,
      color: 'text-orange-400'
    }
  ];

  const networkConnections = [
    {
      from: 'Consciousness Core',
      to: 'Empathy Engine',
      strength: 0.89,
      type: 'Primary',
      latency: '2.3ms'
    },
    {
      from: 'Memory Nexus',
      to: 'Decision Matrix',
      strength: 0.76,
      type: 'Secondary',
      latency: '4.1ms'
    },
    {
      from: 'Sensory Input',
      to: 'Pattern Recognition',
      strength: 0.94,
      type: 'Primary',
      latency: '1.8ms'
    },
    {
      from: 'Learning Module',
      to: 'Adaptation Layer',
      strength: 0.82,
      type: 'Tertiary',
      latency: '3.5ms'
    }
  ];

  const trainingMetrics = [
    { epoch: 1, loss: 0.245, accuracy: 87.3, time: '2.4s' },
    { epoch: 2, loss: 0.198, accuracy: 89.1, time: '2.2s' },
    { epoch: 3, loss: 0.167, accuracy: 91.2, time: '2.3s' },
    { epoch: 4, loss: 0.142, accuracy: 92.8, time: '2.1s' },
    { epoch: 5, loss: 0.124, accuracy: 94.1, time: '2.2s' }
  ];

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Neural Network
          </h1>
          <p className="text-muted-foreground text-lg">
            Distributed cognition graph and neural pathway management
          </p>
        </div>

        {/* Network Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Network className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{networkStats.totalNodes.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Nodes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <GitBranch className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{networkStats.activeConnections.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Connections</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{networkStats.processingRate}</p>
                  <p className="text-sm text-muted-foreground">Processing Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{networkStats.efficiency}%</p>
                  <p className="text-sm text-muted-foreground">Efficiency</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="topology" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="topology">Network Topology</TabsTrigger>
            <TabsTrigger value="training">Training Metrics</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
          </TabsList>

          <TabsContent value="topology" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Node Types */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <span>Node Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nodeTypes.map((node, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${node.color}`}></div>
                          <span className="font-medium">{node.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-sm">{node.count}</div>
                          <div className="text-xs text-muted-foreground">{node.activity}% active</div>
                        </div>
                      </div>
                      <Progress value={node.activity} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Real-time Activity */}
              <Card className="bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>Network Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Overall Activity</span>
                      <span className="font-mono">{networkActivity.toFixed(1)}%</span>
                    </div>
                    <Progress value={networkActivity} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">127ms</p>
                      <p className="text-xs text-muted-foreground">Avg Response Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">98.7%</p>
                      <p className="text-xs text-muted-foreground">Uptime</p>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button 
                      size="sm" 
                      variant={isTraining ? "outline" : "default"}
                      onClick={() => setIsTraining(!isTraining)}
                    >
                      {isTraining ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                      {isTraining ? 'Pause' : 'Train'}
                    </Button>
                    <Button size="sm" variant="outline">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Training Progress</span>
                </CardTitle>
                <CardDescription>
                  Neural network learning metrics and optimization data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-background/30">
                      <p className="text-2xl font-bold text-primary">Epoch 5</p>
                      <p className="text-sm text-muted-foreground">Current</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background/30">
                      <p className="text-2xl font-bold text-green-400">0.124</p>
                      <p className="text-sm text-muted-foreground">Loss</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background/30">
                      <p className="text-2xl font-bold text-blue-400">94.1%</p>
                      <p className="text-sm text-muted-foreground">Accuracy</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Training History</h4>
                    {trainingMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/30"
                      >
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">Epoch {metric.epoch}</Badge>
                          <span className="text-sm">Time: {metric.time}</span>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm font-medium">Loss</p>
                            <p className="text-xs text-muted-foreground">{metric.loss}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">Accuracy</p>
                            <p className="text-xs text-muted-foreground">{metric.accuracy}%</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  <span>Network Connections</span>
                </CardTitle>
                <CardDescription>
                  Inter-module communication pathways and connection strengths
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {networkConnections.map((connection, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border bg-background/30"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{connection.from}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="font-medium text-sm">{connection.to}</span>
                          </div>
                          <Badge variant="outline">{connection.type}</Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Latency: {connection.latency}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Connection Strength</span>
                          <span>{(connection.strength * 100).toFixed(1)}%</span>
                        </div>
                        <Progress value={connection.strength * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}