import { useEffect } from 'react';
import './App.css';

import HeroSection from "./components/PageComponents/HeroSection";
import Projetos from './components/PageComponents/Projetos';
import SobreMim from './components/PageComponents/SobreMim';
import Habilidades from './components/PageComponents/Habilidades';
import Contato from './components/PageComponents/Contato';
import Footer from './components/PageComponents/Footer';

function App() {
  useEffect(() => {
  const sections = document.querySelectorAll('.secao');
  let currentIndex = 0;
  let isScrolling = false;

  const scrollToSection = (index) => {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (isScrolling) return;

    const direction = Math.sign(e.deltaY);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
      currentIndex = nextIndex;
      scrollToSection(currentIndex);
      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 500);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleIndex = Array.from(sections).indexOf(entry.target);
          if (visibleIndex !== -1) {
            currentIndex = visibleIndex;
          }
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  window.addEventListener('wheel', handleWheel, { passive: false });

  return () => {
    window.removeEventListener('wheel', handleWheel);
    observer.disconnect();
  };
}, []);

  return (
    <main>
      <HeroSection />
      <SobreMim />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
