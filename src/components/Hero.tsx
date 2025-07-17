import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
const profileImage = "/lovable-uploads/9d9a19aa-eb34-43ca-b271-f8f333c58e80.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Section */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Mahendra Reddy</span>
                <br />
                <span className="text-foreground">Mandireddy</span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl text-accent font-semibold">
                  AI & ML Enthusiast | Python Developer
                </h2>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                  "Solving real-world problems through AI, data, and clean code."
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1oW23oNVWDapJ0-pqZYzOKdYX3JCcvRt-', '_blank')}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('https://github.com/mahendra-135', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.linkedin.com/in/mandireddy-mahendra-reddy', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large">
                <img 
                  src={profileImage} 
                  alt="Mahendra Reddy Mandireddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl scale-110"></div>
              
              {/* Floating skills tags */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-float">
                <span className="text-sm font-medium text-primary">AI/ML</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full animate-float" style={{animationDelay: '1.5s'}}>
                <span className="text-sm font-medium text-accent">PYTHON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;