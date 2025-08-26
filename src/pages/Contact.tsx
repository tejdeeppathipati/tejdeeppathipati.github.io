import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';
import siteData from '@/content/site.json';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or use the email link below.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-gradient p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-white/20 focus:border-primary focus-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-white/20 focus:border-primary focus-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-white/20 focus:border-primary focus-ring"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-white/20 focus:border-primary focus-ring resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-gradient p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Other Ways to Connect
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                        <a href={`mailto:${siteData.emailPublic}`}>
                          {siteData.emailPublic}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-muted-foreground mb-4">
                      You can also find me on:
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="border-white/20 hover:border-primary/50" asChild>
                        <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/20 hover:border-primary/50" asChild>
                        <a href={siteData.social.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-medium text-primary mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. For urgent inquiries, feel free to connect with me on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;