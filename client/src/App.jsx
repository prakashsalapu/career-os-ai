import React, { useEffect, useState } from 'react';
import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';

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
    </div>
  );
}

export default App;
