import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import CTASection from "@/components/CTASection";
import TeamsTrainingSection from "@/components/TeamsTrainingSection";
import SkillsSection from "@/components/SkillsSection";
import CoursesSection from "@/components/CoursesSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyLogos />
        <CTASection />
        <TeamsTrainingSection />
        <SkillsSection />
        <CoursesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
