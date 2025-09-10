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
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features',
      longDescription: 'Full-featured e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: '🛒',
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics with machine learning insights',
      longDescription: 'Comprehensive analytics dashboard featuring real-time data visualization, predictive analytics, and AI-driven insights for business decision making.',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'MongoDB'],
      image: '📊',
      liveUrl: 'https://analytics.example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management solution',
      longDescription: 'Team collaboration platform with task tracking, file sharing, real-time chat, and project timeline management. Perfect for remote teams.',
      technologies: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
      image: '📋',
      liveUrl: 'https://tasks.example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      title: 'Social Media App',
      description: 'Next-generation social networking platform',
      longDescription: 'Modern social media platform with real-time messaging, story features, advanced privacy controls, and content recommendation algorithms.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
      image: '📱',
      liveUrl: 'https://social.example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto portfolio management',
      longDescription: 'Comprehensive cryptocurrency tracking application with portfolio management, price alerts, market analysis, and trading recommendations.',
      technologies: ['Vue.js', 'Express', 'CoinGecko API', 'Chart.js'],
      image: '₿',
      liveUrl: 'https://crypto.example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'Online education platform with video streaming',
      longDescription: 'Complete LMS with course creation, video streaming, progress tracking, quiz system, and instructor dashboard for online education.',
      technologies: ['React', 'Node.js', 'AWS S3', 'Stripe', 'WebRTC'],
      image: '🎓',
      liveUrl: 'https://learn.example.com',
      githubUrl: 'https://github.com/example',
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
