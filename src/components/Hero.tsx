import { Github, Linkedin, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Data scientist", "Data analyst", "Android developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [hackerText, setHackerText] = useState("");
  const targetText = "hacker";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setHackerText(targetText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return targetText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join(""));
      
      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="font-pixel text-sm text-muted-foreground">
              // {hackerText}
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-foreground">{"{ "}</span>
                <span className="text-neon animate-neon-pulse">"_</span>
                <span className="text-accent-neon">Data Science</span>
                <span className="text-neon animate-neon-pulse">" {"}"}</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="text-foreground">{"{ "}</span>
                <span className="text-secondary-neon transition-all duration-500">
                  "__{roles[currentRoleIndex]}"
                </span>
                <span className="text-foreground">" {"}"}</span>
              </h2>
            </div>

            <div className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate developer focused on building impactful web and mobile applications. 
              Experienced in Data Science, MERN stack, Java, Android, and open-source contributions.
              Currently pursuing BSc in IT specializing in Data Science at SLIIT.
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="neon-glow font-pixel"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-accent accent-glow font-pixel"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/in/jagapathy-dhanushkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/dhanushiatus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-neon neon-glow overflow-hidden animate-float">
                <img
                  src="/lovable-uploads/3fa19740-fc70-488a-bef7-ba4a6fd882f3.png"
                  alt="Jagapathy Dhanushkar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon.green rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;