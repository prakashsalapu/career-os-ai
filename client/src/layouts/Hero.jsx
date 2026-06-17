import React from "react";
import "../styles/Hero.css";
import Feature from "./Feature";

import {
  FaArrowRight,
  FaBookOpen,
} from "react-icons/fa";

import { TrendingUp } from "lucide-react";
import { IoBagHandle } from "react-icons/io5";
import { MdTrendingUp } from "react-icons/md";
import heroGirl from "/assets/hero1.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badge">
            ✦ Your Career, Our Mission
          </div>

          <h1 className="hero-title">
            Empowering Careers.
            <br />
            Building <span>Futures.</span>
          </h1>

          <p className="hero-description">
            Discover opportunities, enhance skills, and grow your career
            with the right tools and insights – all in one place.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started <FaArrowRight />
            </button>

            <button className="btn-secondary">
              Explore Features
            </button>
          </div>

          <div className="trusted-users">

            <div className="avatar-group">
              <img src="https://i.pravatar.cc/50?img=1" alt="" />
              <img src="https://i.pravatar.cc/50?img=2" alt="" />
              <img src="https://i.pravatar.cc/50?img=3" alt="" />
              <img src="https://i.pravatar.cc/50?img=4" alt="" />

              <div className="avatar-count">
                2K+
              </div>
            </div>

            <div className="trusted-text">
              <h4>Trusted by 2000+</h4>
              <p>students & professionals</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <div className="hero-circle"></div>

          <div className="dots dots-top"></div>
          <div className="dots dots-middle"></div>
          <div className="dots dots-bottom"></div>

          <img
            src={heroGirl}
            alt="girl"
            className="hero-image"
          />

          {/* CARD 1 */}
          <div className="floating-card card-placement">

            <div className="card-icon green">
              <MdTrendingUp />
            </div>

            <div>
              <h4>95%</h4>
              <span>Placement Assistance</span>
            </div>

            <div className="card-arrow">
  <TrendingUp size={12} />
</div>
          </div>

          {/* CARD 2 */}
          <div className="floating-card card-jobs">

  <div className="card-icon purple">
    <IoBagHandle />
  </div>

  <div className="card-content">
    <h4>5000+</h4>
    <span>Job Opportunities</span>
  </div>

  <div className="card-arrow">
    <TrendingUp size={12} />
  </div>

</div>

          {/* CARD 3 */}
          <div className="floating-card card-courses">

            <div className="card-icon blue">
              <FaBookOpen />
            </div>

            <div>
              <h4>100+</h4>
              <span>Skill-Building Courses</span>
            </div>
            <div className="card-arrow">
  <TrendingUp size={12} />
</div>
          </div>

        </div>
      </div>

      <Feature />
    </section>
  );
};

export default Hero;
