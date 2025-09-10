import { Calendar, MapPin, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: 'Internships', value: '2' },
    { icon: Users, label: 'Projects Completed', value: '2+' },
    { icon: Award, label: 'Certifications', value: '1' },
    { icon: MapPin, label: 'Based In', value: 'Rajkot' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 royal-header">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-elegant">
              Aspiring developer with a passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 scroll-reveal">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate Computer Engineering student pursuing B.Tech from VVP Engineering College, Rajkot. 
                  My journey began with a diploma in Computer Engineering from AVPTI, Rajkot, which sparked my 
                  interest in web development and modern technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have gained practical experience through internships at Ethics Technocrates (PHP development) 
                  and Jayshree Software (Vue.js and PHP development). I'm constantly learning and building projects 
                  to strengthen my skills in full-stack development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and applying theoretical knowledge to real-world projects. 
                  My goal is to create efficient, user-friendly applications that solve real problems.
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
            <h3 className="text-2xl font-serif font-semibold text-center mb-8 text-primary">Technologies I Love</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'PHP', 'Vue.js', 'JavaScript', 'HTML/CSS', 'MySQL', 
                'React', 'Node.js', 'Git', 'Bootstrap', 'REST APIs'
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