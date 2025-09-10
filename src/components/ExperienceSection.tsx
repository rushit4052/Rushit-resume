import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: 'Web Development Intern',
      company: 'Jayshree Software',
      location: 'Rajkot, Gujarat',
      period: '2 Months',
      description: [
        'Developed dynamic web applications using Vue.js framework',
        'Worked on backend development with PHP for database operations',
        'Collaborated with team members on real-world client projects',
        'Gained hands-on experience in full-stack development workflow'
      ],
      technologies: ['Vue.js', 'PHP', 'MySQL', 'HTML', 'CSS']
    },
    {
      title: 'PHP Development Intern',
      company: 'Ethics Technocrates',
      location: 'Rajkot, Gujarat',
      period: '15 Days',
      description: [
        'Introduction to server-side development with PHP',
        'Learned database integration and CRUD operations',
        'Built basic web applications with PHP and MySQL',
        'Understanding of web development fundamentals'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
    }
  ];

  const education = [
    {
      degree: 'B.Tech Computer Engineering',
      school: 'VVP Engineering College',
      location: 'Rajkot, Gujarat',
      period: 'Currently Pursuing',
      achievements: ['Active in coding clubs', 'Participated in hackathons', 'Strong academic performance']
    },
    {
      degree: 'Diploma in Computer Engineering',
      school: 'AVPTI',
      location: 'Rajkot, Gujarat',
      period: 'Completed',
      achievements: ['Foundation in programming', 'Web development basics', 'Database management']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-8 scroll-reveal">Professional Experience</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-accent" />
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-12 scroll-reveal"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-hero border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      
                      <div className="glass-card p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-primary mb-1">{exp.title}</h4>
                            <p className="text-lg font-medium">{exp.company}</p>
                          </div>
                          <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                            <div className="flex items-center md:justify-end mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center md:justify-end">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-1.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
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
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="scroll-reveal">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="glass-card p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                      <p className="font-medium mb-2">{edu.school}</p>
                      <div className="text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="scroll-reveal">
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  {[
                    'Tata Job Simulation Certificate by Forge'
                  ].map((cert, index) => (
                    <div key={index} className="glass-card p-4 flex items-center justify-between">
                      <span className="font-medium">{cert}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;