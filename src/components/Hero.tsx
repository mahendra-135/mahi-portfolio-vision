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
                onClick={() => {
                  // Direct view link for Google Drive file
                  const resumeUrl = 'https://drive.google.com/file/d/1oW23oNVWDapJ0-pqZYzOKdYX3JCcvRt-/view?usp=sharing';
                  window.open(resumeUrl, '_blank');
                }}
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
            <div className="relative group">
              {/* Rotating neon ring */}
              <div className="absolute -inset-6 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-foreground via-transparent to-foreground bg-clip-border shadow-glow opacity-60"></div>
              </div>
              
              {/* Second rotating ring for enhanced effect */}
              <div className="absolute -inset-4 rounded-full animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}>
                <div className="w-full h-full rounded-full border-2 border-foreground/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
              </div>
              
              {/* Main profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <img 
                  src={profileImage} 
                  alt="Mahendra Reddy Mandireddy"
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced floating skills tags */}
              <div className="absolute -top-6 -right-6 glass-card px-6 py-3 rounded-full animate-float shadow-medium group-hover:shadow-large transition-all duration-300">
                <span className="text-sm font-bold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI/ML</span>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card px-6 py-3 rounded-full animate-float shadow-medium group-hover:shadow-large transition-all duration-300" style={{animationDelay: '1.5s'}}>
                <span className="text-sm font-bold text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">PYTHON</span>
              </div>
              <div className="absolute top-1/2 -left-8 glass-card px-4 py-2 rounded-full animate-float shadow-medium transition-all duration-300" style={{animationDelay: '2.5s'}}>
                <span className="text-xs font-medium text-foreground">DATA</span>
              </div>
              <div className="absolute top-1/4 -right-8 glass-card px-4 py-2 rounded-full animate-float shadow-medium transition-all duration-300" style={{animationDelay: '3s'}}>
                <span className="text-xs font-medium text-foreground">CODE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;