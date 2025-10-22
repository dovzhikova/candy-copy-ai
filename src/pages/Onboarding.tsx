import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Mic, MessageCircle, Sparkles } from "lucide-react";

const personas = [
  { id: 'luna', name: 'Luna', bio: 'Creative artist who loves deep conversations', sample: '"I find beauty in the spaces between words..."' },
  { id: 'alex', name: 'Alex', bio: 'Tech enthusiast with a curious mind', sample: '"Did you know that curiosity is scientifically proven to..."' },
  { id: 'nova', name: 'Nova', bio: 'Wellness coach focused on your growth', sample: '"Every small step forward is worth celebrating..."' },
  { id: 'kai', name: 'Kai', bio: 'Adventure seeker with wanderlust', sample: '"Life begins at the end of your comfort zone..."' },
  { id: 'sage', name: 'Sage', bio: 'Empathetic listener who truly gets you', sample: '"I\'m here to listen, without judgment..."' },
  { id: 'river', name: 'River', bio: 'Free spirit with poetic soul', sample: '"The universe whispers in metaphors..."' },
];

const voices = [
  { id: 'aria', name: 'Aria', description: 'Warm and soothing' },
  { id: 'echo', name: 'Echo', description: 'Playful and energetic' },
  { id: 'luna-voice', name: 'Luna', description: 'Soft and calming' },
  { id: 'sage-voice', name: 'Sage', description: 'Deep and thoughtful' },
];

const quickPrompts = [
  "Wind-down talk?",
  "Bad day debrief?",
  "Let's explore ideas"
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [boundaries, setBoundaries] = useState({
    romance: true,
    roleplay: false,
    flirt: true,
    aftercare: true,
  });
  const [selectedPersona, setSelectedPersona] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
    else {
      // Complete onboarding
      localStorage.setItem('onboarding_completed', 'true');
      navigate('/chat/luna');
    }
  };

  const handleDeclineAge = () => {
    alert("We respect your honesty. Please return when you're 18+.");
  };

  const canProceed = () => {
    if (step === 1) return ageConfirmed;
    if (step === 3) return selectedPersona !== '';
    if (step === 4) return selectedVoice !== '';
    return true;
  };

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Progress */}
        <div className="mb-8 md:mb-12">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-muted-foreground">Step {step} of 6</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / 6) * 100)}%</span>
          </div>
          <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Welcome */}
        {step === 1 && (
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold gradient-text">Welcome to HeartSync</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your AI companion for meaningful connections. Before we begin, let's make sure we're on the same page.
              </p>
            </div>

            <Card className="glass-card p-6 md:p-8 space-y-6 border-white/10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">AI-Powered Conversations</h3>
                    <p className="text-sm text-muted-foreground">All interactions are with AI companions designed to provide supportive, engaging conversations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Safe & Private</h3>
                    <p className="text-sm text-muted-foreground">Your conversations are private and secure. We take your data protection seriously.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="age" 
                    checked={ageConfirmed}
                    onCheckedChange={(checked) => setAgeConfirmed(checked as boolean)}
                  />
                  <label htmlFor="age" className="text-sm leading-relaxed cursor-pointer">
                    I confirm that I am 18 years or older and agree to the <a href="/privacy" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
            </Card>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleDeclineAge}
                className="flex-1"
              >
                I'm under 18
              </Button>
              <Button
                variant="hero"
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Boundaries */}
        {step === 2 && (
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <Shield className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold gradient-text">Set Your Boundaries</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose what types of conversations you're comfortable with. You can change these anytime.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { key: 'romance', label: 'Romance', desc: 'Romantic conversations and affection' },
                { key: 'roleplay', label: 'Roleplay', desc: 'Creative scenarios and storytelling' },
                { key: 'flirt', label: 'Flirting', desc: 'Playful and flirtatious interactions' },
                { key: 'aftercare', label: 'Aftercare', desc: 'Emotional support after intense conversations' },
              ].map(({ key, label, desc }) => (
                <Card 
                  key={key}
                  className="glass-card p-4 md:p-6 cursor-pointer hover:border-primary/50 transition-all border-white/10"
                  onClick={() => setBoundaries(prev => ({ ...prev, [key]: !prev[key as keyof typeof boundaries] }))}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{label}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                    <Checkbox checked={boundaries[key as keyof typeof boundaries]} />
                  </div>
                </Card>
              ))}

              <Card className="glass-effect-subtle p-4 border-white/10">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">NSFW Content</p>
                    <p>Adult content requires Plus or Elite subscription and separate age verification.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button variant="hero" onClick={handleNext} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Persona */}
        {step === 3 && (
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold gradient-text">Choose Your Companion</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each companion has a unique personality. Pick the one that resonates with you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {personas.map((persona) => (
                <Card
                  key={persona.id}
                  className={`glass-card p-5 cursor-pointer transition-all ${
                    selectedPersona === persona.id 
                      ? 'border-primary shadow-[0_0_30px_rgba(244,63,94,0.4)]' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => setSelectedPersona(persona.id)}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold">{persona.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{persona.bio}</p>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <p className="text-xs text-muted-foreground italic">{persona.sample}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Back
              </Button>
              <Button variant="hero" onClick={handleNext} disabled={!canProceed()} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Voice */}
        {step === 4 && (
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Mic className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold gradient-text">Select a Voice</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose how your companion will sound in voice messages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {voices.map((voice) => (
                <Card
                  key={voice.id}
                  className={`glass-card p-6 cursor-pointer transition-all ${
                    selectedVoice === voice.id 
                      ? 'border-primary shadow-[0_0_30px_rgba(244,63,94,0.4)]' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => setSelectedVoice(voice.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold">{voice.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{voice.description}</p>
                    </div>
                    <Button
                      variant="glass"
                      size="icon"
                      className="shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Preview: "Hello, I\'m excited to chat with you!"');
                      }}
                    >
                      <i className="fas fa-play text-sm"></i>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                Back
              </Button>
              <Button variant="hero" onClick={handleNext} disabled={!canProceed()} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Quick Prompts */}
        {step === 5 && (
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold gradient-text">Quick Start Ideas</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Not sure how to begin? These prompts can help break the ice.
              </p>
            </div>

            <div className="space-y-4">
              {quickPrompts.map((prompt, idx) => (
                <Card key={idx} className="glass-card p-6 border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">{prompt}</p>
                    <Button variant="glass" size="sm">
                      Try it
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="glass-effect-subtle p-4 border-white/10">
              <p className="text-sm text-muted-foreground text-center">
                You can always type your own message or use these as inspiration!
              </p>
            </Card>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(4)} className="flex-1">
                Back
              </Button>
              <Button variant="hero" onClick={handleNext} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Done */}
        {step === 6 && (
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold gradient-text">You're All Set! 🎉</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your companion is ready to meet you. Let's start this journey together.
              </p>
            </div>

            <Card className="glass-card p-8 border-white/10 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Companion: {personas.find(p => p.id === selectedPersona)?.name}</p>
                    <p className="text-sm text-muted-foreground">Your chosen personality</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <i className="fas fa-check text-secondary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Voice: {voices.find(v => v.id === selectedVoice)?.name}</p>
                    <p className="text-sm text-muted-foreground">Selected voice profile</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <i className="fas fa-check text-accent"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Boundaries Set</p>
                    <p className="text-sm text-muted-foreground">You can adjust these anytime in settings</p>
                  </div>
                </div>
              </div>
            </Card>

            <Button variant="hero" size="lg" onClick={handleNext} className="w-full text-lg">
              <MessageCircle className="w-5 h-5" />
              Open Chat
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;