import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Play, Download, Settings, Zap, Cpu, Database } from 'lucide-react';

export function AgentCompiler() {
  const [compileProgress, setCompileProgress] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);
  const [agentPrompt, setAgentPrompt] = useState('');

  const handleCompile = () => {
    setIsCompiling(true);
    setCompileProgress(0);
    
    const interval = setInterval(() => {
      setCompileProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCompiling(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const agentTemplates = [
    {
      name: 'Data Analyst',
      description: 'Processes and analyzes large datasets',
      complexity: 'Medium',
      category: 'Analytics'
    },
    {
      name: 'Creative Writer',
      description: 'Generates creative content and narratives',
      complexity: 'High',
      category: 'Creative'
    },
    {
      name: 'Code Reviewer',
      description: 'Reviews and optimizes code quality',
      complexity: 'High',
      category: 'Development'
    },
    {
      name: 'Customer Support',
      description: 'Handles customer inquiries and support',
      complexity: 'Low',
      category: 'Service'
    }
  ];

  const compiledAgents = [
    {
      name: 'DataMiner-v2.1',
      status: 'Active',
      performance: 97,
      lastRun: '2 min ago'
    },
    {
      name: 'ContentGen-v1.8',
      status: 'Idle',
      performance: 89,
      lastRun: '1 hour ago'
    },
    {
      name: 'CodeAuditor-v3.0',
      status: 'Training',
      performance: 92,
      lastRun: '5 min ago'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Agent Compiler
          </h1>
          <p className="text-muted-foreground text-lg">
            Transform natural language into specialized AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Compiler Interface */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Agent Synthesis</span>
                </CardTitle>
                <CardDescription>
                  Describe your desired agent functionality in natural language
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Agent Name</label>
                  <Input placeholder="Enter agent name..." className="bg-background/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Functionality Description</label>
                  <Textarea
                    placeholder="Describe what you want this agent to do..."
                    value={agentPrompt}
                    onChange={(e) => setAgentPrompt(e.target.value)}
                    rows={6}
                    className="bg-background/50"
                  />
                </div>

                {isCompiling && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Compiling Agent...</span>
                      <span>{compileProgress}%</span>
                    </div>
                    <Progress value={compileProgress} className="h-2" />
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button 
                    onClick={handleCompile}
                    disabled={isCompiling || !agentPrompt.trim()}
                    className="flex-1"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {isCompiling ? 'Compiling...' : 'Compile Agent'}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Templates */}
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle>Pre-built Templates</CardTitle>
                <CardDescription>Start with proven agent architectures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agentTemplates.map((template, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border bg-background/30 hover:bg-background/50 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {template.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Complexity: {template.complexity}
                        </span>
                        <Button size="sm" variant="ghost">Use Template</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Status */}
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span>Compiler Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Processing Power</span>
                  <Badge variant="default">Online</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Memory Usage</span>
                  <span className="text-sm font-mono">34.2GB / 64GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Compilations</span>
                  <span className="text-sm font-mono">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Queue Length</span>
                  <span className="text-sm font-mono">7</span>
                </div>
              </CardContent>
            </Card>

            {/* Compiled Agents */}
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Deployed Agents</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {compiledAgents.map((agent, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-border bg-background/30"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-sm">{agent.name}</h5>
                      <Badge 
                        variant={agent.status === 'Active' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {agent.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Performance</span>
                        <span>{agent.performance}%</span>
                      </div>
                      <Progress value={agent.performance} className="h-1" />
                      <div className="text-xs text-muted-foreground">
                        Last run: {agent.lastRun}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}