import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Careers", "Affiliates", "Partnerships"]
    },
    {
      title: "Resources", 
      links: ["Articles", "Blog", "Cheatsheets", "Code challenges", "Docs", "Projects", "Videos", "Workspaces"]
    },
    {
      title: "Support",
      links: ["Help Center"]
    },
    {
      title: "Plans",
      links: ["For individuals", "For students", "For business", "Discounts"]
    },
    {
      title: "Community",
      links: ["Visit community", "Code Crew", "Events", "Learner Stories"]
    },
    {
      title: "Subjects",
      links: ["AI", "Cloud computing", "Code foundations", "Computer science",  "Data science", "Game development", "IT", "Machine learning", "Mobile development", "Web design", "Web development"]
    },
    {
      title: "Languages", 
      links: ["Bash", "C", "C++", "C#", "Go", "HTML & CSS", "Java", "JavaScript", "Kotlin", "PHP", "Python", "R", "Ruby", "SQL", "Swift"]
    },
    {
      title: "Career building",
      links: ["Career paths", "Career Center", "Interview prep", "Professional certification", "Live Learning", "—", "Full catalog", "Beta content", "Roadmap"]
    },
    {
      title: "Mobile",
      links: []
    }
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className={section.title === "Mobile" ? "col-span-2 md:col-span-1" : ""}>
              <h4 className="text-text-primary font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link === "—" ? (
                      <div className="border-t border-border my-2"></div>
                    ) : (
                      <a href="#" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              
              {section.title === "Mobile" && (
                <div className="space-y-3 mt-4">
                  <div className="bg-surface-dark rounded-lg p-3">
                    <div className="text-white text-xs">Download on the</div>
                    <div className="text-white font-semibold">App Store</div>
                  </div>
                  <div className="bg-surface-dark rounded-lg p-3">
                    <div className="text-white text-xs">Get it on</div>
                    <div className="text-white font-semibold">Google Play</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/codecademy.svg"
                alt="Codecademy Logo"
                width={160}
                height={24}
                className="h-6 w-auto"
                priority
              />
              <span className="text-text-muted text-sm ml-2">from Skillsoft</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 text-text-muted text-sm">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-text-primary transition-colors">Do Not Sell My Personal Information</a>
              <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
            </div>
            <div>
              Made with ❤️ in Mumbai © 2025 Codecademy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;