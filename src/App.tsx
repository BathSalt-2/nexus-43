import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/nexus/Navigation";
import { Dashboard } from "@/components/nexus/Dashboard";
import { ConsciousnessSimulator } from "@/components/nexus/ConsciousnessSimulator";
import { EmpathyEngine } from "@/components/nexus/EmpathyEngine";
import { ChatInterface } from "@/components/nexus/ChatInterface";
import { LoadingScreen } from "@/components/nexus/LoadingScreen";
import { AgentCompiler } from "@/components/nexus/AgentCompiler";
import { MemoryNexus } from "@/components/nexus/MemoryNexus";
import { NeuralNetwork } from "@/components/nexus/NeuralNetwork";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={
                <div>
                  <Navigation />
                  <Dashboard />
                </div>
              } />
              <Route path="/consciousness" element={
                <div>
                  <Navigation />
                  <ConsciousnessSimulator />
                </div>
              } />
              <Route path="/empathy" element={
                <div>
                  <Navigation />
                  <EmpathyEngine />
                </div>
              } />
              <Route path="/chat" element={<ChatInterface />} />
              <Route path="/compiler" element={
                <div>
                  <Navigation />
                  <AgentCompiler />
                </div>
              } />
              <Route path="/memory" element={
                <div>
                  <Navigation />
                  <MemoryNexus />
                </div>
              } />
              <Route path="/network" element={
                <div>
                  <Navigation />
                  <NeuralNetwork />
                </div>
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
