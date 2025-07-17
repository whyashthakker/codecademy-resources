'use client'
import { useState } from "react";
import { Code, Database, Globe, BarChart3, Briefcase, Target, Cpu, Shield, Gamepad2, Cloud, Brain, Award, Medal, Plus, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const certificationSkills = [
  { name: "AWS", icon: Medal },
  { name: "Microsoft", icon: Medal },
  { name: "CompTIA", icon: Medal },
  { name: "ISC2", icon: Medal },
  { name: "AI", icon: Brain },
  { name: "Cloud computing", icon: Cloud },
  { name: "Cybersecurity", icon: Shield },
  { name: "Data science", icon: BarChart3 },
  { name: "DevOps", icon: Cpu },
  { name: "IT", icon: Cpu },
  { name: "Professional skills", icon: Users },
  { name: "All certifications", icon: Plus },
];

const skills = [
  { name: "Code foundations", icon: Code },
  { name: "Python", icon: Code },
  { name: "HTML & CSS", icon: Globe },
  { name: "Data science", icon: BarChart3 },
  { name: "Professional skills", icon: Briefcase },
  { name: "Java", icon: Code },
  { name: "Web development", icon: Globe },
  { name: "Data analytics", icon: Database },
  { name: "Interview prep", icon: Target },
  { name: "JavaScript", icon: Code },
  { name: "Web design", icon: Globe },
  { name: "Machine learning", icon: Brain },
  { name: "Computer science", icon: Cpu },
  { name: "C++", icon: Code },
  { name: "Mobile development", icon: Globe },
  { name: "AI", icon: Brain },
  { name: "IT", icon: Cpu },
  { name: "C#", icon: Code },
  { name: "Game development", icon: Gamepad2 },
  { name: "Cloud computing", icon: Cloud },
  { name: "Cybersecurity", icon: Shield },
  { name: "Go", icon: Code },
  { name: "DevOps", icon: Cpu },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<'top' | 'cert'>('top');

  const renderGrid = (items: { name: string; icon: any }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-surface-dark border border-border rounded-lg p-6 hover:border-yellow-primary transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-text-secondary group-hover:text-yellow-primary transition-colors" />
              <span className="text-text-primary font-medium">{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-primary mb-8">
          Build skills that stand out
        </h2>
        <div className="flex gap-8 mb-12 border-b border-white/20">
          <button
            className={`pb-2 font-medium transition-colors text-lg ${activeTab === 'top' ? 'text-yellow-primary border-b-2 border-yellow-primary' : 'text-white/70 hover:text-yellow-primary'}`}
            onClick={() => setActiveTab('top')}
          >
            Top subjects
          </button>
          <button
            className={`pb-2 font-medium transition-colors text-lg ${activeTab === 'cert' ? 'text-yellow-primary border-b-2 border-yellow-primary' : 'text-white/70 hover:text-yellow-primary'}`}
            onClick={() => setActiveTab('cert')}
          >
            Certification prep
          </button>
        </div>
        {activeTab === 'top' ? renderGrid(skills) : renderGrid(certificationSkills)}
        <div className="flex flex-col items-center mt-16">
          <p className="text-text-secondary text-xl mb-6">Looking for something else?</p>
          <Link href="/catalog" passHref legacyBehavior>
            <Button asChild className="bg-white text-black font-bold px-10 py-4 text-xl rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200">
              <span>Explore the catalog &rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;