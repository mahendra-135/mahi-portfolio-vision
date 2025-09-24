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
    <section id="about" className="py-24 bg-gradient-secondary section-container">
      <div className="container mx-auto px-4 section-content">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            Passionate About <span className="gradient-text">Innovation</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8 text-xl text-muted-foreground">
            <p className="leading-relaxed text-2xl">
              I'm a <span className="text-primary font-semibold">B.Tech graduate</span> in Artificial Intelligence & Machine Learning 
              with an unwavering passion for building intelligent, scalable systems that create meaningful impact.
            </p>
            <p className="leading-relaxed">
              My journey in technology is fueled by <span className="text-accent font-semibold">curiosity</span> and the drive to solve 
              real-world challenges through innovative AI solutions, clean architecture, and user-centric design.
            </p>
            <p className="leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source projects, 
              or mentoring fellow developers in their journey.
            </p>
          </div>
        </div>

        {/* Enhanced Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <Card key={skill.category} className="premium-card hover-lift group animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-glow">
                    <skill.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>
                
                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <div key={item} className="animate-fade-in" style={{animationDelay: `${(index * 0.15) + (itemIndex * 0.05)}s`}}>
                      <Badge variant="secondary" className="block text-sm py-2 px-4 bg-card/60 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                        {item}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Soft Skills */}
        <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-foreground">
            Core <span className="gradient-text">Strengths</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Card key={skill.name} className="premium-card hover:scale-105 hover:shadow-glow transition-all duration-500 animate-scale-in" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-lg text-foreground">{skill.name}</span>
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