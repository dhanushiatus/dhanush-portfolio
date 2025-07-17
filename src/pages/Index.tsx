import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import codingSetup from "@/assets/coding-setup.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Services />
        <Projects />
        
        {/* Coding Setup Image Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden neon-glow">
              <img
                src={codingSetup}
                alt="Coding Setup"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold font-pixel text-neon mb-2">
                  My Development Environment
                </h3>
                <p className="text-muted-foreground">
                  Where the magic happens - crafting code in a retro-tech setup
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
