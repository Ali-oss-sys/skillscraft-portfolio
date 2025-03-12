
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React.js and Node.js. Passionate about clean code and user experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "jane@example.com",
      },
    },
    {
      id: 2,
      name: "John Smith",
      role: "Mobile Developer",
      bio: "Specialized in React Native and cross-platform mobile development. Loves creating intuitive mobile experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "john@example.com",
      },
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Shopify Specialist",
      bio: "Expert in Shopify theme development and custom app creation. Passionate about e-commerce solutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "emily@example.com",
      },
    },
  ];
  
  return (
    <section id="team" className="py-20 bg-secondary/50 dark:bg-gray-800">
      <div className="container section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle mx-auto">
            Meet our talented team of developers and designers who bring your
            ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="glass dark:glass-dark rounded-xl overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative pt-6">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-accent/10 to-transparent -z-10"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
