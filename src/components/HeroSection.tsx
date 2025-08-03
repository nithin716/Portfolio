import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/Resume.pdf'; // This works because it's in the public folder
  link.download = 'Nithin_Resume.pdf'; // Optional: rename on download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nithinreddaboina/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/nithin716', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 bg-gradient-accent"></div>
      
      <div className="max-w-6xl mx-auto section-padding grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div ref={ref} className={`space-y-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              Welcome to{' '}
              <span className="gradient-text">Nithin's Zone</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Hi, I'm Nithin – a passionate{' '}
              <span className="text-primary font-semibold">Java Fullstack Developer</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={handleResumeDownload}
              className="soft-shadow hover:soft-shadow-accent transition-smooth group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
              Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={openLinkedIn}
              className="warm-card hover:soft-shadow transition-smooth"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={openGitHub}
              className="warm-card hover:soft-shadow transition-smooth"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
        
        {/* Right Content - Photo */}
        <div className={`flex justify-center ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden warm-card p-4">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">📸</span>
                  </div>
                  <img src="/Public/Images/profile3.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};