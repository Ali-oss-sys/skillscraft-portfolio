
import React from "react";
import {
  Code,
  Smartphone,
  ShoppingBag,
  Check,
  Globe,
  Database,
  Layout,
  AlignLeft,
  SquareCode,
  Cpu,
  Store,
  TabletSmartphone,
} from "lucide-react";

const SkillCard = ({ icon, title, description, skills, delay }) => {
  return (
    <div
      className="glass dark:glass-dark p-6 rounded-xl card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-3 mb-4 bg-accent/10 inline-block rounded-lg text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-accent" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const categories = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Creating responsive and interactive websites using modern technologies.",
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
      delay: 0.1,
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications for iOS and Android.",
      skills: [
        "React Native",
        "Expo",
        "Native APIs",
        "App Deployment",
        "Mobile UX Design",
      ],
      delay: 0.3,
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Shopify Development",
      description:
        "Customizing Shopify stores and developing custom Shopify apps.",
      skills: [
        "Shopify API",
        "Custom Apps",
        "Theme Development",
        "Liquid Templates",
        "E-commerce Solutions",
      ],
      delay: 0.5,
    },
  ];
  
  const technicalSkills = [
    { name: "HTML/CSS", percentage: 90, icon: <Layout className="w-4 h-4" /> },
    { name: "JavaScript", percentage: 85, icon: <SquareCode className="w-4 h-4" /> },
    { name: "React", percentage: 90, icon: <Code className="w-4 h-4" /> },
    { name: "React Native", percentage: 85, icon: <TabletSmartphone className="w-4 h-4" /> },
    { name: "Shopify", percentage: 80, icon: <Store className="w-4 h-4" /> },
    { name: "Node.js", percentage: 75, icon: <Cpu className="w-4 h-4" /> },
    { name: "Database", percentage: 70, icon: <Database className="w-4 h-4" /> },
    { name: "UI/UX", percentage: 80, icon: <AlignLeft className="w-4 h-4" /> },
  ];
  
  return (
    <section id="skills" className="py-20 bg-secondary/50 dark:bg-gray-800">
      <div className="container section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            I specialize in the following technologies and skills, helping me
            create outstanding digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
        
        <div className="glass dark:glass-dark rounded-xl p-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="p-1 bg-accent/10 rounded text-accent">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-secondary dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${skill.percentage}%`, transition: "width 1s ease-in-out" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
