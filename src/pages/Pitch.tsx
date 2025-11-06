import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { exportToPPTX } from "@/utils/pptxExport";
import { toast } from "sonner";

const slides = [{
  id: 1,
  title: "PriviaAI",
  subtitle: "AI That Remembers.",
  content: <div className="pitch-slide">
      <div className="max-w-6xl mx-auto w-full space-y-16 animate-fade-in-up">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="pitch-title text-8xl md:text-9xl gradient-text animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              PriviaAI
            </h1>
            <p className="pitch-subtitle text-4xl md:text-5xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              AI That Remembers.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="pitch-card p-10 hover-scale">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl">
                👤
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground mb-1">Daria Dovzhikova</p>
                <p className="text-base text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </div>
          
          <div className="pitch-card p-10 hover-scale">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl">
                🚀
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground mb-1">Live Platform</p>
                <p className="text-base text-muted-foreground">Characters by Pro Screenwriters</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground/60 tracking-wider">November, 2025</p>
        </div>
      </div>
    </div>
}, {
  id: 2,
  title: "The Problem",
  subtitle: "Digital Connection Lacks Depth.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">The Problem</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">Digital Connection Lacks Depth.</p>
        </div>
        
        <div className="pitch-card p-12 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="pitch-body text-2xl text-foreground/90 leading-relaxed">
            Existing AI chatbots are <span className="text-primary font-bold">robotic and forgetful</span>. 
            Social media is <span className="text-primary font-bold">performative, not personal</span>. 
            There is no available solution that combines memory, personality, and professional storytelling.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <p className="pitch-body text-xl text-foreground/70 leading-relaxed">
            This creates a gap for users who want a meaningful, judgment-free connection that remembers and evolves with them.
          </p>
        </div>
        
        <div className="pitch-accent-card p-10 border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-2xl font-bold text-primary mb-3">The result</p>
          <p className="pitch-body text-xl text-foreground/80">
            A large, underserved market of people seeking genuine connection in a digital world.
          </p>
        </div>
      </div>
    </div>
}, {
  id: 3,
  title: "The Solution",
  subtitle: "AI Companions with Narrative Depth.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">The Solution</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">AI Companions with Narrative Depth.</p>
        </div>
        
        <div className="pitch-card p-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="pitch-body text-2xl text-foreground/90 leading-relaxed">
            PriviaAI is a platform for AI companions crafted by professional screenwriters. 
            Our AIs <span className="text-primary font-bold">remember, speak, create images, and evolve</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            num: "1",
            title: "Characters by Screenwriters",
            desc: "Deep, engaging personalities, like an interactive HBO series."
          }, {
            num: "2",
            title: "Perfect Memory",
            desc: "Remembers user preferences, past conversations, and emotional context."
          }, {
            num: "3",
            title: "Multi-modal Communication",
            desc: "Text, voice, and images in a single, natural flow."
          }, {
            num: "4",
            title: "User Customization",
            desc: "Users can also create and share their own AI companions."
          }].map((item, idx) => (
            <div key={idx} className="pitch-card p-8 hover-scale animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-xl font-bold">{item.num}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="pitch-body text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
}, {
  id: 4,
  title: "The Market",
  subtitle: "A $900M Market Growing 64% YoY.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">The Market</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">A $900M Market Growing 64% YoY.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            label: "TAM",
            value: "$10.8B",
            desc: "50M users × $18/mo ARPU"
          }, {
            label: "SAM",
            value: "$900M",
            desc: "AI companion market"
          }, {
            label: "SOM",
            value: "$9M ARR",
            desc: "Our initial target (1%)"
          }].map((item, idx) => (
            <div key={idx} className="pitch-card p-10 text-center hover-scale animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">{item.label}</p>
              <p className="pitch-stat-number text-5xl mb-4">{item.value}</p>
              <p className="pitch-body text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="pitch-card p-12 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h4 className="text-3xl font-bold text-primary mb-6">Why Now</h4>
          <div className="space-y-5">
            {[
              "Loneliness is a growing problem: 47% of Americans feel alone 3+ days per week.",
              "LLMs are powerful enough: Modern AI enables natural, context-aware conversations.",
              "Users demand quality: The market is saturated with generic content; users will pay for premium experiences."
            ].map((text, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                <p className="pitch-body text-lg text-foreground/80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
}, {
  id: 5,
  title: "Product & Tech",
  subtitle: "Production-Ready & Scalable.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">Product & Tech</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">Production-Ready & Scalable.</p>
        </div>
        
        <div className="pitch-card p-12 space-y-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div>
            <h4 className="text-2xl font-bold text-primary mb-6">Tech Stack</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
                label: "Frontend",
                value: "React 18, TypeScript, TailwindCSS"
              }, {
                label: "Backend",
                value: "Node.js, Express, TypeScript"
              }, {
                label: "Database",
                value: "PostgreSQL with pgvector"
              }, {
                label: "AI/ML",
                value: "OpenAI GPT-4, DALL-E 3, Whisper, ElevenLabs"
              }].map((item, idx) => (
                <div key={idx} className="glass-effect-strong p-6 rounded-xl">
                  <p className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{item.label}</p>
                  <p className="pitch-body text-base text-foreground/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div>
            <h4 className="text-2xl font-bold text-primary mb-6">Key Achievements</h4>
            <div className="space-y-5">
              {[{
                title: "Personality System",
                desc: "Character Bible for deep, multi-faceted personas"
              }, {
                title: "Memory Engine",
                desc: "Vector embeddings with temporal weighting"
              }, {
                title: "Multi-Modal Integration",
                desc: "Seamless text, voice, and image generation"
              }].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="pitch-body text-lg font-bold text-foreground">{item.title}:</span>
                    {" "}
                    <span className="pitch-body text-lg text-foreground/70">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
}, {
  id: 6,
  title: "Progress",
  subtitle: "From Idea to Live Product in 10 Months.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">Progress</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">From Idea to Live Product in 10 Months.</p>
        </div>
        
        <div className="pitch-card p-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="pitch-body text-2xl text-center text-foreground/90 mb-12 leading-relaxed">
            High-velocity execution: complex platform with <span className="text-primary font-bold">zero outside funding</span>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              title: "Launched MVP",
              detail: "January 2025"
            }, {
              title: "Shipped 10+ Major Features",
              detail: "Voice, images, vector memory"
            }, {
              title: "Monetization Live",
              detail: "PayPal, Paddle, NOWPayments"
            }, {
              title: "Platform Stable",
              detail: "99.9% uptime since launch"
            }].map((item, idx) => (
              <div key={idx} className="glass-effect-strong p-8 rounded-xl hover-scale" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                </div>
                <p className="pitch-body text-base text-muted-foreground ml-14">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
}, {
  id: 7,
  title: "Business Model",
  subtitle: "Freemium SaaS with a Content Upsell.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">Business Model</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">Freemium SaaS with a Content Upsell.</p>
        </div>
        
        <div className="pitch-card p-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="pitch-body text-xl text-center text-foreground/80 mb-10">
            Acquire users with free tier, convert with premium professionally written characters.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              tier: "Free",
              price: "$0",
              features: ["Limited messaging", "Community-created AIs"],
              highlight: false
            }, {
              tier: "Basic",
              price: "$9.99/mo",
              features: ["Unlimited messaging", "Create custom AIs"],
              highlight: false
            }, {
              tier: "Premium",
              price: "$19.99/mo",
              features: ["Screenwriter-crafted AIs", "Voice & images"],
              highlight: true
            }].map((plan, idx) => (
              <div 
                key={idx} 
                className={`pitch-card p-8 hover-scale ${plan.highlight ? "border-2 border-primary shadow-[0_0_30px_rgba(244,63,94,0.3)]" : ""}`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <h4 className="text-2xl font-bold text-foreground mb-2">{plan.tier}</h4>
                <p className="pitch-stat-number text-4xl mb-6">{plan.price}</p>
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="pitch-body text-sm text-foreground/70">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pitch-accent-card p-8 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h4 className="text-xl font-bold text-primary">Why it works</h4>
          <div className="space-y-3">
            <p className="pitch-body text-base text-foreground/70">• Clear Value Prop: Premium content justifies the premium price</p>
            <p className="pitch-body text-base text-foreground/70">• High Switching Costs: Memory and emotional connection reduce churn</p>
          </div>
        </div>
      </div>
    </div>
}, {
  id: 8,
  title: "Go-to-Market",
  subtitle: "Validate Organically, Then Scale.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">Go-to-Market</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">Validate Organically, Then Scale.</p>
        </div>
        
        <div className="space-y-6">
          {[{
            phase: "Phase 1 (Current)",
            title: "Organic Validation",
            items: [
              "Channels: Reddit, Twitter, Discord",
              "Goal: Acquire first 1,000 users, gather feedback"
            ]
          }, {
            phase: "Phase 2 (Post-Funding)",
            title: "Find Repeatable Channels",
            items: [
              "Goal: Use funding to find 1-2 repeatable acquisition channels",
              "Experiments: Influencer marketing, paid social (TikTok, Reddit)"
            ]
          }, {
            phase: "Phase 3 (Series A)",
            title: "Scale",
            items: [
              "Double down on channels with the best LTV/CAC ratio"
            ]
          }].map((phase, idx) => (
            <div key={idx} className="pitch-card p-10 hover-scale animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">{idx + 1}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{phase.phase}</p>
                  <h4 className="text-2xl font-bold text-foreground">{phase.title}</h4>
                </div>
              </div>
              <div className="space-y-4 ml-19">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <p className="pitch-body text-base text-foreground/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
}, {
  id: 9,
  title: "Competition",
  subtitle: "Our Moat is Content Quality.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">Competition</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">Our Moat is Content Quality.</p>
        </div>
        
        <div className="pitch-card p-12 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="pitch-body text-xl text-center text-foreground/80 leading-relaxed">
            Competitors focus on <span className="text-foreground/40 line-through">quantity</span> of user-generated content. 
            We focus on <span className="text-primary font-bold">quality</span>.
          </p>
          
          <div className="space-y-5">
            {[{
              name: "Character.AI",
              source: "User-Generated",
              weakness: "Inconsistent quality, shallow"
            }, {
              name: "Replika",
              source: "AI-Generated",
              weakness: "Generic, outdated tech"
            }, {
              name: "Chai",
              source: "User-Generated",
              weakness: "Basic features, high churn"
            }].map((comp, idx) => (
              <div key={idx} className="glass-effect-strong p-6 rounded-xl grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Competitor</p>
                  <p className="text-lg font-bold text-foreground">{comp.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Content Source</p>
                  <p className="pitch-body text-base text-foreground/70">{comp.source}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Weakness</p>
                  <p className="pitch-body text-base text-foreground/70">{comp.weakness}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pitch-accent-card p-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h4 className="text-2xl font-bold text-primary mb-6">Our Defensible Advantages</h4>
          <div className="space-y-4">
            {[
              "Content Moat: Characters crafted by professional screenwriters - IP that cannot be easily replicated",
              "Execution Speed: Feature-complete platform in 10 months as a small team",
              "Technical Depth: Integrated system, not just a wrapper around an API"
            ].map((adv, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="pitch-body text-base text-foreground/70">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
}, {
  id: 10,
  title: "Team",
  subtitle: "Tech, Growth, and Storytelling.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">Team</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">Tech, Growth, and Storytelling.</p>
        </div>
        
        <div className="pitch-card p-12 space-y-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-4xl">
                👤
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">Daria Dovzhikova</h4>
                <p className="text-base text-muted-foreground mt-1">Founder</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                title: "AI & Product",
                desc: "Led product for AI and consumer apps; OpenAI, Claude, Hugging Face"
              }, {
                title: "Growth",
                desc: "Grew DAU by 20% at Bitcoin.com; increased conversion 15-30% at Odigos"
              }, {
                title: "Tech",
                desc: "Full-stack (React/Node), proficient in data stack (Mixpanel, SQL)"
              }].map((exp, idx) => (
                <div key={idx} className="glass-effect-strong p-6 rounded-xl">
                  <p className="text-sm font-bold text-foreground mb-2">{exp.title}</p>
                  <p className="pitch-body text-xs text-muted-foreground">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-4xl">
                🎬
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">Nigina Sayfullaeva</h4>
                <p className="text-base text-muted-foreground mt-1">Screenwriting Consultant</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
                title: "Acclaimed Storyteller",
                desc: "Award-winning film director and screenwriter"
              }, {
                title: "Narrative Expert",
                desc: "Advising on character development and interactive storytelling"
              }].map((exp, idx) => (
                <div key={idx} className="glass-effect-strong p-6 rounded-xl">
                  <p className="text-sm font-bold text-foreground mb-2">{exp.title}</p>
                  <p className="pitch-body text-xs text-muted-foreground">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pitch-accent-card p-10 border-l-4 border-primary animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl font-bold text-primary mb-3">Our advantage</p>
          <p className="pitch-body text-base text-foreground/70">
            We are the only team combining deep AI/product expertise with professional narrative design.
          </p>
        </div>
      </div>
    </div>
}, {
  id: 11,
  title: "The Vision",
  subtitle: "From AI Companions to a Relationship Ecosystem.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">The Vision</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">From AI Companions to a Relationship Ecosystem.</p>
        </div>
        
        <div className="space-y-6">
          {[{
            period: "Years 1-2",
            title: "Lead the Premium Companion Market",
            items: [
              "Perfect the one-on-one AI companion experience",
              "Launch a creator marketplace for writers to build and monetize AIs"
            ]
          }, {
            period: "Years 3-4",
            title: "Become an Interactive Storytelling Platform",
            items: [
              'Launch multi-character group conversations ("Dream Room")',
              "Introduce real-time voice and video calls",
              "Partner with studios to license famous characters"
            ]
          }, {
            period: "Year 5+",
            title: "Become the Relationship Layer API",
            items: [
              "License our personality engine to gaming, mental health, and education companies",
              "Allow developers to integrate our AIs into their own apps"
            ]
          }].map((vision, idx) => (
            <div key={idx} className="pitch-card p-10 hover-scale animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">{idx + 1}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{vision.period}</p>
                  <h4 className="text-2xl font-bold text-foreground">{vision.title}</h4>
                </div>
              </div>
              <div className="space-y-4 ml-21">
                {vision.items.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="pitch-body text-base text-foreground/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
}, {
  id: 12,
  title: "The Plan",
  subtitle: "The 18-Month Roadmap to Seed.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">The Plan</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">The 18-Month Roadmap to Seed.</p>
        </div>
        
        <div className="pitch-card p-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="pitch-body text-2xl text-center text-foreground/80 mb-12 leading-relaxed">
            Use this pre-seed round to get <span className="text-primary font-bold">seed-round ready</span>.
          </p>
          
          <div className="space-y-6">
            {[{
              phase: "Phase 1 (Months 1-6)",
              focus: "Find repeatable acquisition channels, optimize retention",
              hire: "Founding Engineer"
            }, {
              phase: "Phase 2 (Months 7-12)",
              focus: "Double down on the 1-2 best-performing channels",
              hire: "Community Lead"
            }, {
              phase: "Phase 3 (Months 13-18)",
              focus: "With proven metrics, raise a $2-3M seed round to scale",
              hire: null
            }].map((phase, idx) => (
              <div key={idx} className="glass-effect-strong p-8 rounded-xl hover-scale">
                <h4 className="text-xl font-bold text-primary mb-4">{phase.phase}</h4>
                <div className="space-y-3">
                  <p className="pitch-body text-base text-foreground/70">
                    <span className="font-semibold text-foreground">Focus:</span> {phase.focus}
                  </p>
                  {phase.hire && (
                    <p className="pitch-body text-base text-foreground/70">
                      <span className="font-semibold text-foreground">Hire:</span> {phase.hire}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
}, {
  id: 13,
  title: "The Ask",
  subtitle: "$500k Pre-Seed.",
  content: <div className="pitch-slide">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="pitch-title text-6xl md:text-7xl gradient-text">The Ask</h2>
          <p className="pitch-subtitle text-2xl md:text-3xl text-muted-foreground">$500k Pre-Seed.</p>
        </div>
        
        <div className="pitch-card p-12 text-center space-y-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div>
            <h3 className="pitch-stat-number text-7xl mb-6">$500k Pre-Seed</h3>
            <p className="pitch-body text-2xl text-foreground/80">
              To find a repeatable growth engine and scale the team.
            </p>
          </div>
          
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-primary">Use of Funds (18-Month Runway)</h4>
            {[{
              pct: "50%",
              label: "Team",
              desc: "Founder salaries & one key engineering hire"
            }, {
              pct: "30%",
              label: "Infrastructure",
              desc: "API usage and server costs"
            }, {
              pct: "20%",
              label: "GTM Experiments",
              desc: "Test paid channels to find profitable unit economics"
            }].map((item, idx) => (
              <div key={idx} className="glass-effect-strong p-6 rounded-xl flex items-center gap-6">
                <div className="pitch-stat-number text-5xl w-24 text-center flex-shrink-0">{item.pct}</div>
                <div>
                  <p className="text-xl font-bold text-foreground mb-1">{item.label}</p>
                  <p className="pitch-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pitch-accent-card p-10 text-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h4 className="text-2xl font-bold text-primary">Contact</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2 text-lg px-8 py-6">
              <Mail className="w-5 h-5" />
              dovzhikova@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="http://privia-production.up.railway.app" target="_blank" rel="noopener noreferrer">
                privia-production.up.railway.app
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
}];

const Pitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleExportPDF = () => {
    window.print();
  };

  const handleExportPPTX = () => {
    try {
      exportToPPTX();
      toast.success("PowerPoint presentation exported successfully!");
    } catch (error) {
      console.error("Error exporting PPTX:", error);
      toast.error("Failed to export presentation. Please try again.");
    }
  };
  
  const slide = slides[currentSlide];
  
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <header className="glass-card border-b sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold gradient-text">PriviaAI Pitch Deck</h1>
            <span className="text-sm text-muted-foreground font-medium">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={handleExportPPTX}>
                  <Download className="w-4 h-4 mr-2" />
                  Export as PowerPoint (.pptx)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExportPDF}>
                  <Download className="w-4 h-4 mr-2" />
                  Export as PDF (Print)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl">
          {slide.content}
        </div>
      </main>

      {/* Navigation */}
      <footer className="glass-card border-t backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={prevSlide} 
              disabled={currentSlide === 0} 
              className="gap-2 px-8"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full transition-all ${
                    idx === currentSlide 
                      ? "bg-primary w-10 h-2.5" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5 h-2.5"
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
              className="gap-2 px-8"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pitch;
