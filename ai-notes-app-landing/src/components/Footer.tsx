
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                MindVault
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering knowledge workers with AI-powered note-taking that thinks with you.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">API</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Status</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MindVault. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
