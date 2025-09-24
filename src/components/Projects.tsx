import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SocialSphere",
      description: "A comprehensive social media application built with Django, featuring secure user authentication, post creation and management, real-time messaging system, and friend connection capabilities. Implements modern web security practices and responsive design.",
      technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/mahendra-135/social_media_website",
      features: [
        "Secure user authentication & authorization",
        "Post creation with image uploads",
        "Real-time messaging system",
        "Friend request and connection system",
        "Responsive UI design"
      ]
    },
    {
      title: "Bone Injury Detection",
      description: "An AI-powered medical imaging system that analyzes X-ray images to detect and classify bone injuries. Built using MobileNet for feature extraction and Random Forest for classification, achieving high accuracy in medical diagnosis assistance.",
      technologies: ["TensorFlow", "OpenCV", "MobileNet", "Random Forest", "Python", "scikit-learn"],
      category: "AI/ML",
      status: "Completed",
      features: [
        "X-ray image preprocessing and enhancement",
        "MobileNet-based feature extraction",
        "Random Forest classification model",
        "High accuracy injury detection",
        "Medical imaging pipeline"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-secondary section-container">
      <div className="container mx-auto px-4 section-content">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent">My Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise and problem-solving abilities through 
            real-world applications that demonstrate innovation and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="premium-card hover-lift group animate-fade-in" style={{animationDelay: `${index * 0.3}s`}}>
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold text-foreground group-hover:gradient-text transition-all duration-500 mb-4">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="bg-gradient-primary text-white font-semibold px-4 py-1">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent/30 bg-accent/10 font-medium">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Enhanced Key Features */}
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies */}
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 bg-card/60 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="flex-1 glow-button"
                    onClick={() => project.github && window.open(project.github, '_blank')}
                    disabled={!project.github}
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-accent/30 hover:border-accent hover:bg-accent/10">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground">
              Explore my complete portfolio on GitHub and discover additional projects, 
              contributions, and ongoing experiments.
            </p>
          </div>
          <Button variant="hero" size="xl" className="glow-button" onClick={() => window.open('https://github.com/mahendra-135', '_blank')}>
            <Github className="w-5 h-5" />
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;