import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", url: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", url: "#" },
    { icon: FaInstagram, label: "Instagram", url: "#" },
    { icon: FaYoutube, label: "YouTube", url: "#" },
    { icon: FaTwitter, label: "Twitter", url: "#" },
  ];

  const productLinks = [
    { label: "Job Tracker", url: "#" },
    { label: "Resume Builder", url: "#" },
    { label: "DSA Tracker", url: "#" },
    { label: "Mock Interviews", url: "#" },
  ];


  const companyLinks = [
    { label: "About Us", url: "#" },
    { label: "Our Mission", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Contact Us", url: "#" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 flex ">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                <button type="button" className="flex items-center gap-2 shrink-0" aria-label="Go to home"
            >
              <span className="text-xl font-bold text-white">
                Career
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  OS
                </span>
              </span>
            </button>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Empowering careers and inspiring futures. Your journey to success starts here.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      title={social.label}
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-sm uppercase tracking-wider">
                Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
            {/* Company Column */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800" />

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>© 2026 CareerOS. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">🩵</span> for your success by Team CareerOS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;