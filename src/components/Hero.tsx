import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">AI-Powered Conversations</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          Your Perfect
          <span className="gradient-text block mt-2">AI Companion</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Experience next-generation AI conversations. Choose your companion, start chatting, and explore endless possibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => navigate('/companions')}
          >
            <MessageCircle className="w-5 h-5" />
            Start Chatting
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            <Zap className="w-5 h-5" />
            Learn More
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mt-16 animate-fade-in-up delay-500">
          {['24/7 Available', 'Personalized Chat', 'Multiple Personalities', 'Secure & Private'].map((feature) => (
            <div key={feature} className="glass-card px-6 py-3 rounded-full">
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
