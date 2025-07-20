import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap, Users, Clock, Target, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Programming",
      icon: Code,
      items: ["Python", "Data Structures & Algorithms", "Object-Oriented Programming"]
    },
    {
      category: "AI/ML Tools",
      icon: Brain,
      items: ["scikit-learn", "TensorFlow", "OpenCV", "Machine Learning"]
    },
    {
      category: "Data Tools",
      icon: Database,
      items: ["SQL", "Power BI", "Pandas", "NumPy", "Data Analysis"]
    },
    {
      category: "Problem Solving",
      icon: Target,
      items: ["Real-world applications", "Algorithm Design", "System Debugging"]
    }
  ];

  const softSkills = [
    { name: "Quick Learner", icon: Zap },
    { name: "Leadership", icon: Users },
    { name: "Adaptability", icon: Lightbulb },
    { name: "Time Management", icon: Clock }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              I'm a B.Tech graduate in Artificial Intelligence & Machine Learning with a passion for building 
              intelligent, scalable systems that make an impact. I blend creativity, logic, and adaptability 
              to bring ideas to life.
            </p>
            <p className="leading-relaxed">
              My journey in technology is driven by curiosity and the desire to solve real-world problems 
              through innovative AI solutions and clean, efficient code.
            </p>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card key={skill.category} className="glass-card hover-lift group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary" className="block text-sm py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <Card key={skill.name} className="glass-card hover:scale-105 transition-transform animate-scale-in" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                <CardContent className="p-4 flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;