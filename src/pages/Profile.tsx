import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Mic, Crown, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const personas = [
  { id: 'luna', name: 'Luna', bio: 'Creative artist who loves deep conversations' },
  { id: 'alex', name: 'Alex', bio: 'Tech enthusiast with a curious mind' },
  { id: 'nova', name: 'Nova', bio: 'Wellness coach focused on your growth' },
  { id: 'kai', name: 'Kai', bio: 'Adventure seeker with wanderlust' },
  { id: 'sage', name: 'Sage', bio: 'Empathetic listener who truly gets you' },
  { id: 'river', name: 'River', bio: 'Free spirit with poetic soul' },
];

const voices = [
  { id: 'aria', name: 'Aria', description: 'Warm and soothing' },
  { id: 'echo', name: 'Echo', description: 'Playful and energetic' },
  { id: 'luna-voice', name: 'Luna', description: 'Soft and calming' },
  { id: 'sage-voice', name: 'Sage', description: 'Deep and thoughtful' },
];

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPersona, setSelectedPersona] = useState('luna');
  const [selectedVoice, setSelectedVoice] = useState('aria');
  const [userTier] = useState('free'); // free, plus, elite

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your preferences have been saved.",
    });
  };

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="font-heading text-2xl md:text-3xl font-bold gradient-text">Profile</h1>
            <p className="text-sm text-muted-foreground">Customize your companion experience</p>
          </div>
        </div>

        {/* Plan Status */}
        <Card className="glass-card p-6 mb-6 border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold capitalize">{userTier} Plan</p>
                <p className="text-sm text-muted-foreground">
                  {userTier === 'free' && 'Upgrade for more features'}
                  {userTier === 'plus' && 'Renews on Jan 15, 2025'}
                  {userTier === 'elite' && 'Premium features unlocked'}
                </p>
              </div>
            </div>
            <Button variant="hero" size="sm" onClick={() => navigate('/plans')}>
              {userTier === 'free' ? 'Upgrade' : 'Manage'}
            </Button>
          </div>
        </Card>

        {/* Persona Selection */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-xl font-bold">Choose Companion</h2>
            </div>
            {userTier === 'free' && (
              <Button variant="glass" size="sm" onClick={() => navigate('/plans')}>
                <Crown className="w-4 h-4" />
                Custom (Plus)
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {personas.map((persona) => (
              <Card
                key={persona.id}
                className={`glass-card p-4 cursor-pointer transition-all ${
                  selectedPersona === persona.id
                    ? 'border-primary shadow-[0_0_30px_rgba(244,63,94,0.4)]'
                    : 'border-white/10 hover:border-white/30'
                }`}
                onClick={() => {
                  setSelectedPersona(persona.id);
                  handleSave();
                }}
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{persona.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{persona.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Voice Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mic className="w-5 h-5 text-secondary" />
            <h2 className="font-heading text-xl font-bold">Voice Profile</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {voices.map((voice) => (
              <Card
                key={voice.id}
                className={`glass-card p-4 cursor-pointer transition-all ${
                  selectedVoice === voice.id
                    ? 'border-secondary shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                    : 'border-white/10 hover:border-white/30'
                }`}
                onClick={() => {
                  setSelectedVoice(voice.id);
                  handleSave();
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{voice.name}</h3>
                    <p className="text-sm text-muted-foreground">{voice.description}</p>
                  </div>
                  <Button
                    variant="glass"
                    size="icon"
                    className="shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      toast({
                        title: "Voice Preview",
                        description: `"Hello, I'm ${voice.name}. Nice to meet you!"`,
                      });
                    }}
                  >
                    <i className="fas fa-play text-sm"></i>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;