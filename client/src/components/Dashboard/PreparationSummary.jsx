import React from 'react';
import { ChevronRight } from 'lucide-react';

const PreparationSummary = () => {
  return (
    <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 shadow-lg flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Preparation Summary</h3>
        <button className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
          View All <ChevronRight size={14} />
        </button>
      </div>

      <div className="flex items-center gap-8 flex-1">
        {/* Doughnut Chart Mock using Conic Gradient */}
        <div className="relative w-36 h-36 flex-shrink-0">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                #8b5cf6 0% 55%, 
                #3b82f6 55% 75%, 
                #10b981 75% 90%, 
                #f59e0b 90% 100%
              )`
            }}
          ></div>
          {/* Inner Circle for Doughnut effect */}
          <div className="absolute inset-[15%] bg-[#111827] rounded-full flex flex-col items-center justify-center shadow-inner">
            <span className="text-3xl font-bold text-white">78%</span>
            <span className="text-[10px] text-slate-400">Overall Progress</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 flex-1">
          <LegendItem color="bg-purple-500" label="DSA" percentage="55%" />
          <LegendItem color="bg-blue-500" label="Development" percentage="20%" />
          <LegendItem color="bg-emerald-500" label="System Design" percentage="15%" />
          <LegendItem color="bg-orange-500" label="Soft Skills" percentage="10%" />
        </div>
      </div>
    </div>
  );
};

const LegendItem = ({ color, label, percentage }) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      <span className="text-slate-300">{label}</span>
    </div>
    <span className="text-white font-medium">{percentage}</span>
  </div>
);

export default PreparationSummary;
