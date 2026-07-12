import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onLogin, onSignUp }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item) => {
    setActiveLink(item.label);
    const targetElement = document.getElementById(item.href.slice(1));

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.assign(item.href);
  };

  const handleMobileNavClick = (item) => {
    handleNavClick(item);
    setMobileMenuOpen(false);
  };

  const handleAuthClick = (callback) => {
    callback?.();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 shadow-lg shadow-black/20 backdrop-blur-lg  ">
        <div className="container-max  ">
          <div className="flex h-16 items-center justify-between gap-3 ">
            <button
              type="button"
              onClick={() => handleNavClick(navItems[0])}
              className="flex items-center gap-2 shrink-0"
              aria-label="Go to home"
            >
              <span className="text-xl font-bold text-white">
                Career
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  OS
                </span>
              </span>
            </button>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`rounded-lg px-3 py-2 text-sm font-light transition-colors duration-200 ${
                    activeLink === item.label
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>


            <div className="hidden md:flex items-center gap-3">
              <button
                className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                type="button"
                onClick={onLogin}
              >
                Login
              </button>
              <button
                className="btn rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40"
                type="button"
                onClick={onSignUp}
              >
                Sign up
              </button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[86vw] max-w-sm border-l border-white/10 bg-slate-950/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <span className="text-lg font-bold text-white">
                Career
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  OS
                </span>
              </span>
              <button
                type="button"
                className="rounded-lg border border-white/10 p-2 text-white transition-colors hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex h-[calc(100%-4rem)] flex-col justify-between p-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      activeLink === item.label
                        ? "bg-blue-500/15 text-cyan-300"
                        : "text-slate-200 hover:bg-white/5"
                    }`}
                    onClick={() => handleMobileNavClick(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <button
                  className="w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  type="button"
                  onClick={() => handleAuthClick(onLogin)}
                >
                  Login
                </button>
                <button
                  className="w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40"
                  type="button"
                  onClick={() => handleAuthClick(onSignUp)}
                >
                  Get Started
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
