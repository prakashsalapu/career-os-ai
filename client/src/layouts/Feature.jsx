import React from "react";
import { Briefcase, BookOpen, Users, TrendingUp } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Find the Right Job",
      description: "Explore top career opportunities tailored to your skills.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Build In-Demand Skills",
      description: "Learn skills that employers value most.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Get Expert Guidance",
      description: "Connect with mentors and career experts.",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Track Your Growth",
      description: "Monitor progress and achieve your goals.",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="features" className="section items-center overflow-hidden bg-slate-950 px-4 py-8 text-white">
      <div className="container-max">
        <div>
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-3 py-1.5  rounded-full border border-white/20">
                <span className="text-xl">✦</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Features 
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white py-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-md text-slate-400 mb-8">
              Comprehensive tools designed to support every step of your career journey.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group card card-hover border-white/20 transparent"
                >
                  {/* Icon Container */}
                  <div className={`inline-flex p-2 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl  text-slate-900 text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
