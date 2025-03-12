
import React, { useState } from "react";
import { ExternalLink, Github, Code, Smartphone, ShoppingBag } from "lucide-react";
import colors from "../utils/colors";

// Define the Globe icon component first to fix the TS error
const Globe = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categoryIcons = {
    all: <Code className="w-5 h-5" />,
    web: <Globe className="w-5 h-5" />,
    mobile: <Smartphone className="w-5 h-5" />,
    shopify: <ShoppingBag className="w-5 h-5" />,
  };
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Redux", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Weather Mobile App",
      description: "A cross-platform mobile app that shows weather information based on location.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
      category: "mobile",
      technologies: ["React Native", "Expo", "Weather API"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Shopify Custom App",
      description: "A custom Shopify app for inventory management and order processing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      category: "shopify",
      technologies: ["Shopify API", "React", "Node.js", "GraphQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Delivery Tracking App",
      description: "A mobile app for tracking deliveries and managing logistics.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
      category: "mobile",
      technologies: ["React Native", "Maps API", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Shopify Theme Customization",
      description: "Custom Shopify theme with enhanced features and optimized checkout.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      category: "shopify",
      technologies: ["Liquid", "JavaScript", "CSS", "Shopify APIs"],
      github: "#",
      demo: "#",
    },
  ];
  
  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );
  
  return (
    <section id="projects" className={`py-20 bg-${colors.bgLight} dark:bg-${colors.bgDark}`}>
      <div className="container section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            Here are some of my recent projects showcasing my skills in web
            development, mobile app development, and Shopify customization.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className={`flex flex-wrap gap-2 p-1 bg-${colors.bgSecondary} dark:bg-${colors.bgSecondaryDark} rounded-lg max-w-lg mx-auto`}>
            {["all", "web", "mobile", "shopify"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-${colors.accent} text-white shadow-md`
                    : `hover:bg-${colors.bgSecondary}/80 dark:hover:bg-${colors.bgSecondaryDark}`
                }`}
              >
                {categoryIcons[category]}
                <span className="capitalize">{category}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass dark:glass-dark rounded-xl overflow-hidden card-hover animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-${colors.categoryBg} text-${colors.categoryText} capitalize`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`text-${colors.textMuted} mb-4`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded-md bg-${colors.techBg} dark:bg-${colors.techBgDark}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className={`flex items-center space-x-1 text-sm text-${colors.linkText} hover:text-${colors.linkHover} transition-colors duration-300`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      className={`flex items-center space-x-1 text-sm text-${colors.linkText} hover:text-${colors.linkHover} transition-colors duration-300`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
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

export default Projects;
