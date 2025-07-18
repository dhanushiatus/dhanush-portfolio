import { GraduationCap, Calendar, MapPin, Briefcase, Code, Database, User } from "lucide-react";
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

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Freelancer",
      type: "Part Time",
      period: "2024 - Present",
      icon: <Code className="h-5 w-5" />,
      responsibilities: [
        "Designed and developed responsive web applications using React.js, Node.js, and MongoDB.",
        "Collaborated with cross-functional teams to deliver scalable solutions within tight deadlines."
      ]
    },
    {
      title: "Android Developer",
      company: "Freelancer", 
      type: "Part Time",
      period: "2024 - Present",
      icon: <Briefcase className="h-5 w-5" />,
      responsibilities: [
        "Designed and built intuitive Android applications using Kotlin and Java in Android Studio.",
        "Integrated APIs and third-party libraries such as Firebase, Google Maps, and Retrofit for extended app functionality.",
        "Collaborated with UI/UX designers to implement user-friendly interfaces and improve user experience."
      ]
    },
    {
      title: "Data Entry",
      company: "Freelancer",
      type: "Part Time",
      period: "2018 - 2019",
      icon: <Database className="h-5 w-5" />,
      responsibilities: [
        "Verified data for completeness and accuracy, correcting errors and inconsistencies where necessary",
        "Maintained confidentiality of sensitive information and adhered to data protection policies",
        "Managed multiple data entry projects while meeting strict deadlines and ensuring high quality standards"
      ]
    }
  ];

  const capabilities = [
    "Expert in designing intuitive, user-focused digital experiences",
    "Skilled in creating impactful, user-centered design solutions",
    "Proficient in developing seamless and engaging user experiences",
    "Specialized in building design solutions that prioritize user needs",
    "Focused on delivering thoughtful, human-centered design strategies"
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-neon neon-glow">
              <h3 className="text-2xl font-bold text-accent-neon mb-4 font-pixel">Personal Bio</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a third-year Data Science undergraduate at SLIIT with a strong foundation in Python, Java, and R. I have hands-on experience in web and mobile development, and I'm passionate about transforming data into insights and building impactful digital solutions. I'm currently seeking internship opportunities to apply my skills and grow within the tech and data science communities.
                </p>
                <p>
                  Throughout my academic journey, I've faced challenges like mastering complex algorithms, adapting to new technologies, and managing real-world project constraints. I approach each challenge with a problem-solving mindset, continuous learning, and a hands-on, iterative process—ensuring every solution is both effective and scalable.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-accent accent-glow">
              <h3 className="text-2xl font-bold text-secondary-neon mb-4 font-pixel">CAPABILITIES</h3>
              <div className="space-y-3 text-muted-foreground">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Experience */}
          <div>
            <Card className="p-6 bg-card/50 border-secondary">
              <h3 className="text-2xl font-bold text-secondary-neon mb-6 font-pixel">EXPERIENCE</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-card border-2 border-secondary rounded-full flex items-center justify-center">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-pixel text-secondary">{exp.period}</span>
                          <span className="text-xs font-pixel text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                          <User className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <div key={respIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {index < experience.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-20 bg-gradient-to-b from-secondary via-accent to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div>
            <Card className="p-6 bg-card/50 border-neon neon-glow">
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