import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, Shield, Brain, Crown, Lock, 
  Globe, Gift, HelpCircle, Users, Star, Settings as SettingsIcon 
} from "lucide-react";

const menuItems = [
  {
    icon: Users,
    label: 'Profile',
    description: 'Persona and voice settings',
    path: '/profile',
    color: 'text-primary',
  },
  {
    icon: Shield,
    label: 'Boundaries',
    description: 'Content preferences & safety',
    path: '/boundaries',
    color: 'text-secondary',
  },
  {
    icon: Brain,
    label: 'Memory',
    description: 'What your companion remembers',
    path: '/memory',
    color: 'text-accent',
  },
  {
    icon: Crown,
    label: 'Plans & Billing',
    description: 'Subscription and payments',
    path: '/plans',
    color: 'text-primary',
  },
  {
    icon: Lock,
    label: 'Privacy',
    description: 'Data controls & security',
    path: '/privacy',
    color: 'text-secondary',
  },
  {
    icon: Globe,
    label: 'Language',
    description: 'EN • RU • HE',
    path: '/language',
    color: 'text-accent',
  },
  {
    icon: Gift,
    label: 'Gifts & Referrals',
    description: 'Share and earn rewards',
    path: '/gifts',
    color: 'text-primary',
  },
  {
    icon: Star,
    label: 'Dream Room',
    description: 'Multi-companion experience',
    badge: 'Elite',
    path: '/dream-room',
    color: 'text-secondary',
  },
  {
    icon: HelpCircle,
    label: 'Support & FAQ',
    description: 'Get help and answers',
    path: '/support',
    color: 'text-accent',
  },
];

const Settings = () => {
  const navigate = useNavigate();

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
            <h1 className="font-heading text-2xl md:text-3xl font-bold gradient-text">Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <Card
              key={item.path}
              className="glass-card p-4 md:p-5 cursor-pointer hover:border-primary/50 transition-all border-white/10 group"
              onClick={() => navigate(item.path)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{item.label}</h3>
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <i className="fas fa-chevron-right text-muted-foreground group-hover:text-foreground transition-colors"></i>
              </div>
            </Card>
          ))}
        </div>

        {/* Version Info */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>HeartSync v1.0.0</p>
          <p className="mt-1">Made with 💕 for meaningful connections</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;