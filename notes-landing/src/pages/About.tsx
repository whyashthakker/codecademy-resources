
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Users, Zap, ArrowRight } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former AI researcher at Stanford, passionate about democratizing knowledge management."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder", 
      bio: "Ex-Google engineer with 10+ years building scalable AI systems."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Natural Language Processing, published 50+ papers on semantic understanding."
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Intelligence Amplification",
      description: "We believe AI should amplify human intelligence, not replace it."
    },
    {
      icon: Target,
      title: "Clarity Through Organization",
      description: "Clear thinking comes from well-organized information and insights."
    },
    {
      icon: Users,
      title: "Privacy First",
      description: "Your thoughts and ideas are sacred. We never sell or share your data."
    },
    {
      icon: Zap,
      title: "Effortless Innovation",
      description: "The best tools disappear into the background, letting you focus on what matters."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Rethinking how we
              <br />
              think with information
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              MindVault was born from a simple frustration: despite having access to more information than ever, 
              we struggle to turn knowledge into wisdom. We're changing that.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It started in a Stanford research lab in 2022. Our founders were drowning in research papers, 
                  notes, and ideas scattered across dozens of tools. Despite having cutting-edge AI at their fingertips, 
                  they couldn't find a way to truly think with their information.
                </p>
                <p>
                  Traditional note-taking apps felt static. Search was limited to keywords. 
                  Connections between ideas remained hidden. The promise of a "second brain" felt more like 
                  a digital filing cabinet.
                </p>
                <p>
                  So we built something different. MindVault doesn't just store your thoughts—it thinks with you, 
                  revealing patterns, suggesting connections, and helping you build on your ideas in ways you never imagined.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
                <Brain className="w-24 h-24 text-primary-foreground opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What We Believe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make, from product features to company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto shadow-glow">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a diverse group of researchers, engineers, and designers united by a shared mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Ready to think differently?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of knowledge workers who've transformed how they capture, connect, and create with their ideas.
          </p>
          <Button variant="hero" size="lg" className="text-base px-8 py-3">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
