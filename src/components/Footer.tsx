import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nithinreddaboina/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/your-username', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:nithin@example.com';
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Nithin</h3>
            <p className="text-muted-foreground">Building the future, one line of code at a time</p>
          </div>
          
          {/* Center - Social links */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={openLinkedIn}
              className="hover:bg-primary/10 hover:text-primary transition-smooth"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={openGitHub}
              className="hover:bg-primary/10 hover:text-primary transition-smooth"
            >
              <Github className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={openEmail}
              className="hover:bg-primary/10 hover:text-primary transition-smooth"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Right side - Copyright */}
          <div className="text-center md:text-right text-muted-foreground">
            <p className="flex items-center justify-center md:justify-end space-x-1">
              {/* <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Nithin</span> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};