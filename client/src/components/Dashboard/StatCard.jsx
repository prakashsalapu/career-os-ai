import React from 'react';

const StatCard = ({ icon: Icon, iconBg, title, value, subtitle, trend, progressColor, isStreak }) => {
  return (
    <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/10 transition-colors duration-500"></div>
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${iconBg}`}>
            <Icon size={20} />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium">{title}</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <h3 className="text-white text-xl font-bold">{value}</h3>
              {subtitle && <span className="text-slate-500 text-xs font-medium">{subtitle}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs relative z-10">
        <span className="text-slate-300 font-medium">{trend}</span>
        {isStreak ? (
          <span className="text-xl">🔥</span>
        ) : (
          <span className="text-slate-400">{progressColor === 'bg-orange-500' ? '' : '37%'}</span>
        )}
      </div>
      
      {!isStreak && (
        <div className="w-full bg-[#1e293b] h-1.5 rounded-full mt-2 relative z-10 overflow-hidden">
          <div className={`h-full ${progressColor} rounded-full`} style={{ width: progressColor === 'bg-orange-500' ? '85%' : '37%' }}></div>
        </div>
      )}

      {/* Decorative tiny chart for streak or mock interviews */}
      {isStreak && (
        <div className="absolute bottom-2 right-2 w-24 h-8 opacity-60">
           <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
            <path d="M 0 25 Q 15 20 25 22 T 50 15 T 75 10 T 100 0" fill="none" stroke="#a855f7" strokeWidth="2" />
            <circle cx="100" cy="0" r="3" fill="#a855f7" />
            <circle cx="75" cy="10" r="2" fill="#a855f7" />
            <circle cx="50" cy="15" r="2" fill="#a855f7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default StatCard;
