import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Index = () => {
  const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
