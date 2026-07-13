import React from 'react';
import { ChevronRight, Code2, Database, Layout, Terminal } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'React Developer Roadmap',
    progress: 75,
    icon: <Layout size={24} className="text-cyan-400" />,
    color: 'bg-indigo-500'
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    progress: 60,
    icon: <Database size={24} className="text-blue-400" />,
    color: 'bg-blue-500'
  },
  {
    id: 3,
    title: 'System Design Basics',
    progress: 40,
    icon: <Terminal size={24} className="text-emerald-400" />,
    color: 'bg-emerald-500'
  },
  {
    id: 4,
    title: 'JavaScript Mastery',
    progress: 80,
    icon: <Code2 size={24} className="text-yellow-400" />,
    color: 'bg-orange-500'
  }
];

const ContinueLearning = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold">Continue Learning</h3>
        <button className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
          View All <ChevronRight size={14} />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 snap-x scrollbar-hide">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-[#111827] border border-[#1e293b] rounded-2xl p-4 flex-shrink-0 w-64 snap-start hover:border-indigo-500/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center">
                {course.icon}
              </div>
              <h4 className="text-sm font-medium text-white leading-tight flex-1">{course.title}</h4>
            </div>
            
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400">Progress</span>
              <span className="text-slate-300 font-medium">{course.progress}%</span>
            </div>
            
            <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full ${course.color} rounded-full transition-all duration-1000 group-hover:opacity-80`} 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearning;
