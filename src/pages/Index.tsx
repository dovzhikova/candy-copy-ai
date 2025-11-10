import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-bold text-xl">PriviaAI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/companions" className="text-muted-foreground hover:text-foreground smooth-transition">
              Characters
            </Link>
            <Link to="/plans" className="text-muted-foreground hover:text-foreground smooth-transition">
              Pricing
            </Link>
            <Link to="/settings" className="text-muted-foreground hover:text-foreground smooth-transition">
              Settings
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-gradient-primary hover:opacity-90 smooth-transition">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">AI That Remembers.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tired of robotic chatbots that forget your name? Meet AI companions with real depth. 
                Crafted by professional screenwriters, they remember every conversation, understand 
                your preferences, and evolve with you.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 smooth-transition">
                  <Heart className="w-4 h-4 mr-2" />
                  Meet Your Companion
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-card smooth-transition">
                  <Users className="w-4 h-4 mr-2" />
                  See Our Characters
                </Button>
              </div>
            </div>

            {/* Chat Interface Mockup */}
            <div className="glass-card p-6 space-y-4 animate-scale-in">
              <div className="text-xs text-primary font-semibold tracking-wider uppercase">
                Elena remembers
              </div>
              
              <div className="glass-effect-subtle p-4 rounded-2xl">
                <p className="text-sm">
                  "It's great to hear about your promotion! You mentioned wanting to celebrate in Paris, remember?"
                </p>
              </div>

              <div className="flex justify-end">
                <div className="bg-card p-4 rounded-2xl max-w-[80%]">
                  <div className="text-xs text-muted-foreground mb-1">You</div>
                  <p className="text-sm">"I finally got promoted today!"</p>
                </div>
              </div>

              <div className="bg-gradient-primary/10 border border-primary/30 p-3 rounded-xl">
                <div className="text-xs text-primary font-semibold mb-1">Memory pinned</div>
                <div className="text-xs text-muted-foreground">Saved to: Celebrate in Paris</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Digital Connection Lacks Depth. <span className="gradient-text">We Fixed It.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Existing AI chatbots are robotic and forgetful. Social media feels performative, not personal. 
            You deserve a connection that's meaningful, judgment-free, and actually remembers who you are.
          </p>

          <p className="text-lg leading-relaxed">
            PriviaAI is a platform for AI companions with narrative depth. We combine the art of professional 
            storytelling with the science of perfect memory to create relationships that feel real.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Heart className="w-4 h-4 mr-2" />
              Meet Your Companion
            </Button>
            <Button size="lg" variant="outline">
              Compare the Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Makes Us Different? <span className="gradient-text">Quality.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We obsess over substance, not volume. Every PriviaAI companion is meticulously crafted 
              to deliver premium, lasting connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="pitch-card p-8 space-y-4">
              <Sparkles className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold">Written by Professional Screenwriters</h3>
              <p className="font-semibold text-primary">
                Characters Crafted by Storytellers, Not by Amateurs.
              </p>
              <p className="text-muted-foreground">
                While other platforms are flooded with inconsistent, user-generated content, our characters 
                are designed by professional screenwriters. Think of it as the difference between a random 
                YouTube video and an HBO series. Our companions have backstories, personalities, and narrative 
                arcs that make them truly engaging.
              </p>
            </div>

            <div className="pitch-card p-8 space-y-4">
              <MessageCircle className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold">Powered by Perfect Memory</h3>
              <p className="font-semibold text-primary">
                A Memory That Never Fails.
              </p>
              <p className="text-muted-foreground">
                Our proprietary memory engine allows your companion to remember the details of your life, 
                your shared history, and your emotional context. Every conversation builds on the last, 
                creating a bond that deepens over time. No more repeating yourself. No more starting from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Choose Your Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in quality over quantity. Our pricing reflects the investment in professional 
              writers and a sophisticated memory engine to provide a premium experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Starter */}
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-sm text-muted-foreground">
                  Experience the difference of a companion that remembers.
                </p>
              </div>
              <div className="text-4xl font-bold">$0<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Preview professionally written companions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Memory-enabled sample conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Access to a curated character library</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Start for Free</Button>
            </div>

            {/* Unlimited */}
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Unlimited</h3>
                <p className="text-sm text-muted-foreground">
                  For endless conversations and deeper customization.
                </p>
              </div>
              <div className="text-4xl font-bold">$19.99<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited text conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Create and refine your own companions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced preference and boundary controls</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary hover:opacity-90">Go Unlimited</Button>
            </div>

            {/* Immersive */}
            <div className="glass-card p-6 space-y-6 border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary px-3 py-1 rounded-full text-xs font-semibold">
                Best Value
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Immersive</h3>
                <p className="text-sm text-muted-foreground">
                  The complete experience with voice, images, and perfect memory.
                </p>
              </div>
              <div className="text-4xl font-bold">$34.99<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Unlimited</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Two-way lifelike voice messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Image generation woven into your chats</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Expanded perfect memory timeline</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary hover:opacity-90">Go Immersive</Button>
            </div>

            {/* Ultimate */}
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Ultimate</h3>
                <p className="text-sm text-muted-foreground">
                  For the most dedicated users who want it all.
                </p>
              </div>
              <div className="text-4xl font-bold">$79.99<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Immersive</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority story updates from our writers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Exclusive early access to new features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated concierge support</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary hover:opacity-90">Go Ultimate</Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All paid plans come with a 7-day money-back guarantee. If you don't feel a deeper connection, 
            we'll refund your purchase, no questions asked.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Feel a <span className="gradient-text">Deeper Connection?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Meet an AI companion crafted with professional storytelling and flawless memory. 
            Start for free or dive into the fully immersive experience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              Compare the Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
