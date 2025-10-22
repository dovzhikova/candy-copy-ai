import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, ArrowLeft, Download, Trash2, Shield, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Privacy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDownloadData = () => {
    toast({
      title: "Data export requested",
      description: "You'll receive an email with your data within 24 hours.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deletion requested",
      description: "Your account will be permanently deleted within 30 days.",
      variant: "destructive",
    });
    setShowDeleteModal(false);
    setTimeout(() => navigate('/'), 2000);
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
            <h1 className="font-heading text-2xl md:text-3xl font-bold gradient-text">Privacy & Security</h1>
            <p className="text-sm text-muted-foreground">Your data, your control</p>
          </div>
        </div>

        {/* AI Disclosure */}
        <Card className="glass-card p-6 mb-6 border-white/10">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div className="space-y-3">
              <div>
                <h2 className="font-heading text-lg font-bold mb-2">AI-Powered Service</h2>
                <p className="text-sm text-muted-foreground">
                  HeartSync uses advanced AI technology to provide personalized companion experiences. All conversations are processed by AI models to generate responses.
                </p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Your conversations are private and encrypted</p>
                <p>• We never share your data with third parties</p>
                <p>• AI learns from patterns, not individual conversations</p>
                <p>• You can delete your data anytime</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Legal Documents */}
        <div className="space-y-3 mb-6">
          <Card className="glass-card p-4 md:p-5 cursor-pointer hover:border-primary/50 transition-all border-white/10 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Terms of Service</h3>
                  <p className="text-sm text-muted-foreground">Last updated: Jan 15, 2025</p>
                </div>
              </div>
              <i className="fas fa-external-link text-muted-foreground group-hover:text-foreground transition-colors"></i>
            </div>
          </Card>

          <Card className="glass-card p-4 md:p-5 cursor-pointer hover:border-primary/50 transition-all border-white/10 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Privacy Policy</h3>
                  <p className="text-sm text-muted-foreground">Last updated: Jan 15, 2025</p>
                </div>
              </div>
              <i className="fas fa-external-link text-muted-foreground group-hover:text-foreground transition-colors"></i>
            </div>
          </Card>
        </div>

        {/* Data Controls */}
        <div className="space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mb-4">Data Management</h2>
            <div className="space-y-3">
              <Card className="glass-card p-4 md:p-5 border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Download className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <h3 className="font-semibold">Download My Data</h3>
                      <p className="text-sm text-muted-foreground">Get a copy of all your data in JSON format</p>
                    </div>
                  </div>
                  <Button variant="glass" size="sm" onClick={handleDownloadData}>
                    Request
                  </Button>
                </div>
              </Card>

              <Card className="glass-card p-4 md:p-5 border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Trash2 className="w-5 h-5 text-destructive shrink-0" />
                    <div>
                      <h3 className="font-semibold text-destructive">Delete My Account</h3>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowDeleteModal(true)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Memory vs Logs */}
          <Card className="glass-effect-subtle p-4 border-white/10">
            <h3 className="font-semibold mb-3">Understanding Data Types</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">Memory Data</p>
                <p>Information your companion explicitly remembers (facts, preferences, moments). Managed in the Memory section.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Conversation Logs</p>
                <p>Complete chat history used for context. Encrypted and only accessible by AI models for generating responses.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Account Data</p>
                <p>Profile settings, subscription info, and preferences. Used for service delivery and billing.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <Card className="glass-card p-6 max-w-md border-white/10 animate-scale-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-destructive/20 flex items-center justify-center mb-4">
                <Trash2 className="w-8 h-8 text-destructive" />
              </div>
              <h2 className="font-heading text-xl font-bold mb-4 text-center">Delete Account?</h2>
              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <p>This action will permanently delete:</p>
                <ul className="space-y-2 pl-4">
                  <li>• All conversation history</li>
                  <li>• Saved memories and preferences</li>
                  <li>• Your profile and account data</li>
                  <li>• Active subscriptions</li>
                </ul>
                <p className="font-semibold text-destructive">This cannot be undone.</p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  className="flex-1"
                >
                  Delete Forever
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Privacy;