import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahimandireddy@gmail.com",
      href: "mailto:mahimandireddy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9505005280",
      href: "tel:+919505005280"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mandireddy-mahendra-reddy",
      href: "https://www.linkedin.com/in/-mahendra"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next AI project or discuss opportunities in machine learning and data science
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest developments in AI and machine learning. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className="animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <a 
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg glass-card hover:bg-card/70 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('https://github.com/mahendra-135', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.linkedin.com/in/-mahendra', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('mailto:mahimandireddy@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card animate-scale-in" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What would you like to discuss?" 
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or how I can help..."
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;