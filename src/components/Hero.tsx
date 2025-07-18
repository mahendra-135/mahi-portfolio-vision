import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
const profileImage = "/lovable-uploads/9d9a19aa-eb34-43ca-b271-f8f333c58e80.png";

const Hero = () => {
  return (
    <section className="min-h-screen hero-background relative overflow-hidden">
      {/* Ultra-Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float pulsing-glow"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float pulsing-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-success/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Section */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-display font-black leading-tight">
                <span className="gradient-text-rainbow">Mahendra Reddy</span>
                <br />
                <span className="gradient-text">Mandireddy</span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl gradient-text-accent font-bold">
                  🚀 AI & ML Enthusiast | Python Developer
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                  ✨ "Solving real-world problems through AI, data, and clean code."
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button 
                className="glow-button text-lg px-8 py-4 rounded-2xl font-bold text-white shadow-electric hover:shadow-rainbow transition-all duration-700"
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                🎯 View My Projects
              </Button>
              
              <Button 
                className="accent-button text-lg px-8 py-4 rounded-2xl font-bold text-white shadow-accent-glow hover:shadow-electric transition-all duration-700"
                size="lg"
                onClick={() => {
                  const resumeUrl = 'https://drive.google.com/file/d/1oW23oNVWDapJ0-pqZYzOKdYX3JCcvRt-/view?usp=sharing';
                  window.open(resumeUrl, '_blank');
                }}
              >
                <Download className="w-6 h-6 mr-2" />
                📄 Download Resume
              </Button>
              
              <Button 
                className="fire-button text-lg px-8 py-4 rounded-2xl font-bold text-white shadow-glow hover:shadow-rainbow transition-all duration-700"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-6 h-6 mr-2" />
                💬 Let's Connect
              </Button>
            </div>

            {/* Ultra-Attractive Social Links */}
            <div className="flex gap-6 pt-6">
              <Button 
                className="w-16 h-16 rounded-full bg-gradient-electric shadow-electric hover:shadow-rainbow transition-all duration-700 hover:scale-125 hover:-translate-y-2"
                size="icon" 
                onClick={() => window.open('https://github.com/mahendra-135', '_blank')}
              >
                <Github className="w-8 h-8 text-white" />
              </Button>
              <Button 
                className="w-16 h-16 rounded-full bg-gradient-accent shadow-accent-glow hover:shadow-electric transition-all duration-700 hover:scale-125 hover:-translate-y-2"
                size="icon" 
                onClick={() => window.open('https://www.linkedin.com/in/mandireddy-mahendra-reddy', '_blank')}
              >
                <Linkedin className="w-8 h-8 text-white" />
              </Button>
              <Button 
                className="w-16 h-16 rounded-full bg-gradient-fire shadow-glow hover:shadow-rainbow transition-all duration-700 hover:scale-125 hover:-translate-y-2"
                size="icon" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-8 h-8 text-white" />
              </Button>
            </div>
          </div>

          {/* Ultra-Attractive Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-rainbow hover:shadow-electric transition-all duration-700 hover:scale-105">
                <img 
                  src={profileImage} 
                  alt="Mahendra Reddy Mandireddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Ultra-Vibrant Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-rainbow opacity-30 blur-2xl scale-110 animate-pulse"></div>
              
              {/* Enhanced Floating skills tags */}
              <div className="absolute -top-6 -right-6 floating-card px-6 py-3 rounded-2xl">
                <span className="text-lg font-bold gradient-text">🤖 AI/ML</span>
              </div>
              <div className="absolute -bottom-6 -left-6 floating-card px-6 py-3 rounded-2xl" style={{animationDelay: '1.5s'}}>
                <span className="text-lg font-bold gradient-text-accent">🐍 PYTHON</span>
              </div>
              <div className="absolute top-10 -left-8 floating-card px-4 py-2 rounded-2xl" style={{animationDelay: '2.5s'}}>
                <span className="text-sm font-bold text-success">💡 INNOVATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;