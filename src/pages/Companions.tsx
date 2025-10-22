import { useState } from "react";
import { CompanionCard } from "@/components/CompanionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const companions = [
  {
    id: 'luna',
    name: 'Luna',
    title: 'Creative Artist',
    age: 24,
    description: 'A free-spirited creative soul with a passion for visual arts, indie music, and existential philosophy. Luna loves exploring abstract concepts and finding beauty in unexpected places.',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=700&fit=crop',
    ],
    tags: ['Creative', 'Artistic', 'Philosophical'],
  },
  {
    id: 'alex',
    name: 'Alex',
    title: 'Tech Enthusiast',
    age: 27,
    description: 'A tech-savvy innovator who stays ahead of the latest developments in AI, programming, and digital trends. Alex thrives on problem-solving and sharing knowledge.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=700&fit=crop',
    ],
    tags: ['Tech', 'Gaming', 'Learning'],
  },
  {
    id: 'nova',
    name: 'Nova',
    title: 'Fitness Coach',
    age: 26,
    description: 'An energetic motivator dedicated to holistic health, mindful movement, and sustainable wellness practices. Nova believes in balanced living and finding joy in the journey.',
    images: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=700&fit=crop',
    ],
    tags: ['Fitness', 'Wellness', 'Motivation'],
  },
  {
    id: 'kai',
    name: 'Kai',
    title: 'Adventure Seeker',
    age: 29,
    description: 'A thrill-seeking explorer with stories from mountain peaks, hidden trails, and remote destinations. Kai lives for authentic experiences and inspiring others to step outside their comfort zone.',
    images: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=700&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=700&fit=crop',
    ],
    tags: ['Adventure', 'Travel', 'Outdoors'],
  },
];

const allTags = Array.from(new Set(companions.flatMap(c => c.tags)));

const Companions = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    navigate(`/chat/${id}`);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredCompanions = companions.filter(companion => {
    const matchesSearch = companion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         companion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         companion.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => companion.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header */}
      <div className="glass-effect border-b border-white/10 px-4 sm:px-6 py-4 md:py-6 sticky top-0 z-10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-white/10 shrink-0 touch-manipulation"
              onClick={() => navigate('/')}
              aria-label="Back to home"
            >
              <i className="fas fa-arrow-left text-lg md:text-xl"></i>
            </Button>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-3 md:gap-4">
                <div>
                  <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text bg-[length:200%_auto] tracking-tight">Choose Your Companion</h1>
                  <p className="text-muted-foreground mt-1 md:mt-2 text-xs md:text-base">
                    {filteredCompanions.length} {filteredCompanions.length === 1 ? 'companion' : 'companions'} available
                  </p>
                </div>
                <Input
                  type="search"
                  placeholder="Search companions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="glass-effect border-white/20 w-full text-sm md:text-base"
                  aria-label="Search companions"
                />
              </div>
            </div>
          </div>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "hero" : "glass"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="rounded-full text-xs md:text-sm touch-manipulation"
                aria-pressed={selectedTags.includes(tag)}
              >
                {tag}
              </Button>
            ))}
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="rounded-full hover:bg-white/10 text-xs md:text-sm touch-manipulation"
              >
                <i className="fas fa-times mr-1.5 md:mr-2"></i>
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Companions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        {filteredCompanions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredCompanions.map((companion) => (
              <CompanionCard
                key={companion.id}
                {...companion}
                onSelect={handleSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 md:py-24 px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="fas fa-search text-2xl md:text-3xl text-muted-foreground"></i>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3">No companions found</h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-4 md:mb-6">
              Try adjusting your search or filters to find the perfect companion.
            </p>
            <Button
              variant="glass"
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="touch-manipulation"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companions;
