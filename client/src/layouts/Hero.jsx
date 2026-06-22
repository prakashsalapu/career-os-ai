import React from "react";
import Feature from "./Feature";
import { ArrowRight, TrendingUp, Briefcase, BookOpen } from "lucide-react";
import heroGirl from "/assets/hero1.png";

const Hero = () => {
  return (
    <section id="home" className="section pt-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-slate-800 rounded-full border border-blue-200 dark:border-slate-700">
                <span className="text-2xl">✦</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Your Career, Our Mission
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
                Empowering <span className="gradient-text">Careers</span>.
                <br />
                Building <span className="gradient-text">Futures.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                Discover opportunities, enhance skills, and grow your career with the right tools and insights – all in one place.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary group">
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary">
                Explore Features
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/50?img=${i}`}
                    alt={`Avatar ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Trusted by 2000+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Students & Professionals</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Hero Image with Floating Cards */}
          <div className="relative h-96 lg:h-full min-h-96">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl opacity-50 blur-3xl" />

            {/* Decorative Elements */}
            <div className="absolute top-10 right-20 w-20 h-20 bg-blue-200 dark:bg-slate-700 rounded-full opacity-20 blur-2xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-200 dark:bg-cyan-900 rounded-full opacity-10 blur-3xl animate-pulse" />

            {/* Hero Image */}
            <div className="relative h-full flex items-center justify-center">
              {heroGirl && (
                <img
                  src={heroGirl}
                  alt="Career professional"
                  className="max-h-full w-auto object-contain drop-shadow-2xl animate-float"
                />
              )}

              {/* Floating Card 1 - Placement */}
              <div className="absolute top-8 right-8 card card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-slate-800 rounded-lg">
                    <TrendingUp size={24} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-slate-900 dark:text-white">95%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Placement Assistance</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Jobs */}
              <div className="absolute bottom-24 -left-4 card card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-slate-800 rounded-lg">
                    <Briefcase size={24} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-slate-900 dark:text-white">5000+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Job Opportunities</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 - Courses */}
              <div className="absolute top-1/2 -right-6 card card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-slate-800 rounded-lg">
                    <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-slate-900 dark:text-white">100+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Skill Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Feature />
    </section>
  );
};

export default Hero;
