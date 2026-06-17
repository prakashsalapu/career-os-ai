import React from "react";
import "../styles/Feature.css";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

const Feature = () => {
  return (
    <section className="features-section">
      {/* FEATURES BADGE */}
      <div className="features-badge">
        ✦ Features to Accelerate Your Career
      </div>

      {/* FEATURES WRAPPER */}
      <div className="features-wrapper">
        <div className="feature-card">
          <div className="feature-icon">
            <FaBriefcase />
          </div>

          <div>
            <h4>Find the Right Job</h4>
            <p>Explore top career opportunities.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaGraduationCap />
          </div>

          <div>
            <h4>Build In-Demand Skills</h4>
            <p>Learn skills that employers value.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUsers />
          </div>

          <div>
            <h4>Get Expert Guidance</h4>
            <p>Connect with mentors and career experts.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaChartBar />
          </div>

          <div>
            <h4>Track Your Growth</h4>
            <p>Monitor progress and achieve your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
