import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Mail } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "PriviaAI",
    subtitle: "AI That Remembers.",
    content: (
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold gradient-text animate-fade-in">
            PriviaAI
          </h1>
          <p className="text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AI That Remembers.
          </p>
        </div>
        <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl text-foreground/80 mb-2">[Founder Name], Founder</p>
          <p className="text-lg text-primary font-medium">Live Platform | Characters by Pro Screenwriters</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "Digital Connection Lacks Depth.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8 space-y-4">
          <p className="text-xl text-foreground/90 leading-relaxed">
            Existing AI chatbots are <span className="text-primary font-semibold">robotic and forgetful</span>. 
            Social media is <span className="text-primary font-semibold">performative, not personal</span>. 
            There is no available solution that combines memory, personality, and professional storytelling.
          </p>
          <div className="h-px bg-gradient-primary opacity-20" />
          <p className="text-lg text-foreground/80">
            This creates a gap for users who want a meaningful, judgment-free connection that remembers and evolves with them.
          </p>
        </div>
        <div className="glass-effect p-6 border-l-4 border-primary">
          <p className="text-xl font-semibold text-primary">The result</p>
          <p className="text-lg text-foreground/90 mt-2">
            A large, underserved market of people seeking genuine connection in a digital world.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "The Solution",
    subtitle: "AI Companions with Narrative Depth.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8">
          <p className="text-xl text-foreground/90 leading-relaxed mb-6">
            PriviaAI is a platform for AI companions crafted by professional screenwriters. 
            Our AIs <span className="text-primary font-semibold">remember, speak, create images, and evolve</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Characters by Screenwriters",
              desc: "Deep, engaging personalities, like an interactive HBO series.",
            },
            {
              title: "Perfect Memory",
              desc: "Remembers user preferences, past conversations, and emotional context.",
            },
            {
              title: "Multi-modal Communication",
              desc: "Text, voice, and images in a single, natural flow.",
            },
            {
              title: "User Customization",
              desc: "Users can also create and share their own AI companions.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 hover-scale animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "The Market",
    subtitle: "A $900M Market Growing 64% YoY.",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "TAM", value: "$10.8B", desc: "50M users × $18/mo ARPU" },
            { label: "SAM", value: "$900M", desc: "AI companion market" },
            { label: "SOM", value: "$9M ARR", desc: "Our initial target (1%)" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center hover-scale animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className="text-3xl font-bold gradient-text mb-2">{item.value}</p>
              <p className="text-xs text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="glass-card p-8 space-y-4">
          <h4 className="text-xl font-semibold text-primary mb-4">Why Now</h4>
          <div className="space-y-3">
            {[
              "Loneliness is a growing problem: 47% of Americans feel alone 3+ days per week.",
              "LLMs are powerful enough: Modern AI enables natural, context-aware conversations.",
              "Users demand quality: The market is saturated with generic content; users will pay for premium experiences.",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Product & Tech",
    subtitle: "Production-Ready & Scalable.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Tech Stack</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Frontend", value: "React 18, TypeScript, TailwindCSS" },
                { label: "Backend", value: "Node.js, Express, TypeScript" },
                { label: "Database", value: "PostgreSQL with pgvector" },
                { label: "AI/ML", value: "OpenAI GPT-4, DALL-E 3, Whisper, ElevenLabs" },
              ].map((item, idx) => (
                <div key={idx} className="glass-effect p-4">
                  <p className="text-sm font-semibold text-primary mb-1">{item.label}</p>
                  <p className="text-sm text-foreground/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-px bg-gradient-primary opacity-20" />
          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
            <div className="space-y-3">
              {[
                { title: "Personality System", desc: "Character Bible for deep, multi-faceted personas" },
                { title: "Memory Engine", desc: "Vector embeddings with temporal weighting" },
                { title: "Multi-Modal Integration", desc: "Seamless text, voice, and image generation" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">{item.title}:</span>{" "}
                    <span className="text-foreground/80">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Progress",
    subtitle: "From Idea to Live Product in 10 Months.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8">
          <p className="text-xl text-center text-foreground/90 mb-8">
            High-velocity execution: complex platform with <span className="text-primary font-semibold">zero outside funding</span>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Launched MVP", detail: "January 2025" },
              { title: "Shipped 10+ Major Features", detail: "Voice, images, vector memory" },
              { title: "Monetization Live", detail: "PayPal, Paddle, NOWPayments" },
              { title: "Platform Stable", detail: "99.9% uptime since launch" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-effect p-6 hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground ml-9">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Business Model",
    subtitle: "Freemium SaaS with a Content Upsell.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8">
          <p className="text-lg text-center text-foreground/90 mb-6">
            Acquire users with free tier, convert with premium professionally written characters.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tier: "Free", price: "$0", features: ["Limited messaging", "Community-created AIs"] },
              { tier: "Basic", price: "$9.99/mo", features: ["Unlimited messaging", "Create custom AIs"] },
              {
                tier: "Premium",
                price: "$19.99/mo",
                features: ["Screenwriter-crafted AIs", "Voice & images"],
                highlight: true,
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`glass-effect p-6 hover-scale animate-fade-in ${
                  plan.highlight ? "border-2 border-primary" : ""
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h4 className="text-xl font-bold text-foreground mb-2">{plan.tier}</h4>
                <p className="text-2xl font-bold gradient-text mb-4">{plan.price}</p>
                <div className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-effect p-6 space-y-3">
          <h4 className="font-semibold text-primary">Why it works</h4>
          <div className="space-y-2">
            <p className="text-sm text-foreground/80">• Clear Value Prop: Premium content justifies the premium price</p>
            <p className="text-sm text-foreground/80">• High Switching Costs: Memory and emotional connection reduce churn</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Go-to-Market",
    subtitle: "Validate Organically, Then Scale.",
    content: (
      <div className="space-y-6">
        {[
          {
            phase: "Phase 1 (Current)",
            title: "Organic Validation",
            items: ["Channels: Reddit, Twitter, Discord", "Goal: Acquire first 1,000 users, gather feedback"],
          },
          {
            phase: "Phase 2 (Post-Funding)",
            title: "Find Repeatable Channels",
            items: [
              "Goal: Use funding to find 1-2 repeatable acquisition channels",
              "Experiments: Influencer marketing, paid social (TikTok, Reddit)",
            ],
          },
          {
            phase: "Phase 3 (Series A)",
            title: "Scale",
            items: ["Double down on channels with the best LTV/CAC ratio"],
          },
        ].map((phase, idx) => (
          <div
            key={idx}
            className="glass-card p-6 hover-scale animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">{idx + 1}</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{phase.phase}</p>
                <h4 className="font-semibold text-foreground">{phase.title}</h4>
              </div>
            </div>
            <div className="space-y-2 ml-11">
              {phase.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 9,
    title: "Competition",
    subtitle: "Our Moat is Content Quality.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8">
          <p className="text-lg text-center text-foreground/90 mb-6">
            Competitors focus on <span className="text-foreground/50">quantity</span> of user-generated content. 
            We focus on <span className="text-primary font-semibold">quality</span>.
          </p>
          <div className="space-y-4">
            {[
              { name: "Character.AI", source: "User-Generated", weakness: "Inconsistent quality, shallow" },
              { name: "Replika", source: "AI-Generated", weakness: "Generic, outdated tech" },
              { name: "Chai", source: "User-Generated", weakness: "Basic features, high churn" },
            ].map((comp, idx) => (
              <div key={idx} className="glass-effect p-4 grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Competitor</p>
                  <p className="font-semibold text-foreground">{comp.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Content Source</p>
                  <p className="text-sm text-foreground/80">{comp.source}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Key Weakness</p>
                  <p className="text-sm text-foreground/80">{comp.weakness}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-effect p-6">
          <h4 className="font-semibold text-primary mb-3">Our Defensible Advantages</h4>
          <div className="space-y-2">
            {[
              "Content Moat: Characters crafted by professional screenwriters - IP that cannot be easily replicated",
              "Execution Speed: Feature-complete platform in 10 months as a small team",
              "Technical Depth: Integrated system, not just a wrapper around an API",
            ].map((adv, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground/80">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Team",
    subtitle: "Tech, Growth, and Storytelling.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold text-primary mb-1">Daria Dovzhikova</h4>
              <p className="text-sm text-muted-foreground mb-4">Founder & CEO</p>
              <div className="space-y-3">
                {[
                  { title: "AI & Product", desc: "Led product for AI and consumer apps; OpenAI, Claude, Hugging Face" },
                  { title: "Growth", desc: "Grew DAU by 20% at Bitcoin.com; increased conversion 15-30% at Odigos" },
                  { title: "Tech", desc: "Full-stack (React/Node), proficient in data stack (Mixpanel, SQL)" },
                ].map((exp, idx) => (
                  <div key={idx} className="glass-effect p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{exp.title}</p>
                    <p className="text-xs text-muted-foreground">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gradient-primary opacity-20" />
            <div>
              <h4 className="text-xl font-bold text-primary mb-1">Nigina Sayfullaeva</h4>
              <p className="text-sm text-muted-foreground mb-4">Screenwriting Consultant</p>
              <div className="space-y-2">
                <div className="glass-effect p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Acclaimed Storyteller</p>
                  <p className="text-xs text-muted-foreground">Award-winning film director and screenwriter</p>
                </div>
                <div className="glass-effect p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Narrative Expert</p>
                  <p className="text-xs text-muted-foreground">Advising on character development and interactive storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-effect p-6 border-l-4 border-primary">
          <p className="text-sm font-semibold text-primary mb-2">Our advantage</p>
          <p className="text-sm text-foreground/80">
            We are the only team combining deep AI/product expertise with professional narrative design.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "The Vision",
    subtitle: "From AI Companions to a Relationship Ecosystem.",
    content: (
      <div className="space-y-6">
        {[
          {
            period: "Years 1-2",
            title: "Lead the Premium Companion Market",
            items: [
              "Perfect the one-on-one AI companion experience",
              "Launch a creator marketplace for writers to build and monetize AIs",
            ],
          },
          {
            period: "Years 3-4",
            title: "Become an Interactive Storytelling Platform",
            items: [
              'Launch multi-character group conversations ("Dream Room")',
              "Introduce real-time voice and video calls",
              "Partner with studios to license famous characters",
            ],
          },
          {
            period: "Year 5+",
            title: "Become the Relationship Layer API",
            items: [
              "License our personality engine to gaming, mental health, and education companies",
              "Allow developers to integrate our AIs into their own apps",
            ],
          },
        ].map((vision, idx) => (
          <div
            key={idx}
            className="glass-card p-6 hover-scale animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">{idx + 1}</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{vision.period}</p>
                <h4 className="font-semibold text-foreground">{vision.title}</h4>
              </div>
            </div>
            <div className="space-y-2 ml-13">
              {vision.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 12,
    title: "The Plan",
    subtitle: "The 18-Month Roadmap to Seed.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8">
          <p className="text-lg text-center text-foreground/90 mb-8">
            Use this pre-seed round to get <span className="text-primary font-semibold">seed-round ready</span>.
          </p>
          <div className="space-y-4">
            {[
              {
                phase: "Phase 1 (Months 1-6)",
                focus: "Find repeatable acquisition channels, optimize retention",
                hire: "Founding Engineer",
              },
              {
                phase: "Phase 2 (Months 7-12)",
                focus: "Double down on the 1-2 best-performing channels",
                hire: "Community Lead",
              },
              {
                phase: "Phase 3 (Months 13-18)",
                focus: "With proven metrics, raise a $2-3M seed round to scale",
                hire: null,
              },
            ].map((phase, idx) => (
              <div key={idx} className="glass-effect p-6 hover-scale animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h4 className="font-semibold text-primary mb-3">{phase.phase}</h4>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold">Focus:</span> {phase.focus}
                  </p>
                  {phase.hire && (
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold">Hire:</span> {phase.hire}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: "The Ask",
    subtitle: "$500k Pre-Seed.",
    content: (
      <div className="space-y-6">
        <div className="glass-card p-8 text-center">
          <h3 className="text-5xl font-bold gradient-text mb-4">$500k Pre-Seed</h3>
          <p className="text-xl text-foreground/90 mb-8">
            To find a repeatable growth engine and scale the team.
          </p>
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <h4 className="font-semibold text-primary">Use of Funds (18-Month Runway)</h4>
            {[
              { pct: "50%", label: "Team", desc: "Founder salaries & one key engineering hire" },
              { pct: "30%", label: "Infrastructure", desc: "API usage and server costs" },
              { pct: "20%", label: "GTM Experiments", desc: "Test paid channels to find profitable unit economics" },
            ].map((item, idx) => (
              <div key={idx} className="glass-effect p-4 flex items-center gap-4">
                <div className="text-3xl font-bold text-primary w-16">{item.pct}</div>
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-effect p-6 text-center space-y-4">
          <h4 className="font-semibold text-primary">Contact</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              [Founder Email]
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="http://privia-production.up.railway.app" target="_blank" rel="noopener noreferrer">
                privia-production.up.railway.app
              </a>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
];

const Pitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleExport = () => {
    window.print();
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="glass-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold gradient-text">PriviaAI Pitch Deck</h1>
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2" onClick={handleExport}>
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col">
        <div className="mb-8 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">{slide.title}</h2>
          <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
        </div>

        <div className="flex-1 max-w-5xl mx-auto w-full animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {slide.content}
        </div>
      </main>

      {/* Navigation */}
      <footer className="glass-card border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pitch;
