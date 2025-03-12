
import React, { useEffect, useRef } from "react";
import { ArrowRight, Code, Smartphone, ShoppingBag } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const icons = heroRef.current.querySelectorAll(".floating-icon");
      icons.forEach((icon) => {
        const speed = parseFloat((icon as HTMLElement).dataset.speed || "5");
        const offsetX = (x - rect.width / 2) / speed;
        const offsetY = (y - rect.height / 2) / speed;
        (icon as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-background dark:from-slate-900 dark:to-background -z-10"></div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code
          className="floating-icon absolute text-accent/10 top-1/4 left-1/4 w-24 h-24 animate-float"
          data-speed="8"
        />
        <Smartphone
          className="floating-icon absolute text-accent/10 bottom-1/4 right-1/3 w-20 h-20 animate-float"
          style={{ animationDelay: "1s" }}
          data-speed="12"
        />
        <ShoppingBag
          className="floating-icon absolute text-accent/10 top-1/3 right-1/4 w-16 h-16 animate-float"
          style={{ animationDelay: "2s" }}
          data-speed="6"
        />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Full-Stack Developer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Crafting Digital <br />
            <span className="text-accent">Experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            I build beautiful, responsive, and user-friendly websites and
            applications using modern technologies like React, React Native, and
            Shopify.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:bg-accent/90 flex items-center justify-center"
            >
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-primary/20 dark:border-primary/10 text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary/5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center">
          <div className="w-1 h-2 bg-primary/50 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
