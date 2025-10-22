export const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/10 px-4 sm:px-6 py-8 md:py-12 backdrop-blur-xl mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-lg md:text-xl font-bold gradient-text">LoveSync AI 💕</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Where AI meets romance. Connect with companions who truly understand you.
            </p>
          </div>
          
          {/* Explore */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-sm md:text-base font-semibold">Explore</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse Matches</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-sm md:text-base font-semibold">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-sm md:text-base font-semibold">Connect</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dating Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 LoveSync AI. Made with 💕 for meaningful connections.
          </p>
          
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors touch-manipulation" aria-label="Twitter">
              <i className="fab fa-twitter text-lg md:text-xl"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors touch-manipulation" aria-label="Discord">
              <i className="fab fa-discord text-lg md:text-xl"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors touch-manipulation" aria-label="GitHub">
              <i className="fab fa-github text-lg md:text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
