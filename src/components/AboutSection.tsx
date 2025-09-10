import { Calendar, MapPin, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Happy Clients', value: '30+' },
    { icon: MapPin, label: 'Based In', value: 'NYC' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 scroll-reveal">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate full-stack developer with over 5 years of experience crafting 
                  digital solutions that make a difference. My journey began with a curiosity for 
                  how things work, which evolved into a deep love for coding and problem-solving.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in modern web technologies and have a keen eye for user experience 
                  design. When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the dev community.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating applications that 
                  not only work perfectly but also provide an exceptional user experience.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 scroll-reveal">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-16 scroll-reveal">
            <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Love</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
                'AWS', 'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS'
              ].map((tech, index) => (
                <div
                  key={index}
                  className="glass-card px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;