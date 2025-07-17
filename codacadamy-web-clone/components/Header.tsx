"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Catalog", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: true },
    { label: "Live Learning", badge: "NEW" },
    { label: "For Business" },
  ];

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-yellow text-yellow-text py-3 px-4 text-center text-sm font-medium ">
        <span className="hidden sm:inline text-black font-extrabold">
          ENDS JULY 17: 50% off annual Pro memberships with code{" "}
        </span>
        <code className="bg-white text-black px-2 py-1 rounded font-mono text-xs mx-1">
          SUNSHINE
        </code>
        <Button
          variant="ghost"
          size="sm"
          className="ml-2 bg-black text-white hover:bg-blue-700 h-6 px-3 py-4 text-xs"
        >
          Join Pro
        </Button>
      </div>

      {/* Main Navigation */}
      <header className={cn(
        "bg-background border-b border-border sticky top-0 z-50 transition-shadow transition-colors duration-300",
        scrolled && "bg-navbar-blur shadow-lg"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <Image
                src="/codecademy.svg"
                alt="Codecademy Logo"
                width={200} 
                height={28} 
                className="h-7 w-auto"
                priority
              />
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <Button
                      variant="navigation"
                      className="flex items-center gap-1 text-sm"
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                      {item.badge && (
                        <span className="bg-yellow text-yellow-text text-xs px-2 py-0.5 rounded-full ml-2">
                          {item.badge}
                        </span>
                      )}
                    </Button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                className="text-text-secondary hover:text-text-primary"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Auth Buttons */}
              <div className="hidden sm:flex items-center space-x-3">
                <Button
                  variant="ghost"
                  className="text-text-primary hover:text-yellow px-4 py-2"
                >
                  Log In
                </Button>
                <Button variant="yellow" size="default" className="px-6 py-2 text-black">
                  Sign Up
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-surface-dark">
            <div className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start text-text-primary hover:text-yellow"
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-yellow text-yellow-text text-xs px-2 py-0.5 rounded-full ml-auto">
                      {item.badge}
                    </span>
                  )}
                </Button>
              ))}

              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Log In
                </Button>
                <Button variant="yellow" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;