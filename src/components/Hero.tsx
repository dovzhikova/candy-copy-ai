import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated Background Elements - Reduced from 3 to 2 */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-primary/20 rounded-full blur-[80px] animate-float" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[35%] h-[35%] bg-secondary/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s', willChange: 'transform' }} />
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12 py-16 animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 glass-effect-subtle px-6 py-3 rounded-full backdrop-blur-xl">
            <div className="relative">
              <i className="fas fa-circle text-accent text-[10px]"></i>
              <i className="fas fa-circle text-accent text-[10px] absolute inset-0 animate-ping"></i>
            </div>
            <span className="text-sm font-semibold tracking-wide">AI-Powered Conversations Available Now</span>
          </div>
          
          {/* Hero Headline - Reduced size */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold gradient-text bg-[length:200%_auto] leading-tight tracking-tight">
            Your Perfect AI
            <br />
            Companion Awaits
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Experience meaningful conversations with AI companions tailored to your interests. Available 24/7, always ready to chat, learn, and grow with you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-10 py-7 shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300"
              onClick={() => navigate('/companions')}
              aria-label="Start your AI companion journey"
            >
              <i className="fas fa-arrow-right"></i>
              Start Your Journey
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="text-lg px-10 py-7"
              onClick={scrollToFeatures}
              aria-label="Learn how it works"
            >
              <i className="fas fa-play-circle"></i>
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl space-y-4 group hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-brain text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-heading font-bold tracking-tight">Intelligent Conversations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced AI that understands context, remembers your preferences, and adapts to your communication style.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl space-y-4 group hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-users text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-heading font-bold tracking-tight">Diverse Personalities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Choose from unique companions, each with their own expertise, interests, and conversation styles.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl space-y-4 group hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-shield-halved text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-heading font-bold tracking-tight">Private & Secure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your conversations are encrypted and private. We respect your data and never share it with third parties.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-muted-foreground text-xl" aria-hidden="true"></i>
      </div>
    </div>
  );
};
