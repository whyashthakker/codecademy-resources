import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-secondary border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Ready to get started?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-hero bg-clip-text text-transparent">
            Start thinking smarter today
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join thousands of knowledge workers who've transformed their note-taking with AI. 
            Your future self will thank you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="text-base px-8 py-3">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-3">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}