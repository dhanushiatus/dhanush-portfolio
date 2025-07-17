import { Smartphone, Globe, Palette, Bug, GraduationCap, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Android App Development",
      description: "Native Android applications using Kotlin and Java with modern UI/UX design principles and optimized performance.",
      features: ["Native Development", "Material Design", "API Integration", "Performance Optimization"],
      color: "neon"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web solutions using MERN stack, PHP, and Java servlets with responsive design and modern frameworks.",
      features: ["MERN Stack", "Responsive Design", "REST APIs", "Database Design"],
      color: "accent"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces and engaging user experiences for web and mobile.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "secondary"
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Bug Fixing & Optimization",
      description: "Code review, debugging, and performance optimization for existing applications to improve reliability and speed.",
      features: ["Code Review", "Performance Tuning", "Security Audit", "Refactoring"],
      color: "neon-green"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Project Support",
      description: "Mentoring and guidance for students and junior developers on programming projects and best practices.",
      features: ["Code Mentoring", "Project Planning", "Best Practices", "Career Guidance"],
      color: "accent"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Data Science Solutions",
      description: "Data analysis, machine learning models, and AI-powered solutions to extract insights from your data.",
      features: ["Data Analysis", "ML Models", "Predictive Analytics", "Data Visualization"],
      color: "secondary"
    }
  ];

  const getCardStyle = (color: string) => {
    const styles = {
      neon: "border-primary neon-glow group-hover:shadow-[0_0_40px_hsl(var(--glow-primary)/0.6)]",
      accent: "border-accent accent-glow group-hover:shadow-[0_0_40px_hsl(var(--glow-accent)/0.6)]", 
      secondary: "border-secondary group-hover:shadow-[0_0_40px_hsl(var(--glow-secondary)/0.6)]",
      "neon-green": "border-neon.green group-hover:shadow-[0_0_40px_hsl(var(--neon-green)/0.6)]"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  const getIconStyle = (color: string) => {
    const styles = {
      neon: "bg-primary/20 text-primary border-primary/30",
      accent: "bg-accent/20 text-accent border-accent/30",
      secondary: "bg-secondary/20 text-secondary border-secondary/30",
      "neon-green": "bg-neon.green/20 text-neon.green border-neon.green/30"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  return (
    <section id="services" className="py-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">_services</span>
            <span className="text-accent-neon">.offerings</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 ${getCardStyle(service.color)} transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-current to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${getIconStyle(service.color)} border-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-pixel text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        service.color === 'neon' ? 'bg-primary' :
                        service.color === 'accent' ? 'bg-accent' :
                        service.color === 'secondary' ? 'bg-secondary' :
                        'bg-neon.green'
                      }`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className={`w-full font-pixel opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                    service.color === 'neon' ? 'border-primary text-primary hover:bg-primary/10' :
                    service.color === 'accent' ? 'border-accent text-accent hover:bg-accent/10' :
                    service.color === 'secondary' ? 'border-secondary text-secondary hover:bg-secondary/10' :
                    'border-neon.green text-neon.green hover:bg-neon.green/10'
                  }`}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card/50 border-neon neon-glow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-pixel text-accent-neon mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to turn your ideas into reality. From concept to deployment, 
              I'll guide you through every step of the development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="neon-glow font-pixel"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                className="border-accent accent-glow font-pixel"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;