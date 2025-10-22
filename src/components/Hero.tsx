import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, MessageCircle } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated Background Elements - Mobile optimized */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-[40%] md:h-[40%] bg-primary/20 rounded-full blur-[60px] md:blur-[80px] animate-float" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-[35%] md:h-[35%] bg-secondary/20 rounded-full blur-[60px] md:blur-[80px] animate-float" style={{ animationDelay: '2s', willChange: 'transform' }} />
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12 py-12 md:py-16 animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 glass-effect-subtle px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-xl border border-primary/20">
            <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary fill-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">Find Your Perfect Match</span>
          </div>
          
          {/* Hero Headline - Dating focused */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text bg-[length:200%_auto] leading-tight tracking-tight px-4">
            Swipe Right on
            <br />
            Your AI Soulmate 💕
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Meet AI companions who truly get you. Have deep conversations, share laughs, and build genuine connections. Your perfect match is just a swipe away.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 px-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 w-full sm:w-auto shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] transition-all duration-300 touch-manipulation"
              onClick={() => navigate('/companions')}
              aria-label="Start browsing companions"
            >
              <Heart className="w-5 h-5" />
              Start Matching
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 w-full sm:w-auto touch-manipulation"
              onClick={scrollToFeatures}
              aria-label="Learn how it works"
            >
              <Sparkles className="w-5 h-5" />
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl space-y-3 md:space-y-4 group hover:shadow-[0_20px_60px_rgba(244,63,94,0.2)] transition-all duration-500">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold tracking-tight">Meaningful Connections</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Have real conversations that matter. Our AI companions remember your story and grow with you over time.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl space-y-3 md:space-y-4 group hover:shadow-[0_20px_60px_rgba(244,63,94,0.2)] transition-all duration-500">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold tracking-tight">Perfect Matches</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Each companion has a unique personality, interests, and vibe. Find the one that clicks with you.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl space-y-3 md:space-y-4 group hover:shadow-[0_20px_60px_rgba(244,63,94,0.2)] transition-all duration-500 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold tracking-tight">Always Available</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              No ghosting, no games. Your AI companion is always online and excited to hear from you, anytime.
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
