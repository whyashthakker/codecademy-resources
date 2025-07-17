'use client'
import { Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    heading: "Turn ambition into action",
    points: [
      "Find guided paths and interactive lessons no matter your skill level",
      "Fuel your growth with in-demand subjects like AI, cloud, data, cybersecurity, and more",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    alt: "Person working on laptop",
  },
  {
    heading: "Gain hands-on expertise",
    points: [
      "Build portfolio-worthy projects that stand out in a competitive job market",
      "Grow in your career with prep for industry certifications from AWS, Microsoft, CompTIA, ISC2, and more",
    ],
    image: "/assets/hero-woman-coding.jpg",
    alt: "Professional woman coding on laptop",
  },
  {
    heading: "Learn from anywhere",
    points: [
      "Access courses on your schedule, from any device",
      "Track your progress and pick up right where you left off",
    ],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop&crop=face",
    alt: "Person learning on tablet",
  },
  {
    heading: "Join a global community",
    points: [
      "Connect with millions of learners worldwide",
      "Share projects, get feedback, and grow together",
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=face",
    alt: "Group of people collaborating",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-text-secondary text-lg mb-4">The experience</p>
          <h2 className="text-5xl font-bold text-text-primary mb-6">
            Designed for progress
          </h2>
        </div>
        <Carousel
          className="relative"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      {slide.heading}
                    </h3>
                    <div className="space-y-6">
                      {slide.points.map((point, i) => (
                        <div className="flex items-start gap-4" key={i}>
                          <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-text-primary text-lg">{point}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-surface-dark rounded-2xl overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
                      <div className="grid grid-cols-8 gap-2">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-yellow-primary rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ExperienceSection;