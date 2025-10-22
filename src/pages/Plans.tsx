import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, ArrowLeft, Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Text conversations',
      'Basic personalities',
      'Session-only memory',
      'Limited daily messages',
    ],
    color: 'from-muted to-muted',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$9.99',
    period: '/month',
    popular: true,
    features: [
      'Everything in Free',
      'Voice messages',
      'Persistent memory',
      'Unlimited messages',
      'Custom personas',
      'Priority support',
    ],
    color: 'from-primary to-secondary',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$19.99',
    period: '/month',
    features: [
      'Everything in Plus',
      'Dream Room (multi-companion)',
      'NSFW content access',
      'Advanced personalities',
      'Early access to features',
      'Premium support',
    ],
    color: 'from-secondary to-accent',
  },
];

const Plans = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentPlan] = useState('free');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleUpgrade = (planId: string) => {
    if (planId === 'free') return;
    setSelectedPlan(planId);
    setShowInvoice(true);
  };

  const handlePayment = () => {
    setShowInvoice(false);
    toast({
      title: "🎉 Upgrade Successful!",
      description: `Welcome to ${selectedPlan === 'plus' ? 'Plus' : 'Elite'}! Your new features are now active.`,
    });
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
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
            <h1 className="font-heading text-2xl md:text-3xl font-bold gradient-text">Plans & Pricing</h1>
            <p className="text-sm text-muted-foreground">Choose the perfect plan for your needs</p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <Card className="glass-card p-1.5 inline-flex border-white/10">
            <Button
              variant={billingCycle === 'monthly' ? 'hero' : 'ghost'}
              size="sm"
              onClick={() => setBillingCycle('monthly')}
              className="rounded-lg"
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === 'annual' ? 'hero' : 'ghost'}
              size="sm"
              onClick={() => setBillingCycle('annual')}
              className="rounded-lg relative"
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </Button>
          </Card>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => {
            const isCurrentPlan = plan.id === currentPlan;
            const annualPrice = plan.id !== 'free' 
              ? `$${(parseFloat(plan.price.replace('$', '')) * 12 * 0.8).toFixed(2)}`
              : plan.price;

            return (
              <Card
                key={plan.id}
                className={`glass-card p-6 border-white/10 relative ${
                  plan.popular ? 'md:scale-105 shadow-[0_0_50px_rgba(244,63,94,0.4)]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="glass-effect-strong px-4 py-1 rounded-full text-xs font-bold border border-primary/30">
                      🔥 Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      {plan.id === 'free' && <Star className="w-8 h-8 text-white" />}
                      {plan.id === 'plus' && <Crown className="w-8 h-8 text-white" />}
                      {plan.id === 'elite' && <Crown className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">
                        {billingCycle === 'annual' ? annualPrice : plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {billingCycle === 'annual' && plan.id !== 'free' ? '/year' : plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.popular ? 'hero' : plan.id === 'free' ? 'outline' : 'glass'}
                    className="w-full"
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={isCurrentPlan}
                  >
                    {isCurrentPlan ? 'Current Plan' : plan.id === 'free' ? 'Free Forever' : 'Upgrade Now'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="glass-effect-subtle p-4 border-white/10">
            <h3 className="font-semibold mb-2">💳 Payment Methods</h3>
            <p className="text-sm text-muted-foreground">
              We accept all major credit cards, PayPal, and cryptocurrency. All transactions are secure and encrypted.
            </p>
          </Card>
          <Card className="glass-effect-subtle p-4 border-white/10">
            <h3 className="font-semibold mb-2">🔄 Cancel Anytime</h3>
            <p className="text-sm text-muted-foreground">
              No commitments. Cancel your subscription anytime from your account settings. No questions asked.
            </p>
          </Card>
        </div>

        {/* Invoice Modal */}
        {showInvoice && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <Card className="glass-card p-6 max-w-md w-full border-white/10 animate-scale-in">
              <h2 className="font-heading text-xl font-bold mb-4">Complete Your Purchase</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-semibold capitalize">{selectedPlan}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-muted-foreground">Billing</span>
                  <span className="font-semibold capitalize">{billingCycle}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-bold text-xl">
                    {billingCycle === 'annual' 
                      ? `$${(parseFloat(plans.find(p => p.id === selectedPlan)?.price.replace('$', '') || '0') * 12 * 0.8).toFixed(2)}`
                      : plans.find(p => p.id === selectedPlan)?.price}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="hero" className="w-full" onClick={handlePayment}>
                  <Crown className="w-5 h-5" />
                  Complete Payment
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setShowInvoice(false)}>
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By completing this purchase, you agree to our Terms of Service and Privacy Policy.
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;