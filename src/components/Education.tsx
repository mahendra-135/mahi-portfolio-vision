import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Artificial Intelligence & Machine Learning",
      institution: "Universal College of Engineering and Technology",
      period: "2021 – 2025",
      grade: "CGPA: 7.0",
      status: "current"
    },
    {
      degree: "Intermediate",
      institution: "Oxford Junior College",
      period: "2019 – 2021",
      grade: "CGPA: 6.4",
      status: "completed"
    },
    {
      degree: "SSC",
      institution: "Swami School",
      period: "2018 – 2019",
      grade: "88%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in technology and artificial intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="glass-card hover-lift animate-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.status === 'current' ? 'bg-gradient-primary' : 'bg-secondary'
                        }`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {item.degree}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {item.institution}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={item.status === 'current' ? 'default' : 'secondary'}
                      className="font-medium"
                    >
                      {item.grade}
                    </Badge>
                    {item.status === 'current' && (
                      <Badge variant="outline" className="text-primary border-primary">
                        In Progress
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;