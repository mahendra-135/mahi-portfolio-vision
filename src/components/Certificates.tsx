import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Work Ready Certification",
      issuer: "Beep (Shark Tank India)",
      date: "16/07/25",
      image: "/lovable-uploads/6aa6b05a-aa57-4af0-9107-c62feeca8f68.png",
      description: "Work Ready Programs completion certificate recognizing valuable engagement and contribution during the event.",
      category: "Professional Development"
    },
    {
      id: 2,
      title: "Generative AI for Beginners",
      issuer: "Simplilearn SkillUp",
      date: "3rd July 2025",
      image: "/lovable-uploads/1f4a801b-9006-48a5-b348-c8b6b5a8c2f3.png",
      description: "Professional certification demonstrating initiative and commitment to deepening AI skills.",
      category: "Artificial Intelligence",
      certificateCode: "8564038"
    },
    {
      id: 3,
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON (Tata Consultancy Services)",
      date: "29 Jun 2025 - 13 Jul 2025",
      image: "/lovable-uploads/7c4864f6-9f88-401b-8c4a-be79929f8809.png",
      description: "Comprehensive course covering Communication Skills, Presentation Skills, Soft Skills, Career Guidance, Resume Writing, and more.",
      category: "Professional Skills"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my commitment to continuous learning and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="glass-card hover:shadow-large transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                  <Badge variant="secondary" className="mx-auto">
                    {cert.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center glass-card p-6 rounded-lg">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <p className="text-muted-foreground">Professional Certificates</p>
          </div>
          <div className="text-center glass-card p-6 rounded-lg">
            <div className="text-3xl font-bold gradient-text mb-2">AI/ML</div>
            <p className="text-muted-foreground">Specialized Focus</p>
          </div>
          <div className="text-center glass-card p-6 rounded-lg">
            <div className="text-3xl font-bold gradient-text mb-2">2025</div>
            <p className="text-muted-foreground">Latest Certification</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;