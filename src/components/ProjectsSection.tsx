import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: 'Full-featured online shopping platform',
      longDescription: 'Complete e-commerce solution with product catalog, shopping cart, user authentication, and order management. Built during my learning journey to understand full-stack development.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: '🛒',
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rushitharsoda',
      featured: true
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather tracking app',
      longDescription: 'Interactive weather application that provides current weather conditions, forecasts, and location-based weather data using weather APIs. Features responsive design and intuitive user interface.',
      technologies: ['JavaScript', 'Weather API', 'HTML', 'CSS', 'Bootstrap'],
      image: '🌤️',
      liveUrl: 'https://weather.example.com',
      githubUrl: 'https://github.com/rushitharsoda',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my best work and innovative solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="project-card group scroll-reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  <div className="relative mb-6 h-48 rounded-lg bg-gradient-card flex items-center justify-center text-6xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-hero opacity-20" />
                    <span className="relative z-10">{project.image}</span>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl && (
                        <Button size="sm" className="btn-hero">
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="btn-ghost">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-semibold text-center mb-8">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-card flex items-center justify-center text-2xl mb-3">
                      {project.image}
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.liveUrl && (
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 scroll-reveal">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to collaborate on innovative projects and bring ideas to life.
              </p>
              <Button className="btn-hero">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
