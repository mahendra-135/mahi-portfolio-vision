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
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass-card hover-lift group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="default" className="bg-gradient-primary">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => project.github && window.open(project.github, '_blank')}
                    disabled={!project.github}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            <Globe className="w-5 h-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;