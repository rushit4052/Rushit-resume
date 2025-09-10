import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 82, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Backend' },
    { name: 'AWS/Cloud', level: 75, category: 'DevOps' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'GraphQL', level: 85, category: 'API' },
    { name: 'REST APIs', level: 90, category: 'API' },
  ];

  const categories = ['Frontend', 'Backend', 'DevOps', 'API'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, categoryIndex) => (
              <div
                key={category}
                className="glass-card p-6 scroll-reveal"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                  {category}
                </h3>
                <div className="space-y-4">
                  {getSkillsByCategory(category).map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className={`skill-progress ${isVisible ? 'animate-skill-fill' : ''}`}
                          style={{
                            '--skill-width': `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 scroll-reveal">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-center mb-8">What I Bring to the Table</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold mb-2">Performance Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Building lightning-fast applications with optimal user experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold mb-2">Modern Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating beautiful, responsive interfaces that users love
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2">Scalable Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Architecting robust systems that grow with your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;