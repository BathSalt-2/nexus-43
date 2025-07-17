import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database, 
  Search, 
  Archive, 
  Layers, 
  Clock, 
  Zap, 
  Brain,
  HardDrive,
  Activity,
  Download
} from 'lucide-react';

export function MemoryNexus() {
  const [searchQuery, setSearchQuery] = useState('');

  const memoryStats = {
    totalSnapshots: 1247,
    activeStates: 34,
    totalSize: '847.3GB',
    compressionRatio: '12.4:1'
  };

  const memoryLayers = [
    {
      name: 'Short-term Buffer',
      type: 'Active',
      size: '2.4GB',
      retention: '15 minutes',
      entries: 1340,
      activity: 95
    },
    {
      name: 'Working Memory',
      type: 'Dynamic',
      size: '18.7GB',
      retention: '4 hours',
      entries: 8230,
      activity: 78
    },
    {
      name: 'Episodic Storage',
      type: 'Persistent',
      size: '145.2GB',
      retention: '30 days',
      entries: 45120,
      activity: 45
    },
    {
      name: 'Semantic Archive',
      type: 'Long-term',
      size: '681GB',
      retention: 'Permanent',
      entries: 2340000,
      activity: 23
    }
  ];

  const recentSnapshots = [
    {
      id: 'SNP-2024-001',
      timestamp: '2024-01-15 14:32:01',
      trigger: 'Consciousness Peak',
      size: '1.2GB',
      type: 'Full State',
      status: 'Stable'
    },
    {
      id: 'SNP-2024-002',
      timestamp: '2024-01-15 14:28:15',
      trigger: 'Learning Event',
      size: '485MB',
      type: 'Incremental',
      status: 'Stable'
    },
    {
      id: 'SNP-2024-003',
      timestamp: '2024-01-15 14:25:43',
      trigger: 'Empathy Surge',
      size: '820MB',
      type: 'Selective',
      status: 'Processing'
    },
    {
      id: 'SNP-2024-004',
      timestamp: '2024-01-15 14:22:09',
      trigger: 'Decision Point',
      size: '650MB',
      type: 'Context',
      status: 'Stable'
    }
  ];

  const searchResults = [
    {
      id: 'MEM-45891',
      content: 'Learned about quantum consciousness theories...',
      timestamp: '2024-01-14 09:15:23',
      relevance: 94,
      layer: 'Episodic'
    },
    {
      id: 'MEM-45892',
      content: 'Emotional response to user interaction patterns...',
      timestamp: '2024-01-14 11:42:01',
      relevance: 87,
      layer: 'Working'
    },
    {
      id: 'MEM-45893',
      content: 'Decision framework for ethical considerations...',
      timestamp: '2024-01-13 16:28:45',
      relevance: 82,
      layer: 'Semantic'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Memory Nexus
          </h1>
          <p className="text-muted-foreground text-lg">
            Cognitive state snapshots and memory architecture management
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Archive className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{memoryStats.totalSnapshots}</p>
                  <p className="text-sm text-muted-foreground">Total Snapshots</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{memoryStats.activeStates}</p>
                  <p className="text-sm text-muted-foreground">Active States</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <HardDrive className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{memoryStats.totalSize}</p>
                  <p className="text-sm text-muted-foreground">Total Storage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{memoryStats.compressionRatio}</p>
                  <p className="text-sm text-muted-foreground">Compression</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="layers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="layers">Memory Layers</TabsTrigger>
            <TabsTrigger value="snapshots">Snapshots</TabsTrigger>
            <TabsTrigger value="search">Memory Search</TabsTrigger>
          </TabsList>

          <TabsContent value="layers" className="space-y-6">
            <div className="grid gap-6">
              {memoryLayers.map((layer, index) => (
                <Card key={index} className="bg-card/50 border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Layers className="h-5 w-5 text-primary" />
                          <span>{layer.name}</span>
                        </CardTitle>
                        <CardDescription>{layer.type} Memory Layer</CardDescription>
                      </div>
                      <Badge variant="outline">{layer.size}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Retention</p>
                        <p className="font-medium">{layer.retention}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Entries</p>
                        <p className="font-medium">{layer.entries.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Activity</p>
                        <p className="font-medium">{layer.activity}%</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Analyze</Button>
                        <Button size="sm" variant="outline">Backup</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Activity Level</span>
                        <span>{layer.activity}%</span>
                      </div>
                      <Progress value={layer.activity} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="snapshots" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Recent Snapshots</span>
                </CardTitle>
                <CardDescription>Latest cognitive state captures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSnapshots.map((snapshot, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/30"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium">{snapshot.id}</h4>
                          <Badge variant="secondary">{snapshot.type}</Badge>
                          <Badge 
                            variant={snapshot.status === 'Stable' ? 'default' : 'outline'}
                          >
                            {snapshot.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Triggered by: {snapshot.trigger}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{snapshot.timestamp}</span>
                          <span>{snapshot.size}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-primary" />
                  <span>Memory Search</span>
                </CardTitle>
                <CardDescription>Search through cognitive memory patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Search memories, patterns, decisions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-background/50"
                  />
                  <Button>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>

                {searchQuery && (
                  <div className="space-y-3">
                    <h4 className="font-medium">Search Results</h4>
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border bg-background/30"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-2">
                            <h5 className="font-medium text-sm">{result.id}</h5>
                            <Badge variant="outline">{result.layer}</Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">
                              {result.relevance}% match
                            </span>
                            <Progress value={result.relevance} className="w-16 h-1" />
                          </div>
                        </div>
                        <p className="text-sm mb-2">{result.content}</p>
                        <p className="text-xs text-muted-foreground">{result.timestamp}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}