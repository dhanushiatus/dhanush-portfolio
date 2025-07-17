import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "dhanushhiatus@gmail.com",
      link: "mailto:dhanushhiatus@gmail.com",
      color: "neon"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+94 77 894 7790",
      link: "tel:+94778947790",
      color: "accent"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Jagapathy Dhanushkar",
      link: "https://linkedin.com/in/jagapathy-dhanushkar",
      color: "secondary"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "dhanushiatus",
      link: "https://github.com/dhanushiatus",
      color: "neon-green"
    }
  ];

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
    <section id="contact" className="py-20 scan-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel mb-4">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">_contact</span>
            <span className="text-accent-neon">.connect</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life. I'm always excited to work on innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-neon neon-glow">
              <h3 className="text-2xl font-bold font-pixel text-accent-neon mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently available for freelance projects, full-time opportunities, 
                and collaboration on exciting ventures. Whether you need a full-stack developer, 
                Android app developer, or data science consultant, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/10 transition-colors duration-300 group"
                  >
                    <div className={`p-2 rounded-lg border ${getIconStyle(info.color)} group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-pixel text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Terminal-style Quick Connect */}
            <Card className="p-6 bg-card/50 border-accent accent-glow">
              <div className="font-pixel">
                <div className="text-accent mb-2">$ ./quick_connect.sh</div>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>{">"} Initializing connection protocols...</div>
                  <div>{">"} Email: ACTIVE ✓</div>
                  <div>{">"} Phone: ACTIVE ✓</div>
                  <div>{">"} Social: ACTIVE ✓</div>
                  <div className="text-neon.green">{">"} Ready to receive your message!</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card/50 border-secondary">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/20 text-secondary border border-secondary/30">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-pixel text-secondary-neon">
                Send Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-pixel text-accent mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-muted/10 border-border focus:border-neon"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-pixel text-accent mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-muted/10 border-border focus:border-neon"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-pixel text-accent mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion, collaboration, etc."
                  className="bg-muted/10 border-border focus:border-neon"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-pixel text-accent mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, requirements, timeline, or any questions you have..."
                  rows={6}
                  className="bg-muted/10 border-border focus:border-neon resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full neon-glow font-pixel text-lg py-6"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/5 rounded-lg border border-muted/20">
              <div className="text-xs font-pixel text-muted-foreground text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <MapPin className="h-3 w-3" />
                  <span>Based in Sri Lanka</span>
                </div>
                <div>Response time: Usually within 24 hours</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;