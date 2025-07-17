import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      year: "2024-2027",
      institution: "SLIIT",
      degree: "BSc in IT specializing in Data Science",
      status: "Expected 2027",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: "2022-2023",
      institution: "ESOFT Metro Campus",
      degree: "Diploma in IT & English",
      status: "Completed",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: "2019-2021",
      institution: "Highlands College",
      degree: "A/L in Physical Science",
      status: "Completed",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">_about</span>
            <span className="text-accent-neon">.me</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-neon neon-glow">
              <h3 className="text-2xl font-bold text-accent-neon mb-4 font-pixel">Personal Bio</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Jagapathy Dhanushkar, an aspiring Data Scientist and passionate developer 
                  with a strong foundation in full-stack web and Android development. Currently pursuing 
                  my BSc in IT specializing in Data Science at SLIIT, expected to graduate in 2027.
                </p>
                <p>
                  My journey in technology began with web development, and I've since expanded into 
                  mobile app development, data science, and machine learning. I love solving complex 
                  problems and building applications that make a real impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or working on innovative solutions that bridge the gap 
                  between data science and practical applications.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-accent accent-glow">
              <h3 className="text-2xl font-bold text-secondary-neon mb-4 font-pixel">Career Goals</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon.green rounded-full"></div>
                  <span>Become a proficient Data Scientist with expertise in ML/AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Lead innovative projects that combine data science with web/mobile development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Contribute to open-source communities and mentor aspiring developers</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div>
            <Card className="p-6 bg-card/50 border-secondary">
              <h3 className="text-2xl font-bold text-neon mb-6 font-pixel">Education Timeline</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-card border-2 border-neon rounded-full flex items-center justify-center neon-glow">
                          {edu.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="text-sm font-pixel text-accent">{edu.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-pixel ${
                          edu.status === 'Completed' 
                            ? 'bg-neon.green/20 text-neon.green border border-neon.green/30' 
                            : 'bg-accent/20 text-accent border border-accent/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    {index < education.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-16 bg-gradient-to-b from-neon via-accent to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;