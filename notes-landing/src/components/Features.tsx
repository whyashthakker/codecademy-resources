import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Zap, 
  Network, 
  FileText, 
  MessageSquare, 
  Sparkles,
  Brain,
  Link,
  Archive
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Organization",
    description: "Automatically categorize and tag your notes with intelligent AI that learns your thinking patterns."
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find anything instantly with semantic search that understands context and meaning, not just keywords."
  },
  {
    icon: Link,
    title: "Auto-Linking",
    description: "Discover hidden connections between your ideas as AI automatically links related concepts."
  },
  {
    icon: Sparkles,
    title: "Insight Generation",
    description: "Get AI-generated summaries, key takeaways, and actionable insights from your notes."
  },
  {
    icon: MessageSquare,
    title: "Chat with Notes",
    description: "Ask questions about your knowledge base and get instant, contextual answers."
  },
  {
    icon: Archive,
    title: "Version History",
    description: "Never lose a thought with automatic versioning and intelligent change tracking."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Supercharge your thinking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed to amplify your intelligence and help you think more clearly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}