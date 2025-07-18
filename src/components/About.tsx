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
    <section id="about" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text-rainbow">Me</span> 🌟
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-xl text-muted-foreground">
            <p className="leading-relaxed font-light">
              💫 I'm a B.Tech graduate in Artificial Intelligence & Machine Learning with a passion for building 
              intelligent, scalable systems that make an impact. I blend creativity, logic, and adaptability 
              to bring ideas to life.
            </p>
            <p className="leading-relaxed font-light">
              🚀 My journey in technology is driven by curiosity and the desire to solve real-world problems 
              through innovative AI solutions and clean, efficient code.
            </p>
          </div>
        </div>

        {/* Ultra-Attractive Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={skill.category} className="floating-card card-hover group animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 shadow-glow">
                  <skill.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 gradient-text">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <Badge 
                      key={item} 
                      className="tech-tag block text-base py-2 font-semibold hover:scale-105 transition-all duration-300" 
                      style={{animationDelay: `${(index * 0.1) + (itemIndex * 0.05)}s`}}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ultra-Vibrant Soft Skills */}
        <div className="text-center">
          <h3 className="text-3xl font-display font-bold mb-12 gradient-text-accent">✨ Soft Skills ✨</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => (
              <Card key={skill.name} className="floating-card hover:scale-110 hover:shadow-rainbow transition-all duration-700 animate-scale-in bg-gradient-card" style={{animationDelay: `${0.5 + index * 0.15}s`}}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center shadow-electric">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-lg gradient-text">{skill.name}</span>
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