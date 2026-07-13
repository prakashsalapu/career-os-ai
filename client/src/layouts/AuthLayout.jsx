import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex w-full font-sans bg-slate-50 relative">
      {/* Left Panel - Dark (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0B0F19] to-[#1e1b4b] flex-col justify-center items-center p-12 relative overflow-hidden text-center">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center max-w-lg">
          <div className="flex items-center gap-2 mb-8 bg-[#1e293b]/50 border border-slate-700 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">∞</span>
            </div>
            <span className="text-white font-bold tracking-wide">Career<span className="text-indigo-400">OS</span></span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Hello,<br />Future Planner! 👋
          </h1>
          
          <p className="text-slate-300 text-lg mb-12">
            CareerOS is your AI Career Mentor and Placement Strategist.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Pill text="AI-POWERED INSIGHTS" />
            <Pill text="SMART ROADMAPS" />
            <Pill text="PLAN. SAVE. ACHIEVE." />
          </div>
        </div>
      </div>

      {/* Right Panel - Light (Form container) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative">
        {/* Subtle background gradient on light side */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-purple-50/50 -z-10"></div>
        
        <div className="w-full max-w-md bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
          <button 
            className="absolute top-6 left-6 text-sm text-slate-500 hover:text-slate-800 flex items-center gap-2 transition-colors font-medium"
            onClick={() => window.location.href = '/'}
          >
             ← Back to Homepage
          </button>
          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Pill = ({ text }) => (
  <div className="px-5 py-2.5 rounded-full border border-slate-700/50 bg-[#1e293b]/30 backdrop-blur-sm text-xs font-semibold text-slate-300 tracking-wider">
    {text}
  </div>
);

export default AuthLayout;
