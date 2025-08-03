import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

// Placeholder projects - you'll replace these with your actual projects
const projects = [
  {
    title: 'IndianNewsHub – Real-Time News App ',
    description: 'A responsive React + Vite app that delivers real-time, location-based, and keyword-filtered news using the NewsData.io API. It features a clean UI, drag-to-refresh, and easy filtering, helping users quickly access relevant and personalized updates.',
    technologies: [ 'React', 'API', 'Bootstrap'],
    liveDemo: 'https://newshubindia.netlify.app',
    githubRepo: 'https://github.com/nithin716/IndianNewsHub',
    image: <img src="/Images/News.png" alt="News" />

  },
  {
    title: 'BlogSphere',
    description: 'A responsive blogging platform built with React, Vite, and React Router, allowing users to explore and read individual blogs from a dynamic list. Blogs are rendered using mock data, and the site supports smooth navigation with routing, hooks, and a clean Bootstrap-styled UI, making content easy to browse and visually engaging.',
    technologies: [ 'Bootsrap', 'React', 'Data'],
    liveDemo: 'https://myblogzone.netlify.app/',
    githubRepo: 'https://github.com/nithin716/Blogging-website',
    image:  <img src="/Public/Images/News.png" alt="" />
  },
 
];

export const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const openLiveDemo = (url: string) => {
    window.open(url, '_blank');
  };

  const openGithubRepo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`warm-card hover:soft-shadow transition-smooth group cursor-pointer h-full ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-card rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-smooth">
                      🚀
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl mb-3 group-hover:gradient-text transition-smooth">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-secondary text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3 mt-auto">
                <Button 
                  onClick={() => openLiveDemo(project.liveDemo)}
                  className="flex-1 soft-shadow hover:soft-shadow-accent transition-smooth"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => openGithubRepo(project.githubRepo)}
                  className="flex-1 warm-card hover:soft-shadow transition-smooth"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};