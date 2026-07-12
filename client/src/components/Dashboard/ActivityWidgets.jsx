import React from 'react';
import { ArrowRight, Code2, Database, Layout, Clock, PlayCircle, FileText, Calendar, BookOpen } from 'lucide-react';

const RoadmapProgress = () => (
  <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 shadow-lg">
    <h3 className="text-white font-semibold mb-4">Roadmap Progress</h3>
    <div className="space-y-4">
      <ProgressItem icon={<Layout size={16} />} color="text-purple-400" bg="bg-purple-500/20" barColor="bg-purple-500" title="Frontend Developer" progress={75} />
      <ProgressItem icon={<Database size={16} />} color="text-blue-400" bg="bg-blue-500/20" barColor="bg-blue-500" title="Backend Developer" progress={40} />
      <ProgressItem icon={<Code2 size={16} />} color="text-emerald-400" bg="bg-emerald-500/20" barColor="bg-emerald-500" title="Full Stack Developer" progress={30} />
    </div>
  </div>
);

const ProgressItem = ({ icon, color, bg, barColor, title, progress }) => (
  <div className="flex items-center gap-3">
    <div className="flex flex-col items-center">
      <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center ${color}`}>
        {icon}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1 text-sm">
        <span className="text-slate-300">{title}</span>
        <span className="text-slate-400 text-xs">{progress}%</span>
      </div>
      <div className="w-full bg-[#1e293b] h-1.5 rounded-full">
        <div className={`h-full ${barColor} rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-white font-semibold">Recent Activity</h3>
      <button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
    </div>
    <div className="space-y-4">
      <ActivityItem icon={<Code2 size={14} />} color="text-orange-400" title="Solved 2 questions on Arrays" badge="DSA" time="2h ago" />
      <ActivityItem icon={<PlayCircle size={14} />} color="text-emerald-400" title="Completed Mock Interview - Google" badge="Mock Interview" time="5h ago" />
      <ActivityItem icon={<FileText size={14} />} color="text-pink-400" title="Updated Resume" badge="Resume Builder" time="1d ago" />
      <ActivityItem icon={<Database size={14} />} color="text-blue-400" title="Learned React useEffect Hook" badge="Development" time="2d ago" />
    </div>
  </div>
);

const ActivityItem = ({ icon, color, title, badge, time }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 ${color}`}>
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm text-slate-300 leading-tight mb-1">{title}</p>
      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#1e293b] text-slate-400 border border-slate-700">{badge}</span>
    </div>
    <span className="text-xs text-slate-500 whitespace-nowrap">{time}</span>
  </div>
);

const UpcomingInterview = () => (
  <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 shadow-lg mt-4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-white font-semibold">Upcoming Interview</h3>
      <Calendar size={16} className="text-slate-400" />
    </div>
    
    <p className="text-sm font-medium text-slate-200 mb-3">Frontend Developer Interview</p>
    
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-white rounded-lg p-2 flex items-center justify-center shadow">
        <svg viewBox="0 0 23 23" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h11v11H0z" fill="#f35325"/><path d="M12 0h11v11H12z" fill="#81bc06"/><path d="M0 12h11v11H0z" fill="#05a6f0"/><path d="M12 12h11v11H12z" fill="#ffba08"/></svg>
      </div>
      <div>
        <p className="text-sm font-medium text-white">Microsoft</p>
        <p className="text-xs text-slate-400 flex items-center gap-1">
          <Calendar size={12} /> 24 May 2024 • 10:30 AM
        </p>
      </div>
    </div>

    <button className="w-full py-2 bg-[#1e293b] hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors border border-slate-700">
      View Details
    </button>
  </div>
);

const ResumeScoreWidget = ({ score = 85 }) => (
  <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-5 shadow-lg relative overflow-hidden mt-4">
    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
    
    <div className="flex items-center justify-between mb-4 relative z-10">
      <h3 className="text-base font-bold text-white">Resume Score</h3>
      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
        <BookOpen size={16} className="text-orange-400" />
      </div>
    </div>
    
    <div className="flex items-end gap-3 mb-6 relative z-10">
      <div className="text-4xl font-bold text-white">{score}</div>
      <div className="text-sm font-medium text-orange-400 mb-1">/ 100</div>
    </div>

    <button className="w-full py-2 bg-[#1e293b] hover:bg-slate-800 text-indigo-400 rounded-xl text-sm font-medium transition-colors border border-indigo-500/30 flex items-center justify-center gap-2 mt-auto">
      Improve Resume <ArrowRight size={16} />
    </button>
  </div>
);

export { RoadmapProgress, RecentActivity, UpcomingInterview, ResumeScoreWidget };
