import { CompanionCard } from "@/components/CompanionCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const companions = [
  {
    id: 'luna',
    name: 'Luna',
    title: 'Creative Artist',
    description: 'A free-spirited creative soul who loves art, music, and deep philosophical conversations.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
    tags: ['Creative', 'Artistic', 'Philosophical'],
  },
  {
    id: 'alex',
    name: 'Alex',
    title: 'Tech Enthusiast',
    description: 'Passionate about technology, innovation, and helping others learn new skills.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    tags: ['Tech', 'Gaming', 'Learning'],
  },
  {
    id: 'nova',
    name: 'Nova',
    title: 'Fitness Coach',
    description: 'Energetic and motivating, dedicated to health, wellness, and positive lifestyle.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
    tags: ['Fitness', 'Wellness', 'Motivation'],
  },
  {
    id: 'kai',
    name: 'Kai',
    title: 'Adventure Seeker',
    description: 'Always ready for the next adventure, loves travel stories and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    tags: ['Adventure', 'Travel', 'Outdoors'],
  },
];

const Companions = () => {
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header */}
      <div className="glass-effect border-b border-white/10 px-6 py-6 sticky top-0 z-10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-white/10"
            onClick={() => navigate('/')}
          >
            <i className="fas fa-arrow-left text-xl"></i>
          </Button>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text bg-[length:200%_auto] tracking-tight">Choose Your Companion</h1>
            <p className="text-muted-foreground mt-3 text-lg font-light">Select an AI companion and begin your journey</p>
          </div>
        </div>
      </div>

      {/* Companions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companions;
