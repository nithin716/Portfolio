import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration - you'll need to set this up
      await emailjs.send(
        'service_dkbp08f', // Replace with your EmailJS service ID
        'template_59rxsjs', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'nithin561@gmail.com' // Replace with your email
        },
        'xbvHVVWf6S00FRjm6' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'nithin561yadav@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '9866666732'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Khammam, Telangana,India'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-accent/30">
      <div className="max-w-6xl mx-auto section-padding">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`space-y-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="warm-card rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    className="mt-2 min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isLoading}
                  className="w-full soft-shadow hover:soft-shadow-accent transition-smooth"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="warm-card rounded-xl p-6 hover:soft-shadow transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary text-2xl">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="warm-card rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Collaborate!
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on innovative projects and help bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};