import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="#" className="block group">
          <div className="flex items-center bg-[#1a2236] border border-[#334155] rounded-xl px-6 py-5 md:px-8 md:py-6 shadow-md transition hover:border-blue-500 cursor-pointer">
            <div className="flex-shrink-0 mr-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-2 border-blue-500">
                <HelpCircle className="text-blue-500 w-6 h-6" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-1 group-hover:underline">
                Transform your team with Codecademy Teams training
              </h3>
              <p className="text-base text-white/90">
                Empower your organization with hands-on learning that builds the skills your team needs to succeed in today's digital economy.
              </p>
            </div>
            <div className="ml-5 flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;