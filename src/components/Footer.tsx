export const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/10 px-6 py-12 backdrop-blur-xl mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold gradient-text">AI Companion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your perfect AI chat partner, available 24/7 for meaningful conversations.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Companions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AI Companion. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
