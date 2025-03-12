
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(() => {
    const saved = localStorage.getItem("mobileMenuOpen");
    return saved ? JSON.parse(saved) : false;
  });
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    localStorage.setItem("mobileMenuOpen", JSON.stringify(isMobileMenuOpen));
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ["home", "about", "skills", "projects", "team", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass dark:glass-dark shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-primary transition-opacity duration-300 hover:opacity-80"
          >
            <span className="text-accent">Dev</span>Portfolio
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.slice(1));
                }}
                className={`nav-link ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      
      <div
        className={`md:hidden fixed inset-0 z-40 glass dark:glass-dark pt-20 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-accent" />
        </button>
        
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.slice(1));
              }}
              className="text-lg font-medium text-primary hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
