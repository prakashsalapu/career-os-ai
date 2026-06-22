import React, { useState } from "react";
import {
  Sun,
  Moon,
  Home,
  Sparkles,
  Info,
  HelpCircle,
  Mail,
  Menu,
  X,
} from "lucide-react";

const Navbar = ({ darkMode, onToggleTheme, onLogin, onSignUp }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Features", href: "#features", icon: Sparkles },
    { label: "About", href: "#about", icon: Info },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (item) => {
    setActiveLink(item.label);
    const targetId = item.href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.assign(item.href);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-slate-900 dark:text-white">
                  Career<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">OS</span>
                </h1>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeLink === item.label
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800"
                        : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Auth Buttons - Desktop */}
              <div className="hidden sm:flex items-center gap-3">
                <button
                  className="btn btn-outline text-sm"
                  type="button"
                  onClick={onLogin}
                >
                  Login
                </button>
                <button
                  className="btn btn-primary text-sm"
                  type="button"
                  onClick={onSignUp}
                >
                  Sign Up
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} className="text-slate-900 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-64 bg-white dark:bg-slate-900 shadow-lg overflow-y-auto">
            <div className="p-4">
              {/* Close Button */}
              <button
                className="mb-6 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} className="text-slate-900 dark:text-white" />
              </button>

              {/* Theme Toggle in Mobile */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {darkMode ? "Dark Mode" : "Light Mode"}
                </span>
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>

              {/* Nav Links */}
              <div className="space-y-2 mb-6">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        activeLink === item.label
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                      onClick={() => {
                        handleNavClick(item);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <Icon size={20} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Auth Buttons - Mobile */}
              <div className="space-y-3 border-t border-slate-200 dark:border-slate-700 pt-6">
                <button
                  className="btn btn-outline w-full text-sm"
                  type="button"
                  onClick={() => {
                    onLogin?.();
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </button>
                <button
                  className="btn btn-primary w-full text-sm"
                  type="button"
                  onClick={() => {
                    onSignUp?.();
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
