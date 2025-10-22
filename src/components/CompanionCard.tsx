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
      className="glass-card overflow-hidden group cursor-pointer transition-all duration-500 active:scale-[0.98] md:hover:scale-[1.02] border-white/10 relative shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_90px_rgba(244,63,94,0.5)] animate-slide-up"
    >
      {/* Image Gallery */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={images[currentImageIndex]} 
          alt={`${name} - Photo ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Gradient Overlay - Extended for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 70%)' }} />
        
        {/* Image Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 touch-manipulation z-20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 touch-manipulation z-20"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            
            {/* Photo Indicators */}
            <div className="absolute top-3 left-0 right-0 flex justify-center gap-1 px-4 z-10">
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
        <div className="absolute top-3 right-3 glass-effect-strong px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xl border border-white/30 z-10 shadow-soft">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(251,146,60,0.8)] animate-subtle-pulse" />
          <span className="text-[10px] md:text-xs font-semibold text-white tracking-wide">ONLINE</span>
        </div>
        
        {/* Info Overlay - Tinder Style with proper spacing for buttons */}
        <div className="absolute bottom-0 left-0 right-0 pb-20 md:pb-24 pt-12 px-4 md:px-6 space-y-1.5 md:space-y-2 z-10 pointer-events-none">
          <div className="flex items-end gap-2 flex-wrap">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {name}
            </h3>
            <span className="text-xl md:text-2xl text-white/90 font-light pb-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{age}</span>
            <Verified className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>
          
          <div className="flex items-center gap-2 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">{title}</span>
          </div>
          
          <p className="text-xs md:text-sm text-white/80 line-clamp-2 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pr-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 md:px-3 md:py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-[10px] md:text-xs font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Buttons - Fixed positioning to avoid overlap */}
        <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex gap-2 md:gap-3 z-20 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add to favorites functionality
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/20 hover:border-white/40 hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation group/btn shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(244,63,94,0.4)]"
            aria-label="Add to favorites"
          >
            <i className="fas fa-heart text-lg md:text-xl text-white group-hover/btn:text-primary transition-all duration-300"></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(id);
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_8px_32px_rgba(244,63,94,0.5)] hover:shadow-[0_12px_48px_rgba(244,63,94,0.7)] touch-manipulation"
            aria-label="Start conversation"
          >
            <i className="fas fa-message text-lg md:text-xl text-white"></i>
          </button>
        </div>
      </div>
    </Card>
  );
};
