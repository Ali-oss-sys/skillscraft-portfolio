
import React from "react";
import { Calendar, MapPin, Briefcase, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            I'm a passionate developer with a focus on creating beautiful and
            functional web and mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-lg text-foreground/80">
              Hi there! I'm a full-stack developer with over 5 years of
              experience in building websites, mobile apps, and e-commerce
              solutions. I specialize in React, React Native, and Shopify
              development.
            </p>
            <p className="text-lg text-foreground/80">
              My passion lies in creating intuitive and responsive user
              interfaces that provide exceptional user experiences. I believe in
              clean code, continuous learning, and staying up-to-date with the
              latest technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">New York, USA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                  <p className="font-medium">30+ Completed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">BS in CS</p>
                </div>
              </div>
            </div>
            
            <a
              href="#"
              className="inline-block px-8 py-3 mt-4 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:bg-accent/90"
            >
              Download CV
            </a>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl glass shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=500"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-accent/20 -z-10 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-accent/10 -z-10 animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
