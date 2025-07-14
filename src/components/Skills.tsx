import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Skills = () => {
  const certifications = [
    {
      title: "Python 101 for Data Science",
      issuer: "IBM",
      category: "Programming",
      status: "Certified"
    },
    {
      title: "Machine Learning & Python",
      issuer: "ELITE TECHNOLOGY",
      category: "AI/ML",
      status: "Certified"
    },
    {
      title: "Java Programming",
      issuer: "HARSHA TRAINING",
      category: "Programming",
      status: "Certified"
    },
    {
      title: "Power BI Fundamentals",
      issuer: "OFFICEMASTER",
      category: "Data Analytics",
      status: "Certified"
    },
    {
      title: "Generative AI",
      issuer: "SIMPLILEARN",
      category: "AI/ML",
      status: "Certified"
    },
    {
      title: "AI Tools Workshop",
      issuer: "BE10X",
      category: "AI Tools",
      status: "Certified"
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS"],
      color: "primary"
    },
    {
      category: "AI/ML Frameworks",
      skills: ["TensorFlow", "scikit-learn", "OpenCV", "Pandas", "NumPy"],
      color: "accent"
    },
    {
      category: "Data & Analytics",
      skills: ["Power BI", "Data Analysis", "Statistical Modeling", "Data Visualization"],
      color: "primary"
    },
    {
      category: "Web Development",
      skills: ["Django", "Flask", "Bootstrap", "Responsive Design", "REST APIs"],
      color: "accent"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Programming": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "AI/ML": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Data Analytics": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "AI Tools": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and continuous learning journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.category} className="glass-card hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${category.color === 'primary' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-accent/20 text-accent border-accent/30'} hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="glass-card hover-lift group animate-scale-in" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="font-bold text-foreground leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-primary font-medium">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="outline" 
                          className={getCategoryColor(cert.category)}
                        >
                          {cert.category}
                        </Badge>
                        <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;