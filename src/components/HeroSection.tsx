import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Computer Engineering Student";
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse floating" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse floating" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse floating" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-75 blur-lg" />
              <div className="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden bg-gradient-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl font-bold text-primary">RH</div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
              <span className="gradient-text">Rushit Harsoda</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground min-h-[40px] font-elegant">
              <span className="inline-block">
                {displayText}
                <span className="inline-block w-1 h-8 bg-primary ml-1 animate-pulse royal-glow" />
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-elegant">
              Computer Engineering student with hands-on experience in web development. 
              Passionate about learning new technologies and building innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <Button className="btn-hero" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="outline" className="btn-ghost">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => scrollToSection('about')}>
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;