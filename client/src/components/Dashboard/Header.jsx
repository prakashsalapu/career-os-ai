import React from 'react';
import { Search, Bell, Sun, Calendar, Plus, Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { user } = useAuth();
  
  const userName = user?.name || 'Guest User';
  const avatarUrl = user?.name 
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff&rounded=true`
    : 'https://ui-avatars.com/api/?name=Guest&background=6366f1&color=fff&rounded=true';

  return (
    <header className="h-20 border-b border-[#1e293b] bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8">
      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
        <Menu size={24} />
      </button>

      {/* Search Bar - Hidden on small screens */}
      <div className="hidden md:flex items-center flex-1 max-w-md relative">
        <Search size={18} className="absolute left-4 text-slate-500" />
        <input 
          type="text" 
          placeholder="Search for problems, notes..." 
          className="w-full bg-[#111827] border border-[#1e293b] text-sm text-slate-200 rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
        />
        <div className="absolute right-3 flex gap-1">
          <kbd className="px-2 py-1 bg-[#1e293b] text-slate-400 rounded text-[10px] font-medium border border-slate-700">⌘</kbd>
          <kbd className="px-2 py-1 bg-[#1e293b] text-slate-400 rounded text-[10px] font-medium border border-slate-700">K</kbd>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 ml-auto">
        {/* Streak & Coins (Gamification) */}
        <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20">
            <span>🔥</span>
            <span>{user?.dashboardMetrics?.learningStreak || 0} Day Streak</span>
          </div>
          <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-full border border-indigo-500/20">
            <span>⚡</span>
            <span>{user?.dashboardMetrics?.dsaProgress || 0} XP</span>
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-800">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0B0F19]"></span>
        </button>

        {/* Profile Dropdown */}
        <button className="flex items-center gap-3 pl-2 lg:border-l border-[#1e293b]">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-200">{userName}</p>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">PRO MEMBER</p>
          </div>
          <img 
            src={avatarUrl} 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-indigo-500/30 object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
