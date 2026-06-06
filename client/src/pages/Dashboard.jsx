import React, { useState } from "react";
import "../styles/Dashboard.css";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Clock3,
  Layers,
  Sparkles,
  TrendingUp,
  Bell,
  UserCircle,
  Cpu,
  PlayCircle,
  ArrowRight,
  CircleDot,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Live Learning", icon: BookOpen, active: false },
  { label: "Self-Paced Library", icon: Clock3, active: false },
  { label: "DSA & CP Practice", icon: Cpu, active: false },
  { label: "Aptitude", icon: Sparkles, active: false },
  { label: "Placement Assistance", icon: Layers, active: false },
];

const Dashboard = ({ darkMode, onToggleTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`dashboard-page ${darkMode ? "" : "light"} ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="dashboard-shell">
        <aside className="dashboard-nav">
          <div className="dashboard-nav-top">
            <div className="dashboard-nav-brand">
              <button className="dashboard-nav-hamburger" onClick={() => setSidebarOpen((open) => !open)} aria-label="Toggle navigation">
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <span className="dashboard-nav-title">CareerOS</span>
            </div>
          </div>

          <nav className="dashboard-nav-menu" aria-label="Primary navigation">
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <button key={item.label} type="button" className={`dashboard-nav-item ${item.active ? "active" : ""}`}>
                  <ItemIcon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="dashboard-nav-footer">
            <button type="button" className="dashboard-bug-button">
              <CircleDot size={16} /> Report Bug
            </button>
          </div>
        </aside>

        <main className="dashboard-content">
          <header className="dashboard-header">
            <div className="dashboard-header-copy">
              <p className="dashboard-header-label">SETTING UP YOUR JOURNEY</p>
              <h1>Let&apos;s build your learning path</h1>
              <p className="dashboard-header-description">
                Complete 3 quick actions and we&apos;ll personalize your DSA, CP, and placement roadmap.
              </p>
            </div>

            <div className="dashboard-header-actions">
              <button className="btn btn-premium" type="button">
                Upgrade to Premium
              </button>
              <button
                type="button"
                className={darkMode ? "theme-switch theme-switch--dark" : "theme-switch theme-switch--light"}
                onClick={onToggleTheme}
                aria-label="Toggle light theme"
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
              <button className="icon-button" type="button" aria-label="Rewards">
                <Sparkles size={18} />
              </button>
              <button className="icon-button" type="button" aria-label="Notifications">
                <Bell size={18} />
              </button>
              <button className="icon-button avatar-button" type="button" aria-label="Profile">
                <UserCircle size={20} />
              </button>
            </div>
          </header>

          <section className="dashboard-grid">
            <div className="dashboard-main-column">
              <article className="hero-banner-card">
                <div className="hero-banner-row">
                  <div>
                    <span className="hero-banner-eyebrow">SETTING UP YOUR JOURNEY</span>
                    <h2>Let&apos;s build your learning path</h2>
                    <p className="hero-banner-copy">
                      Complete 3 quick actions and we&apos;ll personalize your DSA, CP, and placement roadmap.
                    </p>
                  </div>
                  <button className="btn btn-outline">Start Setup</button>
                </div>
              </article>

              <article className="hero-course-card">
                <div className="hero-course-top">
                  <div>
                    <span className="hero-course-label">HERO COURSE</span>
                    <h3>AZ101: Master C++ For Data Structures and Algorithms</h3>
                    <p>
                      A high-impact starter course that teaches the patterns, tools, and thinking framework students repeatedly use across DSA, CP, and interviews.
                    </p>
                    <div className="hero-course-tags">
                      <span>Pattern Based</span>
                      <span>DSA + CP</span>
                      <span>Beginner Friendly</span>
                    </div>
                  </div>
                  <div className="hero-course-visual">
                    <PlayCircle size={56} />
                  </div>
                </div>
                <button className="btn btn-course" type="button">
                  Start Hero Course <ArrowRight size={16} />
                </button>
              </article>

              <div className="dashboard-card-row">
                <article className="dashboard-card profile-card">
                  <h3>Top coders from your college</h3>
                  <p>See where you stand and who is leading.</p>
                  <div className="avatar-stack">
                    <div className="avatar avatar--one" />
                    <div className="avatar avatar--two" />
                    <div className="avatar avatar--three" />
                    <div className="avatar avatar--more">+8</div>
                  </div>
                </article>

                <article className="dashboard-card coins-card">
                  <div className="coins-card-header">
                    <div>
                      <h3>Spend Your Coins</h3>
                      <p>You have: <strong>200</strong></p>
                    </div>
                    <div className="coins-icon">💰</div>
                  </div>
                </article>
              </div>
            </div>

            <aside className="dashboard-side-column">
              <article className="dashboard-card challenge-card">
                <div className="challenge-header">
                  <span>TODAY&apos;S CHALLENGE</span>
                  <span className="challenge-timer">10:19:12</span>
                </div>
                <h3>Sum of Primes in a Range</h3>
                <p>
                  Jackson, a math research student, is developing an application on prime numbers. For the given two integers on the display of the application, the user has to identify all the prime numbers in the interval.
                </p>
                <div className="challenge-footer">
                  <div className="challenge-rewards">
                    <span>Rewards</span>
                    <strong>80 Stars</strong>
                    <strong>20 Coins</strong>
                  </div>
                  <button className="btn btn-secondary" type="button">Solve Now</button>
                </div>
              </article>

              <article className="dashboard-card featured-card">
                <div className="featured-header">
                  <span>Featured on YouTube</span>
                  <span className="featured-subtitle">Free Learning Resource</span>
                </div>
                <div className="featured-preview">
                  <PlayCircle size={44} />
                </div>
                <button className="btn btn-secondary" type="button">Watch Now</button>
              </article>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
