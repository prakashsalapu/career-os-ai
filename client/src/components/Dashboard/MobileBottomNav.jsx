import React from 'react';
import { LayoutDashboard, Map, Plus, Briefcase, User } from 'lucide-react';

const MobileBottomNav = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0B0F19]/90 backdrop-blur-md border-t border-[#1e293b] pb-safe pt-2 px-6 flex justify-between items-center z-50">
      <NavItem icon={<LayoutDashboard size={24} />} label="Dashboard" active />
      <NavItem icon={<Map size={24} />} label="Roadmaps" />
      
      <div className="relative -top-5">
        <button className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
          <Plus size={28} />
        </button>
      </div>
      
      <NavItem icon={<Briefcase size={24} />} label="Tools" />
      <NavItem icon={<User size={24} />} label="Profile" />
    </div>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <a href="#" className={`flex flex-col items-center gap-1 p-2 ${active ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'}`}>
      <span className={active ? 'drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]' : ''}>{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </a>
  );
};

export default MobileBottomNav;
