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
    <Card className="glass-card overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 hover:scale-105">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-full flex items-center gap-2">
          <div className="relative">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          </div>
          <span className="text-xs font-semibold tracking-wider">ACTIVE</span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        
        <p className="text-sm leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="hero" 
          className="w-full group relative overflow-hidden"
          onClick={() => onSelect(id)}
        >
          <span className="relative z-10">Connect Now</span>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-white/50 group-hover:w-8 transition-all duration-300" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-1 w-0 h-0 border-l-[6px] border-l-white/50 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent group-hover:translate-x-2 transition-all duration-300" />
        </Button>
      </div>
    </Card>
  );
};
