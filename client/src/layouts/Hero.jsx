import React from "react";
import Feature from "./Feature";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const trustAvatars = [1, 2, 3, 4];

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[80vh] sm:min-h-[92vh] items-center overflow-hidden bg-slate-950 px-4 py-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_32%),linear-gradient(to_bottom,#020617,#020617)]" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="container-max relative z-10 mx-auto max-w-5xl">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-10 text-center animate-hero-fade">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-slate-200 shadow-lg shadow-black/20 backdrop-blur-xl  mb-5 sm:text-md sm:px-4">
              <Sparkles size={16} className="text-cyan-300" />
              <span>AI Powered</span>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Empowering <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Careers</span>.
                <br />
                Building <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Futures</span>.
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-6 text-slate-400">
                Discover opportunities, enhance skills, and grow your career with the right tools and insights - all in one place.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/register" className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.45)]">
                Get Started
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white">
                Explore Features
              </button>
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:gap-6">
              <div className="flex -space-x-3">
                {trustAvatars.map((avatarId) => (
                  <img
                    key={avatarId}
                    src={`https://i.pravatar.cc/50?img=${avatarId}`}
                    alt={`Avatar ${avatarId}`}
                    className="h-10 w-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                ))}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-white">Trusted by 2000+</p>
                <p className="text-sm text-slate-400">Students & Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feature />
    </>
  );
};

export default Hero;