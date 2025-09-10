import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    const onScroll = () => {
      handleScroll();
      handleScrollReveal();
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return activeSection;
};