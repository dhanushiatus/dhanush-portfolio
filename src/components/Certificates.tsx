import { ExternalLink, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "Esoft DiTec",
      issuer: "Esoft Metro Campus",
      date: "2023",
      description: "Diploma in Information Technology covering comprehensive IT fundamentals and practical skills",
      skills: ["Information Technology", "Programming", "Database Management", "Networking"],
      color: "neon"
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive program covering data science methodology, tools, and techniques",
      skills: ["Python", "Data Analysis", "Machine Learning", "SQL"],
      color: "accent"
    },
    {
      title: "AI Product Management Specialization",
      issuer: "Duke University",
      date: "2024",
      description: "Strategic approach to AI product development and management",
      skills: ["AI Strategy", "Product Management", "Ethics in AI"],
      color: "secondary"
    },
    {
      title: "Fundamentals of Machine Learning and AI",
      issuer: "Coursera",
      date: "2023",
      description: "Core concepts and applications of ML and artificial intelligence",
      skills: ["Machine Learning", "Neural Networks", "Deep Learning"],
      color: "neon-green"
    },
    {
      title: "Google Ads for Beginners",
      issuer: "Google",
      date: "2023",
      description: "Digital marketing fundamentals and Google Ads platform mastery",
      skills: ["Digital Marketing", "Google Ads", "Analytics"],
      color: "accent"
    },
    {
      title: "Excel for Data Analysis",
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "Advanced Excel techniques for data analysis and visualization",
      skills: ["Excel", "Data Visualization", "Statistical Analysis"],
      color: "secondary"
    },
    {
      title: "Project Management with ClickUp",
      issuer: "ClickUp",
      date: "2023",
      description: "Modern project management methodologies and tools",
      skills: ["Project Management", "Agile", "Team Collaboration"],
      color: "neon-green"
    }
  ];

  const getCardStyle = (color: string) => {
    const styles = {
      neon: "border-primary neon-glow hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.6)]",
      accent: "border-accent accent-glow hover:shadow-[0_0_30px_hsl(var(--glow-accent)/0.6)]",
      secondary: "border-secondary hover:shadow-[0_0_30px_hsl(var(--glow-secondary)/0.6)]",
      "neon-green": "border-neon.green hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.6)]"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  const getIconColor = (color: string) => {
    const styles = {
      neon: "text-primary",
      accent: "text-accent",
      secondary: "text-secondary",
      "neon-green": "text-neon.green"
    };
    return styles[color as keyof typeof styles] || styles.neon;
  };

  return (
    <section id="certificates" className="py-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">_certificates</span>
            <span className="text-accent-neon">.achievements</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 ${getCardStyle(cert.color)} transition-all duration-300 hover:scale-105 relative overflow-hidden group`}
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-current to-transparent opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-card ${
                    cert.color === 'neon' ? 'border border-primary/30' :
                    cert.color === 'accent' ? 'border border-accent/30' :
                    cert.color === 'secondary' ? 'border border-secondary/30' :
                    'border border-neon.green/30'
                  }`}>
                    <Award className={`h-6 w-6 ${getIconColor(cert.color)}`} />
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className={`h-4 w-4 ${getIconColor(cert.color)}`} />
                  </Button>
                </div>

                <h3 className="text-lg font-bold font-pixel text-foreground mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`text-sm font-pixel ${getIconColor(cert.color)}`}>
                    {cert.issuer}
                  </span>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs">{cert.date}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 text-xs rounded-full font-pixel border ${
                        cert.color === 'neon' ? 'bg-primary/10 text-primary border-primary/30' :
                        cert.color === 'accent' ? 'bg-accent/10 text-accent border-accent/30' :
                        cert.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/30' :
                        'bg-neon.green/10 text-neon.green border-neon.green/30'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold font-pixel text-neon mb-2">7+</div>
            <div className="text-muted-foreground text-sm">Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-pixel text-accent mb-2">5</div>
            <div className="text-muted-foreground text-sm">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-pixel text-secondary mb-2">2024</div>
            <div className="text-muted-foreground text-sm">Latest Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-pixel text-neon.green mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;