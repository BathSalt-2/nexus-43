import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Heart, MessageCircle, Brain, Activity, Smile, Frown, Meh } from 'lucide-react';

interface EmotionalState {
  valence: number; // positive/negative
  arousal: number; // calm/excited
  dominance: number; // submissive/dominant
}

interface EmpathyResponse {
  text: string;
  emotion: string;
  confidence: number;
  affectModulation: EmotionalState;
}

export function EmpathyEngine() {
  const [userInput, setUserInput] = useState('');
  const [currentEmotion, setCurrentEmotion] = useState<EmotionalState>({
    valence: 0.5,
    arousal: 0.5,
    dominance: 0.5
  });
  const [empathyLevel, setEmpathyLevel] = useState([0.8]);
  const [responses, setResponses] = useState<EmpathyResponse[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [affectiveWeights, setAffectiveWeights] = useState({
    cognitive: 0.7,
    emotional: 0.8,
    contextual: 0.6
  });

  // Emotion detection from text (simplified)
  const analyzeEmotion = (text: string): EmotionalState => {
    const words = text.toLowerCase().split(' ');
    
    // Simple emotion lexicon
    const positiveWords = ['happy', 'joy', 'love', 'good', 'great', 'wonderful', 'amazing', 'excited'];
    const negativeWords = ['sad', 'angry', 'hate', 'bad', 'terrible', 'awful', 'frustrated', 'upset'];
    const highArousalWords = ['excited', 'energetic', 'thrilled', 'angry', 'furious', 'ecstatic'];
    const lowArousalWords = ['calm', 'peaceful', 'tired', 'bored', 'relaxed', 'sleepy'];
    
    let valence = 0.5;
    let arousal = 0.5;
    let dominance = 0.5;
    
    words.forEach(word => {
      if (positiveWords.includes(word)) valence += 0.1;
      if (negativeWords.includes(word)) valence -= 0.1;
      if (highArousalWords.includes(word)) arousal += 0.1;
      if (lowArousalWords.includes(word)) arousal -= 0.1;
      if (word.includes('!')) arousal += 0.05;
      if (word.includes('?')) dominance -= 0.05;
    });
    
    return {
      valence: Math.max(0, Math.min(1, valence)),
      arousal: Math.max(0, Math.min(1, arousal)),
      dominance: Math.max(0, Math.min(1, dominance))
    };
  };

  // Generate empathetic response
  const generateEmpathyResponse = async (input: string, userEmotion: EmotionalState): Promise<EmpathyResponse> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const empathyStrength = empathyLevel[0];
    
    // Affect modulation based on user emotion
    const responseEmotion = {
      valence: userEmotion.valence * empathyStrength + (1 - empathyStrength) * 0.5,
      arousal: userEmotion.arousal * 0.8, // Slightly dampen arousal for stability
      dominance: 0.3 + userEmotion.dominance * 0.4 // Maintain supportive stance
    };
    
    // Generate contextual response based on emotional state
    let responseText = '';
    let emotion = '';
    
    if (userEmotion.valence > 0.7) {
      emotion = 'positive';
      responseText = empathyStrength > 0.7 ? 
        "I can sense your positive energy! That's wonderful to hear. Your enthusiasm is contagious and I'm genuinely happy for you." :
        "That sounds positive. I'm glad things are going well for you.";
    } else if (userEmotion.valence < 0.3) {
      emotion = 'supportive';
      responseText = empathyStrength > 0.7 ?
        "I can feel the weight of what you're going through. It sounds really challenging, and I want you to know that your feelings are completely valid. You're not alone in this." :
        "I understand this is difficult for you. These feelings are natural given what you're experiencing.";
    } else {
      emotion = 'neutral';
      responseText = empathyStrength > 0.7 ?
        "I'm here with you in this moment. Sometimes it's okay to feel uncertain or in-between. What you're experiencing matters." :
        "I hear what you're saying. Tell me more about how you're feeling about this.";
    }
    
    // Add arousal-based modulation
    if (userEmotion.arousal > 0.7) {
      responseText += " I can sense the intensity of your feelings.";
    } else if (userEmotion.arousal < 0.3) {
      responseText += " Take your time - there's no rush.";
    }
    
    return {
      text: responseText,
      emotion,
      confidence: empathyStrength * 0.9 + Math.random() * 0.1,
      affectModulation: responseEmotion
    };
  };

  const handleSubmit = async () => {
    if (!userInput.trim()) return;
    
    setIsProcessing(true);
    
    // Analyze user emotion
    const userEmotion = analyzeEmotion(userInput);
    setCurrentEmotion(userEmotion);
    
    // Generate empathetic response
    const response = await generateEmpathyResponse(userInput, userEmotion);
    
    setResponses(prev => [...prev, response]);
    setUserInput('');
    setIsProcessing(false);
  };

  const getEmotionIcon = (emotion: EmotionalState) => {
    if (emotion.valence > 0.6) return <Smile className="h-4 w-4 text-green-400" />;
    if (emotion.valence < 0.4) return <Frown className="h-4 w-4 text-red-400" />;
    return <Meh className="h-4 w-4 text-yellow-400" />;
  };

  const getEmotionColor = (valence: number) => {
    if (valence > 0.6) return 'bg-green-500';
    if (valence < 0.4) return 'bg-red-500';
    return 'bg-yellow-500';
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-neural bg-clip-text text-transparent">
          EmpaSynth Engine
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">
          Empathetic AI with affect-modulated response generation
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Control Panel */}
        <div className="space-y-4 sm:space-y-6 xl:order-1">
          <Card className="bg-card border-border shadow-consciousness">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Heart className="h-5 w-5 text-accent" />
                Empathy Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Empathy Level: {(empathyLevel[0] * 100).toFixed(0)}%
                </label>
                <Slider
                  value={empathyLevel}
                  onValueChange={setEmpathyLevel}
                  max={1}
                  min={0.1}
                  step={0.1}
                  className="touch-manipulation"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Cognitive Weight: {affectiveWeights.cognitive.toFixed(1)}
                  </label>
                  <Slider
                    value={[affectiveWeights.cognitive]}
                    onValueChange={([value]) => 
                      setAffectiveWeights(prev => ({ ...prev, cognitive: value }))
                    }
                    max={1}
                    min={0}
                    step={0.1}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Emotional Weight: {affectiveWeights.emotional.toFixed(1)}
                  </label>
                  <Slider
                    value={[affectiveWeights.emotional]}
                    onValueChange={([value]) => 
                      setAffectiveWeights(prev => ({ ...prev, emotional: value }))
                    }
                    max={1}
                    min={0}
                    step={0.1}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Contextual Weight: {affectiveWeights.contextual.toFixed(1)}
                  </label>
                  <Slider
                    value={[affectiveWeights.contextual]}
                    onValueChange={([value]) => 
                      setAffectiveWeights(prev => ({ ...prev, contextual: value }))
                    }
                    max={1}
                    min={0}
                    step={0.1}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary-glow" />
                Current Emotional State
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Detected Emotion</span>
                {getEmotionIcon(currentEmotion)}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Valence</span>
                    <span className="text-xs">{(currentEmotion.valence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-300 ${getEmotionColor(currentEmotion.valence)}`}
                      style={{ width: `${currentEmotion.valence * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Arousal</span>
                    <span className="text-xs">{(currentEmotion.arousal * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1">
                    <div 
                      className="bg-primary h-1 rounded-full transition-all duration-300"
                      style={{ width: `${currentEmotion.arousal * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Dominance</span>
                    <span className="text-xs">{(currentEmotion.dominance * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1">
                    <div 
                      className="bg-accent h-1 rounded-full transition-all duration-300"
                      style={{ width: `${currentEmotion.dominance * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversation Interface */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          <Card className="bg-card border-border shadow-neural">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageCircle className="h-5 w-5 text-primary" />
                Empathetic Conversation
              </CardTitle>
              <CardDescription className="text-sm">
                Share your thoughts and experience affect-modulated AI empathy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Share what's on your mind... I'm here to listen and understand."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="min-h-24 touch-manipulation"
              />
              
              <Button 
                onClick={handleSubmit}
                disabled={isProcessing || !userInput.trim()}
                className="w-full min-h-[44px] touch-manipulation"
              >
                {isProcessing ? (
                  <>
                    <Brain className="h-4 w-4 mr-2 animate-introspection-spin" />
                    Processing emotions...
                  </>
                ) : (
                  <>
                    <Heart className="h-4 w-4 mr-2" />
                    Share with EmpaSynth
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Response History */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">Empathetic Responses</CardTitle>
              <CardDescription className="text-sm">
                Affect-modulated responses with emotional alignment metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 sm:max-h-96 overflow-y-auto touch-manipulation">
                {responses.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    No conversations yet. Share your thoughts to begin empathetic interaction.
                  </div>
                ) : (
                  responses.map((response, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{response.text}</p>
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {response.emotion}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Confidence: {(response.confidence * 100).toFixed(0)}%</span>
                        <span>Valence: {(response.affectModulation.valence * 100).toFixed(0)}%</span>
                        <span>Arousal: {(response.affectModulation.arousal * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}