import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CompanionCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  onSelect: (id: string) => void;
}

export const CompanionCard = ({ 
  id, 
  name, 
  title, 
  description, 
  image, 
  tags, 
  onSelect 
}: CompanionCardProps) => {
  return (
    <Card className="glass-card overflow-hidden group hover:shadow-[0_10px_50px_rgba(139,92,246,0.4)] transition-all duration-500 active:scale-[0.98] md:hover:scale-[1.02] border-white/10">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        
        {/* Status Indicator - Visual only */}
        <div className="absolute top-3 right-3 md:top-5 md:right-5 glass-effect-subtle px-3 py-2 md:px-4 md:py-2.5 rounded-full flex items-center backdrop-blur-xl" role="status" aria-label="Online">
          <i className="fas fa-circle text-accent text-[7px] md:text-[8px] animate-pulse" aria-hidden="true"></i>
        </div>
      </div>
      
      <div className="p-5 md:p-8 space-y-4 md:space-y-6">
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-1.5 md:mb-2 tracking-tight">{name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">{title}</p>
        </div>
        
        <p className="text-xs md:text-sm leading-relaxed text-foreground/80 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 md:gap-2.5">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 md:px-4 md:py-1.5 rounded-full glass-effect-subtle text-[10px] md:text-xs font-semibold tracking-wide border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="hero" 
          className="w-full py-5 md:py-6 text-sm md:text-base font-semibold shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] touch-manipulation"
          onClick={() => onSelect(id)}
          aria-label={`Start conversation with ${name}`}
        >
          <i className="fas fa-message" aria-hidden="true"></i>
          Start Conversation
        </Button>
      </div>
    </Card>
  );
};
