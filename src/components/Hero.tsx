import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
const profileImage = "/profile-image.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero section-container relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute -bottom-12 -left-12 w-[32rem] h-[32rem] bg-accent/15 rounded-full blur-3xl animate-float-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl animate-pulse-glow" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10 section-content">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Section */}
          <div className="flex-1 space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-primary/10 border border-primary/20 rounded-full">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Available for opportunities</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="gradient-text block">Mahendra Reddy</span>
                  <span className="text-foreground block">Mandireddy</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
                  AI & ML Specialist
                </h2>
                <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                  Passionate Computer Science graduate specialized in Artificial Intelligence and Machine Learning. 
                  Building intelligent solutions with <span className="text-primary font-semibold">Python</span>, 
                  <span className="text-accent font-semibold"> Django</span>, and cutting-edge AI technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group glow-button"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                className="premium-card"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Mahiresume.pdf';
                  link.download = 'Mahendra_Reddy_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <span className="text-sm font-medium text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:scale-110 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300"
                  onClick={() => window.open('https://github.com/mahendra-135', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:scale-110 hover:bg-accent/10 hover:border-accent/20 border border-transparent transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/-mahendra', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:scale-110 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex-shrink-0 animate-scale-in lg:pl-8" style={{animationDelay: '0.4s'}}>
            <div className="relative group">
              {/* Enhanced rotating rings */}
              <div className="absolute -inset-4 rounded-full animate-spin-slow opacity-60">
                <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-primary bg-clip-border shadow-glow"></div>
              </div>
              
              <div className="absolute -inset-2 rounded-full animate-spin-slow opacity-40" style={{animationDirection: 'reverse', animationDuration: '16s'}}>
                <div className="w-full h-full rounded-full border-2 border-accent/60 shadow-premium"></div>
              </div>
              
              {/* Main profile image with enhanced styling */}
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden shadow-premium border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-700 premium-card">
                <img 
                  src={profileImage} 
                  alt="Mahendra Reddy Mandireddy - AI & ML Specialist"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              {/* Enhanced floating skills tags */}
              <div className="absolute -top-8 -right-8 premium-card px-6 py-4 rounded-2xl float-gentle shadow-premium group-hover:shadow-glow transition-all duration-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold gradient-text">AI & ML</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 premium-card px-6 py-4 rounded-2xl float-gentle shadow-premium group-hover:shadow-glow transition-all duration-500" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold gradient-text">PYTHON</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;