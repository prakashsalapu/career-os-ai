import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const AIMentor = () => {
  return (
    <div className="bg-gradient-to-b from-[#1e1b4b] to-[#111827] border border-indigo-500/20 rounded-2xl p-5 shadow-lg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-white font-semibold flex items-center gap-2">
          AI Mentor <Sparkles size={16} className="text-indigo-400" />
        </h3>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-2xl border-2 border-[#111827]">
          🤖
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          Hi Harsh! I analyzed your progress and here's what I recommend today:
        </p>
        
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
            <span>Solve 3 DSA problems on Arrays</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
            <span>Review React advanced concepts</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
            <span>Attempt a System Design question</span>
          </li>
        </ul>

        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
          Chat with AI Mentor <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default AIMentor;
