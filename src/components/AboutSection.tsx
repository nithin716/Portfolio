import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Zap } from 'lucide-react';

const skills = [
  {
    name: 'Java & Spring',
    icon: '☕',
  },
  {
    name: 'React & Bootstrap',
    icon: '⚛️',
  },
  {
    name: 'Database Design',
    icon: '🗄️',
  },
  {
    name: 'REST APIs',
    icon: '🌐',
  }
];

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-16 lg:py-24 bg-accent/30">
      <div className="max-w-6xl mx-auto section-padding">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I develop full-stack web applications using modern Java technologies. 
            I'm passionate about clean design and user-friendly functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="warm-card p-6 rounded-xl text-center hover:soft-shadow transition-smooth group-hover:scale-105">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 warm-card p-8 lg:p-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`} 
             style={{ animationDelay: '0.4s' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My passion for technology started early, and I've been dedicated to mastering 
                  the art of full-stack development. I believe in writing clean, maintainable code 
                  and creating applications that not only work well but also provide exceptional user experiences.
                </p>
                <p>
                  I stay current with the latest technologies and best practices, always looking 
                  for ways to improve my craft and deliver better solutions.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Java & Spring Boot</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium">React & Bootstrap</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium">Database Design</span>
                <span className="text-primary">80%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};