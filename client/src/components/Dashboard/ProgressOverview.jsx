import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProgressOverview = () => {
  return (
    <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 shadow-lg relative overflow-hidden flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Your Progress Overview</h3>
        <button className="flex items-center gap-2 text-xs text-slate-300 bg-[#1e293b]/50 px-3 py-1.5 rounded-lg border border-[#1e293b] hover:bg-[#1e293b] transition-colors">
          This Week <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 flex flex-col relative w-full pt-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-slate-500">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="flex-1 ml-10 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-full border-t border-[#1e293b]/50 h-0"></div>
            ))}
          </div>

          {/* SVG Line Chart Mock */}
          <div className="absolute inset-0 pt-2 pb-6">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="overflow-visible">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Fill Area */}
              <path 
                d="M 0 90 Q 15 75 25 70 T 50 60 T 70 55 T 85 20 T 100 15 L 100 100 L 0 100 Z" 
                fill="url(#gradient)" 
              />
              
              {/* Line */}
              <path 
                d="M 0 90 Q 15 75 25 70 T 50 60 T 70 55 T 85 20 T 100 15" 
                fill="none" 
                stroke="#8b5cf6" 
                strokeWidth="2.5"
                filter="url(#glow)"
              />

              {/* Data Points */}
              <circle cx="0" cy="90" r="3" fill="#8b5cf6" />
              <circle cx="25" cy="70" r="3" fill="#8b5cf6" />
              <circle cx="50" cy="60" r="3" fill="#8b5cf6" />
              <circle cx="70" cy="55" r="4" fill="#fff" className="drop-shadow-[0_0_8px_rgba(139,92,246,1)]" />
              <circle cx="85" cy="20" r="3" fill="#8b5cf6" />
              <circle cx="100" cy="15" r="3" fill="#8b5cf6" />

              {/* Tooltip Simulation */}
              <g transform="translate(68, 25)">
                <rect x="-30" y="0" width="60" height="30" rx="4" fill="#1e293b" opacity="0.9" />
                <text x="0" y="12" fill="#94a3b8" fontSize="8" textAnchor="middle">May 12, 2024</text>
                <text x="0" y="24" fill="#fff" fontSize="8" textAnchor="middle">Progress: 78%</text>
                {/* Connector line to the active dot */}
                <line x1="0" y1="30" x2="2" y2="28" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" strokeDasharray="2,2"/>
              </g>
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-500 transform translate-y-6">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverview;
