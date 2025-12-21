import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since no backend, just show success message
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Contact
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just connecting with fellow product people.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="opacity-0 animate-fade-in">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Let's connect
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a product leader for your team, 
                want to discuss a potential collaboration, or just want to 
                chat about product management, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:jennifer-rumery@outlook.com"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      jennifer-rumery@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/jennifer-rumery/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/jennifer-rumery/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                      Location
                    </h3>
                    <p className="font-body text-muted-foreground">
                      San Francisco, CA (Open to remote)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-lg p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Send a message
                </h2>

                <div className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="font-body text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-1.5 font-body"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-body text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="mt-1.5 font-body"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="font-body text-sm">
                      Company (optional)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="mt-1.5 font-body"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-body text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      required
                      className="mt-1.5 font-body resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full font-body">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
