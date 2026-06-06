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
import "../styles/Navbar.css";




const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
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
    <div className={darkMode ? "navbar-dark" : "navbar-light"}>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="CareerOS logo" className="logo-img" />
          <h1 className="logo-text">
            Career<span className="logo-os">OS</span>
          </h1>
        </div>

        <div className="navbar-links">
          {navItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleNavClick(item)}
              className={
                activeLink === item.label ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

        <div className="navbar-right">
          <button
            type="button"
            className={darkMode ? "theme-switch theme-switch--dark" : "theme-switch theme-switch--light"}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle light and dark mode"
            aria-pressed={darkMode}
          >
            <span className="theme-switch__option theme-switch__option--sun">
              <Sun size={16} />
            </span>
            <span className="theme-switch__option theme-switch__option--moon">
              <Moon size={16} />
            </span>
            <span className="theme-switch__slider" aria-hidden="true" />
          </button>

          <button className="btn btn-outline" type="button" onClick={onLogin}>Login</button>
          <button className="btn btn-primary" type="button" onClick={onSignUp}>Sign Up</button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button
              className="mobile-menu-close"
              onClick={() => {
                document.activeElement?.blur();
                setMobileMenuOpen(false);
              }}
            >
              <X size={24} />
            </button>

            <div className="mobile-theme-section">
              <span className="mobile-theme-label">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>

        <button
          className={
            darkMode
              ? "theme-switch theme-switch--dark"
              : "theme-switch theme-switch--light"
          }
          onClick={() => setDarkMode(!darkMode)}
        >
          <span className="theme-switch__option theme-switch__option--sun">
            <Sun size={16} />
          </span>

          <span className="theme-switch__option theme-switch__option--moon">
            <Moon size={16} />
          </span>

          <span className="theme-switch__slider" />
        </button>
      </div>

            <div className="mobile-nav-links">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={
                    activeLink === item.label
                      ? "mobile-nav-link active"
                      : "mobile-nav-link"
                  }
                  onClick={() => {
                    handleNavClick(item);
                    setMobileMenuOpen(false);
                  }}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>

      <div className="mobile-buttons">
        <button className="btn btn-outline">
          Login
        </button>

        <button className="btn btn-primary">
          Sign Up
        </button>
      </div>

    </div>
  </div>
)}

    </div>
  );
};

export default Navbar;
