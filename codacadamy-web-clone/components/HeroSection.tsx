'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = [
    "/skills",
    "/career", 
    "/team",
    "/potential",
    "/self"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                Develop your
              </h1>
              <div className="bg-surface-dark rounded-lg p-4 inline-block">
                <span 
                  key={currentSkill}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow animate-fade-in-up"
                >
                  {skills[currentSkill]}
                </span>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
              Grow in your career and unlock new opportunities by learning in-demand skills in AI, 
              data, coding, cybersecurity, and more.
            </p>

            {/* CTA Section */}
            <div className="bg-surface-dark rounded-xl p-6 max-w-md space-y-4">
              {/* Google Sign Up */}
              <Button 
                variant="outline" 
                className="w-full bg-white text-gray-800 border-gray-300 hover:bg-gray-50 font-medium"
                size="lg"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </Button>

              <div className="text-center text-text-muted text-sm">OR</div>

              {/* Email Sign Up */}
              <Button variant="yellow" className="w-full" size="lg">
                More ways to sign up
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/hero-woman-coding.jpg" 
                alt="Professional woman coding on laptop" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Animation Control */}
            <div className="absolute bottom-4 left-4">
              <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                ⏸️ Pause animation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;