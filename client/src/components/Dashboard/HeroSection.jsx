import React from "react";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-card">
      <div className="hero-card__header">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Welcome back</span>
        </div>
        <div className="hero-copy">
          <h1>Welcome back, Prakashh <span>👋</span></h1>
          <p>Continue building your career operating system.</p>
        </div>
      </div>

      <div className="hero-card__footer">
        <div className="hero-streak-card">
          <span>Current Streak</span>
          <strong>12 Days</strong>
        </div>

        <div className="hero-actions">
          <button className="dashboard-button dashboard-button-secondary">Continue DSA</button>
          <button className="dashboard-button dashboard-button-primary">Track Jobs</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
