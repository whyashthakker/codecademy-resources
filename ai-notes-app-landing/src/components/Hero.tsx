
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-glow/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-secondary border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Intelligence</span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Your vault of
            <br />
            intelligent thoughts
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            MindVault transforms how you capture, connect, and create with your ideas. 
            Experience note-taking that thinks with you, not just for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="text-base px-8 py-3">
              Start Building Your Vault
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-3">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by knowledge workers worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">15k+</div>
              <div className="text-muted-foreground">Active Users</div>
              <div className="w-px h-6 bg-border" />
              <div className="text-2xl font-bold">2M+</div>
              <div className="text-muted-foreground">Notes Created</div>
              <div className="w-px h-6 bg-border" />
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
