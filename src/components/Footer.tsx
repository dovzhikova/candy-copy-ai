export const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/10 px-4 sm:px-6 py-8 md:py-12 backdrop-blur-xl mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-lg md:text-xl font-bold gradient-text">AI Companion</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Your perfect AI chat partner, available 24/7 for meaningful conversations.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-sm md:text-base font-semibold">Product</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Companions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
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
          
          {/* Support */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-heading text-sm md:text-base font-semibold">Support</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 AI Companion. All rights reserved.
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
