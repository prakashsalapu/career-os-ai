import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogin = () => {
    setShowDashboard(true);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? 'app app--dark' : 'app app--light'}>
      {!showDashboard && (
        <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} onLogin={handleLogin} onSignUp={handleLogin} />
      )}
      {showDashboard ? (
        <Dashboard darkMode={darkMode} onToggleTheme={toggleTheme} />
      ) : (
        <main className="landing-screen">
          <section className="landing-card">
            <p className="landing-eyebrow">CareerOS</p>
            <h1>Welcome to your career command center</h1>
            <p className="landing-copy">
              Click login to open the dashboard and start tracking your goals.
            </p>
            <button className="btn btn-primary landing-button" type="button" onClick={handleLogin}>
              Go to dashboard
            </button>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;