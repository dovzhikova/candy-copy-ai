import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain, ArrowLeft, Trash2, Plus, Lock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Memory = {
  id: string;
  type: 'fact' | 'preference' | 'moment';
  content: string;
  date: string;
};

const Memory = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userTier] = useState('free');
  const [memories, setMemories] = useState<Memory[]>([
    { id: '1', type: 'fact', content: 'You work as a software developer', date: '2025-01-10' },
    { id: '2', type: 'preference', content: 'You prefer evening conversations', date: '2025-01-09' },
    { id: '3', type: 'moment', content: 'Shared a meaningful talk about career goals', date: '2025-01-08' },
  ]);
  const [newMemory, setNewMemory] = useState('');
  const [showDeleteAll, setShowDeleteAll] = useState(false);

  const addMemory = () => {
    if (!newMemory.trim()) return;
    
    if (userTier === 'free') {
      toast({
        title: "Upgrade Required",
        description: "Memory features require Plus or Elite subscription.",
        variant: "destructive",
      });
      return;
    }

    const memory: Memory = {
      id: Date.now().toString(),
      type: 'fact',
      content: newMemory,
      date: new Date().toISOString().split('T')[0],
    };

    setMemories(prev => [memory, ...prev]);
    setNewMemory('');
    toast({
      title: "Memory added",
      description: "Your companion will remember this.",
    });
  };

  const deleteMemory = (id: string) => {
    setMemories(prev => prev.filter(m => m.id !== id));
    toast({
      title: "Memory removed",
      description: "This information has been forgotten.",
    });
  };

  const deleteAllMemories = () => {
    setMemories([]);
    setShowDeleteAll(false);
    toast({
      title: "All memories cleared",
      description: "Starting fresh with your companion.",
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fact': return '📝';
      case 'preference': return '⭐';
      case 'moment': return '💫';
      default: return '📝';
    }
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
            <h1 className="font-heading text-2xl md:text-3xl font-bold gradient-text">Memory</h1>
            <p className="text-sm text-muted-foreground">What your companion remembers about you</p>
          </div>
          {memories.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDeleteAll(true)}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Privacy Mode Banner (for free users) */}
        {userTier === 'free' && (
          <Card className="glass-effect-subtle p-4 mb-6 border-accent/30">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm mb-1">Privacy Mode (Free Plan)</p>
                <p className="text-sm text-muted-foreground">
                  Your conversations are session-only. Upgrade to Plus or Elite to enable persistent memory across sessions.
                </p>
                <Button variant="glass" size="sm" className="mt-3" onClick={() => navigate('/plans')}>
                  Upgrade Now
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Add Memory */}
        <Card className="glass-card p-4 mb-6 border-white/10">
          <div className="flex gap-3">
            <Input
              placeholder="Add something for your companion to remember..."
              value={newMemory}
              onChange={(e) => setNewMemory(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addMemory()}
              className="glass-effect border-white/20"
              disabled={userTier === 'free'}
            />
            <Button
              variant="hero"
              size="icon"
              onClick={addMemory}
              disabled={!newMemory.trim() || userTier === 'free'}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* Memory List */}
        {memories.length > 0 ? (
          <div className="space-y-3">
            {memories.map((memory) => (
              <Card key={memory.id} className="glass-card p-4 border-white/10 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-2xl">{getTypeIcon(memory.type)}</span>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{memory.content}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="capitalize">{memory.type}</span>
                        <span>•</span>
                        <span>{new Date(memory.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMemory(memory.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="glass-card p-12 text-center border-white/10">
            <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No Memories Yet</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Your companion will ask before remembering important details. You can also manually add memories above.
            </p>
          </Card>
        )}

        {/* Info Card */}
        <Card className="glass-effect-subtle p-4 mt-6 border-white/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Your companion uses these memories to provide personalized responses and maintain conversation context.</p>
              <p className="font-semibold text-foreground">All memory data is encrypted and private.</p>
            </div>
          </div>
        </Card>

        {/* Delete All Confirmation Modal */}
        {showDeleteAll && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <Card className="glass-card p-6 max-w-md border-white/10 animate-scale-in">
              <h2 className="font-heading text-xl font-bold mb-4">Clear All Memories?</h2>
              <p className="text-sm text-muted-foreground mb-6">
                This will permanently delete all saved memories. Your companion will start fresh, without any context about you. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteAll(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={deleteAllMemories}
                  className="flex-1"
                >
                  Clear All
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Memory;