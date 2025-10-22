import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Verified } from "lucide-react";

interface CompanionCardProps {
  id: string;
  name: string;
  title: string;
  age: number;
  description: string;
  images: string[];
  tags: string[];
  onSelect: (id: string) => void;
}

export const CompanionCard = ({ 
  id, 
  name, 
  title,
  age,
  description, 
  images, 
  tags, 
  onSelect 
}: CompanionCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card 
      onClick={() => onSelect(id)}
      className="glass-card overflow-hidden group cursor-pointer hover:shadow-[0_20px_70px_rgba(139,92,246,0.5)] transition-all duration-500 active:scale-[0.98] md:hover:scale-[1.02] border-white/10 relative"
    >
      {/* Image Gallery */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={images[currentImageIndex]} 
          alt={`${name} - Photo ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
        
        {/* Image Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 touch-manipulation"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 touch-manipulation"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            
            {/* Photo Indicators */}
            <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 px-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white flex-1' 
                      : 'bg-white/40 flex-1'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3 glass-effect-strong px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xl border border-white/20">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] md:text-xs font-semibold text-white">ONLINE</span>
        </div>
        
        {/* Info Overlay - Tinder Style */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-2">
          <div className="flex items-end gap-2">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-lg">
              {name}
            </h3>
            <span className="text-xl md:text-2xl text-white/90 font-light pb-0.5">{age}</span>
            <Verified className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary mb-1" />
          </div>
          
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">{title}</span>
          </div>
          
          <p className="text-xs md:text-sm text-white/80 line-clamp-2 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 md:px-3 md:py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-[10px] md:text-xs font-semibold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 md:gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Add to favorites functionality
          }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all touch-manipulation group/btn"
          aria-label="Add to favorites"
        >
          <i className="fas fa-heart text-lg md:text-xl text-white group-hover/btn:text-red-400 transition-colors"></i>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id);
          }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:scale-110 transition-all shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] touch-manipulation"
          aria-label="Start conversation"
        >
          <i className="fas fa-message text-lg md:text-xl text-white"></i>
        </button>
      </div>
    </Card>
  );
};
