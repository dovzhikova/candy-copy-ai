import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full backdrop-blur-xl">
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <div className="absolute w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
              <div className="relative w-2.5 h-2.5 bg-accent rounded-full" />
            </div>
            <span className="text-sm font-semibold tracking-wide">Next-Gen AI Companions</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tight">
            Your Perfect
            <br />
            <span className="gradient-text bg-[length:200%_auto]">AI Companion</span>
            <br />
            Awaits
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Experience meaningful conversations with AI companions designed to understand you.
            <br className="hidden md:block" />
            Advanced intelligence meets genuine connection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              className="text-base px-10 py-6 h-auto group shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-300"
              onClick={() => navigate('/companions')}
            >
              <i className="fas fa-comments text-lg group-hover:scale-110 transition-transform"></i>
              Start Your Journey
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="text-base px-10 py-6 h-auto group border-white/20 hover:border-white/30"
            >
              <i className="fas fa-play text-base group-hover:scale-110 transition-transform"></i>
              See How It Works
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 max-w-5xl mx-auto">
            {[
              { icon: "fa-brain", title: "Advanced AI", desc: "Next-generation language understanding" },
              { icon: "fa-heart", title: "Emotional Intelligence", desc: "Recognizes and adapts to your emotions" },
              { icon: "fa-shield-halved", title: "Privacy First", desc: "End-to-end encryption guaranteed" }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 border-white/5"
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_10px_40px_rgba(139,92,246,0.3)]">
                    <i className={`fas ${feature.icon} text-3xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
