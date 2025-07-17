import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Database, 
  Wrench, 
  Users, 
  MessageSquare, 
  Target,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Java Servlets", "JSP", "MySQL", "MERN Stack"],
      color: "neon"
    },
    {
      title: "Mobile Development", 
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Kotlin", "Java", "Android Studio", "Mobile UI/UX"],
      color: "accent"
    },
    {
      title: "Data Science & AI",
      icon: <Database className="h-6 w-6" />,
      skills: ["Python", "R", "Machine Learning", "Data Analysis", "Statistical Modeling"],
      color: "secondary"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "XAMPP", "RStudio", "Postman", "VS Code", "IntelliJ IDEA"],
      color: "neon-green"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Team Collaboration", "Project Management", "Agile Methodology", "Leadership"],
      color: "accent"
    },
    {
      title: "Communication",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["Technical Writing", "Presentation", "Client Relations", "Mentoring"],
      color: "secondary"
    }
  ];

  const getSkillStyle = (color: string) => {
    const styles = {
      neon: "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30",
      accent: "bg-accent/20 text-accent border-accent/30 hover:bg-accent/30", 
      secondary: "bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30",
      "neon-green": "bg-neon.green/20 text-neon.green border-neon.green/30 hover:bg-neon.green/30"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  const getCardStyle = (color: string) => {
    const styles = {
      neon: "border-primary neon-glow",
      accent: "border-accent accent-glow",
      secondary: "border-secondary",
      "neon-green": "border-neon.green"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  return (
    <section id="skills" className="py-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">_skills</span>
            <span className="text-accent-neon">.stack</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-card/50 ${getCardStyle(category.color)} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  category.color === 'neon' ? 'bg-primary/20 text-primary' :
                  category.color === 'accent' ? 'bg-accent/20 text-accent' :
                  category.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                  'bg-neon.green/20 text-neon.green'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-pixel text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${getSkillStyle(category.color)} border font-pixel text-xs transition-all duration-300`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16">
          <Card className="p-6 bg-card/50 border-neon neon-glow">
            <h3 className="text-2xl font-bold font-pixel text-center mb-8 text-accent-neon">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-neon.green/20 border-2 border-neon.green rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-neon.green" />
                </div>
                <h4 className="font-pixel text-neon.green mb-1">Expert</h4>
                <p className="text-xs text-muted-foreground">Web Development, Android</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-pixel text-primary mb-1">Advanced</h4>
                <p className="text-xs text-muted-foreground">Data Science, MERN Stack</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-pixel text-accent mb-1">Intermediate</h4>
                <p className="text-xs text-muted-foreground">Machine Learning, AI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-secondary/20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-pixel text-secondary mb-1">Professional</h4>
                <p className="text-xs text-muted-foreground">Leadership, Communication</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;