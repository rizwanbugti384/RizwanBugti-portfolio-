/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [isDark, setIsDark] = useLocalStorage<boolean>('theme_dark', true); // Default to premium dark mode
  const [activeSection, setActiveSection] = useState('home');

  // Sync theme to root HTML element for Tailwind utility classes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Track scroll position to update navbar links actively
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for nav header height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-indigo-105 dark:selection:bg-indigo-950/60">
      {/* Header and navigation controls */}
      <Header 
        isDark={isDark} 
        setIsDark={setIsDark} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main section contents */}
      <main className="focus:outline-hidden">
        {/* Intro */}
        <Hero setActiveSection={setActiveSection} />

        {/* Biography & Timelines */}
        <About />

        {/* Tech Stack skills with search filters */}
        <Skills />

        {/* Clean, case study detail modals showcase */}
        <Projects />

        {/* State-driven validation form */}
        <Contact />
      </main>

      {/* Signature copyright footer bar */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

