import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, ArrowLeft, AlertCircle, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Boundaries = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [boundaries, setBoundaries] = useState({
    romance: true,
    roleplay: false,
    flirt: true,
    aftercare: true,
    nsfw: false,
  });
  const [userTier] = useState('free');
  const [showNsfwModal, setShowNsfwModal] = useState(false);

  const handleToggle = (key: string) => {
    if (key === 'nsfw' && !boundaries.nsfw) {
      if (userTier === 'free') {
        toast({
          title: "Upgrade Required",
          description: "NSFW content requires Plus or Elite subscription.",
          variant: "destructive",
        });
        return;
      }
      setShowNsfwModal(true);
      return;
    }
    
    setBoundaries(prev => ({ ...prev, [key]: !prev[key as keyof typeof boundaries] }));
    toast({
      title: "Boundaries updated",
      description: "Your preferences have been saved.",
    });
  };

  const confirmNsfw = () => {
    setBoundaries(prev => ({ ...prev, nsfw: true }));
    setShowNsfwModal(false);
    toast({
      title: "NSFW content enabled",
      description: "You can disable this anytime in settings.",
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
            <h1 className="font-heading text-2xl md:text-3xl font-bold gradient-text">Boundaries</h1>
            <p className="text-sm text-muted-foreground">Control what topics you're comfortable with</p>
          </div>
        </div>

        {/* Safe Word Banner */}
        <Card className="glass-effect-subtle p-4 mb-6 border-accent/30">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">Your Safe Word</p>
              <p className="text-sm text-muted-foreground">
                Say <span className="font-semibold text-foreground">"Pause"</span> anytime to step back from a conversation. Your companion will immediately shift to a supportive, neutral tone.
              </p>
            </div>
          </div>
        </Card>

        {/* Boundary Settings */}
        <div className="space-y-3 mb-6">
          {[
            { 
              key: 'romance', 
              label: 'Romance', 
              desc: 'Romantic conversations and expressions of affection',
              icon: '💕'
            },
            { 
              key: 'roleplay', 
              label: 'Roleplay', 
              desc: 'Creative scenarios and storytelling',
              icon: '🎭'
            },
            { 
              key: 'flirt', 
              label: 'Flirting', 
              desc: 'Playful and flirtatious interactions',
              icon: '😊'
            },
            { 
              key: 'aftercare', 
              label: 'Aftercare', 
              desc: 'Emotional support after intense conversations',
              icon: '🤗'
            },
          ].map(({ key, label, desc, icon }) => (
            <Card
              key={key}
              className="glass-card p-4 md:p-5 cursor-pointer hover:border-primary/50 transition-all border-white/10"
              onClick={() => handleToggle(key)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">{icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{label}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
                <Checkbox checked={boundaries[key as keyof typeof boundaries]} />
              </div>
            </Card>
          ))}

          {/* NSFW Toggle */}
          <Card
            className={`glass-card p-4 md:p-5 cursor-pointer transition-all border-white/10 ${
              userTier === 'free' ? 'opacity-60' : 'hover:border-destructive/50'
            }`}
            onClick={() => handleToggle('nsfw')}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-2xl">🔞</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">NSFW Content</h3>
                    {userTier === 'free' && <Lock className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {userTier === 'free' 
                      ? 'Requires Plus or Elite subscription'
                      : 'Adult conversations (requires consent confirmation)'}
                  </p>
                </div>
              </div>
              <Checkbox checked={boundaries.nsfw} disabled={userTier === 'free'} />
            </div>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="glass-effect-subtle p-4 border-white/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Your companion will respect these boundaries in all conversations. If a boundary is crossed, the conversation will be gently redirected.</p>
              <p className="font-semibold text-foreground">You can update these settings anytime.</p>
            </div>
          </div>
        </Card>

        {/* NSFW Consent Modal */}
        {showNsfwModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <Card className="glass-card p-6 max-w-md border-white/10 animate-scale-in">
              <h2 className="font-heading text-xl font-bold mb-4">Confirm NSFW Content</h2>
              <div className="space-y-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  By enabling NSFW content, you confirm that:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>You are 18 years or older</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>You understand this enables adult conversations</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>You can disable this feature anytime</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>All safety features and boundaries remain active</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowNsfwModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={confirmNsfw}
                  className="flex-1"
                >
                  I Confirm
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Boundaries;