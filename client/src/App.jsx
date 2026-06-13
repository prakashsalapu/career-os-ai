import React, { useEffect, useState } from 'react';
import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import FAQ from './layouts/Faq';
import Footer from './layouts/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', darkMode);
    document.documentElement.classList.toggle('theme-light', !darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <Hero />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
