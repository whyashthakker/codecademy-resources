'use client'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  FaMeta, 
  FaMicrosoft, 
  FaGoogle, 
  FaApple, 
  FaInstagram, 
  FaSpotify, 
  FaReddit, 
  FaAmazon
} from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";



const CompanyLogos = () => {
  const companies = [
    { name: "Meta", logo: <FaMeta /> },
    { name: "Microsoft", logo: <FaMicrosoft /> }, 
    { name: "Google", logo: <FaGoogle /> },
    { name: "Amazon", logo: <FaAmazon /> },
    { name: "Apple", logo: <FaApple /> },
    { name: "Instagram", logo: <FaInstagram /> },
    { name: "Spotify", logo: <FaSpotify /> },
    { name: "Reddit", logo: <FaReddit /> },
    { name: "Netflix", logo: <RiNetflixFill /> }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(5);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const maxIndex = Math.max(0, companies.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleCompanies = companies.slice(currentIndex, currentIndex + itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-text-secondary text-2txl  font-bold">
            Our learners work at
          </p>
        </div>
        
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-surface-dark border border-border rounded-full p-2 hover:bg-surface-darker transition-colors"
            aria-label="Previous companies"
          >
            <ChevronLeft className="w-5 h-5 text-text-primary" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
            >
              {companies.map((company, index) => (
                <div 
                  key={company.name} 
                  className="flex-shrink-0 flex items-center justify-center space-x-3 hover:opacity-100 transition-opacity duration-200 opacity-70"
                  style={{ width: `${100 / itemsPerSlide}%` }}
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="text-text-secondary font-medium text-lg hidden sm:block">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-surface-dark border border-border rounded-full p-2 hover:bg-surface-darker transition-colors"
            aria-label="Next companies"
          >
            <ChevronRight className="w-5 h-5 text-text-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-yellow-primary' : 'bg-surface-dark'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;