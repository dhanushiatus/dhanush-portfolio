import { ExternalLink, Github, Eye, Code, Smartphone, Database, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Student Support Desk",
      description: "A comprehensive web application for managing student queries and support tickets with an intuitive admin dashboard.",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: ["Real-time Chat", "Ticket Management", "Admin Dashboard", "Email Notifications"],
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      color: "neon",
      status: "Completed",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Hospital Management System", 
      description: "Enterprise-level hospital management solution with patient records, appointment scheduling, and staff management.",
      techStack: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap"],
      features: ["Patient Management", "Appointment Scheduling", "Medical Records", "Staff Dashboard"],
      category: "Enterprise Application",
      icon: <Code className="h-6 w-6" />,
      color: "accent",
      status: "Completed",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Polymart Ecoplast System",
      description: "Full-stack e-commerce platform for eco-friendly plastic products with advanced inventory management.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
      features: ["E-commerce Platform", "Payment Integration", "Inventory Management", "Analytics Dashboard"],
      category: "MERN Stack",
      icon: <Database className="h-6 w-6" />,
      color: "secondary",
      status: "In Progress",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Personal Finance Tracker",
      description: "Mobile application for tracking personal expenses, budgeting, and financial goal management with data visualization.",
      techStack: ["Kotlin", "Android Studio", "SQLite", "Charts Library"],
      features: ["Expense Tracking", "Budget Planning", "Data Visualization", "Goal Setting"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "neon-green",
      status: "Completed",
      image: "/api/placeholder/400/300"
    }
  ];

  const getCardStyle = (color: string) => {
    const styles = {
      neon: "border-primary group-hover:shadow-[0_0_40px_hsl(var(--glow-primary)/0.4)]",
      accent: "border-accent group-hover:shadow-[0_0_40px_hsl(var(--glow-accent)/0.4)]",
      secondary: "border-secondary group-hover:shadow-[0_0_40px_hsl(var(--glow-secondary)/0.4)]",
      "neon-green": "border-neon.green group-hover:shadow-[0_0_40px_hsl(var(--neon-green)/0.4)]"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  const getIconStyle = (color: string) => {
    const styles = {
      neon: "bg-primary/20 text-primary",
      accent: "bg-accent/20 text-accent", 
      secondary: "bg-secondary/20 text-secondary",
      "neon-green": "bg-neon.green/20 text-neon.green"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  const getStatusStyle = (status: string) => {
    return status === 'Completed' 
      ? 'bg-neon.green/20 text-neon.green border-neon.green/30'
      : 'bg-accent/20 text-accent border-accent/30';
  };

  return (
    <section id="projects" className="py-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">_projects</span>
            <span className="text-accent-neon">.portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest projects demonstrating expertise across different technologies and domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-card/50 ${getCardStyle(project.color)} transition-all duration-500 hover:scale-105 group overflow-hidden`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted/10 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/80 flex items-center justify-center">
                  <div className={`p-4 rounded-full ${getIconStyle(project.color)}`}>
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusStyle(project.status)} border font-pixel text-xs`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs font-pixel text-muted-foreground">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-pixel text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-pixel text-accent mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1 h-1 rounded-full ${
                          project.color === 'neon' ? 'bg-primary' :
                          project.color === 'accent' ? 'bg-accent' :
                          project.color === 'secondary' ? 'bg-secondary' :
                          'bg-neon.green'
                        }`}></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-pixel text-accent mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs font-pixel ${
                          project.color === 'neon' ? 'border-primary/30 text-primary' :
                          project.color === 'accent' ? 'border-accent/30 text-accent' :
                          project.color === 'secondary' ? 'border-secondary/30 text-secondary' :
                          'border-neon.green/30 text-neon.green'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`font-pixel flex-1 ${
                      project.color === 'neon' ? 'border-primary text-primary hover:bg-primary/10' :
                      project.color === 'accent' ? 'border-accent text-accent hover:bg-accent/10' :
                      project.color === 'secondary' ? 'border-secondary text-secondary hover:bg-secondary/10' :
                      'border-neon.green text-neon.green hover:bg-neon.green/10'
                    }`}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-pixel flex-1 border-muted-foreground/30 text-muted-foreground hover:bg-muted/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card/50 border-accent accent-glow max-w-2xl mx-auto">
            <h3 className="text-xl font-bold font-pixel text-accent-neon mb-4">
              More Projects on GitHub
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my complete portfolio including open-source contributions, 
              experimental projects, and collaborative work.
            </p>
            <Button 
              className="font-pixel"
              onClick={() => window.open('https://github.com/dhanushiatus', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;