import React, { useEffect, useState } from 'react';
import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import FAQ from './layouts/Faq';
import Footer from './layouts/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const storedTheme = localStorage.getItem('careerOS-theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setDarkMode((value) => !value);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('careerOS-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
      <Hero />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
