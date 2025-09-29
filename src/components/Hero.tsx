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

          {/* Enhanced Profile Image with Advanced Effects */}
          <div className="flex-shrink-0 animate-scale-in lg:pl-8" style={{animationDelay: '0.4s'}}>
            <div className="relative group">
              {/* Orbital rotating rings with different speeds */}
              <div className="absolute -inset-8 rounded-full animate-spin opacity-20" style={{animationDuration: '20s'}}>
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/50"></div>
              </div>
              
              <div className="absolute -inset-6 rounded-full animate-spin opacity-40" style={{animationDirection: 'reverse', animationDuration: '15s'}}>
                <div className="w-full h-full rounded-full border-2 border-accent/40"></div>
              </div>
              
              <div className="absolute -inset-4 rounded-full animate-spin opacity-60" style={{animationDuration: '12s'}}>
                <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-primary bg-clip-border shadow-glow"></div>
              </div>
              
              <div className="absolute -inset-2 rounded-full animate-spin opacity-50" style={{animationDirection: 'reverse', animationDuration: '8s'}}>
                <div className="w-full h-full rounded-full border-2 border-primary-glow/60 shadow-premium"></div>
              </div>
              
              {/* Pulsing halo effect */}
              <div className="absolute -inset-12 rounded-full animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-radial from-primary/10 via-accent/5 to-transparent"></div>
              </div>
              
              {/* Main profile image with enhanced styling */}
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden shadow-premium border-4 border-primary/30 group-hover:border-primary/80 group-hover:shadow-glow transition-all duration-700 premium-card hover-lift">
                <img 
                  src={profileImage} 
                  alt="Mahendra Reddy Mandireddy - AI & ML Specialist"
                  className="w-full h-full object-cover object-[center_20%] transform group-hover:scale-110 transition-all duration-1000 filter group-hover:brightness-110 group-hover:contrast-110"
                />
                
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/15 opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
              
              {/* Enhanced floating skills tags with more effects */}
              <div className="absolute -top-12 -right-12 premium-card px-6 py-4 rounded-2xl float-gentle shadow-premium group-hover:shadow-glow group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 hover-lift">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold gradient-text">AI & ML</span>
                  <div className="w-2 h-2 bg-accent/60 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-12 -left-12 premium-card px-6 py-4 rounded-2xl float-gentle shadow-premium group-hover:shadow-glow group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 hover-lift" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-glow"></div>
                  <span className="text-sm font-bold gradient-text">PYTHON</span>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Additional floating tag */}
              <div className="absolute top-1/2 -right-20 premium-card px-4 py-3 rounded-xl float-gentle shadow-premium group-hover:shadow-glow group-hover:scale-105 transition-all duration-500 hover-lift" style={{animationDelay: '4s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold gradient-text">DJANGO</span>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float-gentle"
                    style={{
                      top: `${20 + (i * 15)}%`,
                      left: `${10 + (i * 12)}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${3 + (i * 0.5)}s`
                    }}
                  />
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;