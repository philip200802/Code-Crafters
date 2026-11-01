import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  const toggleTheme = () => {
    setIsLight((current) => {
      const nextThemeIsLight = !current;
      localStorage.setItem('theme', nextThemeIsLight ? 'light' : 'dark');
      return nextThemeIsLight;
    });
  };

  return (
    <div className={isLight ? 'theme-shell theme-light' : 'theme-shell'}>
      <Navbar isLight={isLight} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Github isLight={isLight} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
