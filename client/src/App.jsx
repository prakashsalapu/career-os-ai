
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import FAQ from './layouts/Faq';
import Footer from './layouts/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

import ResetPassword from './pages/ResetPassword';
import DashboardLayout from './layouts/DashboardLayout';
import Notes from './pages/Notes';

// Placeholder empty components for missing pages to prevent crashing until built
const Placeholder = ({ title }) => <div className="text-white p-8"><h1 className="text-2xl font-bold">{title} Component Coming Soon...</h1></div>;

// A wrapper for the home page sections
const Home = ({ darkMode, toggleTheme }) => (
  <>
    <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
    <Hero />
    <FAQ />
    <Footer />
  </>
);

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
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="roadmaps" element={<Placeholder title="Roadmaps" />} />
          <Route path="dsa" element={<Placeholder title="DSA Tracker" />} />
          <Route path="resume" element={<Placeholder title="Resume Builder" />} />
          <Route path="mock-interviews" element={<Placeholder title="Mock Interviews" />} />
          <Route path="notes" element={<Notes />} />
          <Route path="mentor" element={<Placeholder title="AI Mentor" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
