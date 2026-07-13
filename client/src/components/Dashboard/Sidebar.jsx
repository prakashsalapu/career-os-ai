import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, Code2, FileText, Users, BookOpen, Bot, Settings, LogOut, CodeSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', exact: true },
    { icon: Compass, label: 'Roadmaps', path: '/dashboard/roadmaps' },
    { icon: Code2, label: 'DSA Tracker', path: '/dashboard/dsa' },
    { icon: FileText, label: 'Resume Builder', path: '/dashboard/resume' },
    { icon: Users, label: 'Mock Interviews', path: '/dashboard/mock-interviews' },
    { icon: BookOpen, label: 'Notes', path: '/dashboard/notes' },
    { icon: Bot, label: 'AI Mentor', path: '/dashboard/mentor', badge: 'Beta' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0B0F19] border-r border-[#1e293b] hidden lg:flex flex-col z-40">
      {/* Logo */}
      <div className="h-20 flex items-center px-8 border-b border-[#1e293b]">
        <div className="flex items-center gap-2 text-white">
          <CodeSquare size={24} className="text-cyan-400" />
          <span className="text-xl font-bold font-outfit tracking-tight">CareerOS</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => {
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={index}
                to={item.path}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-400 font-medium border border-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={isActive ? 'text-indigo-400' : 'text-slate-500'} />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-[#1e293b] space-y-1">
        <NavLink 
          to="/dashboard/settings"
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive ? 'text-indigo-400 bg-slate-800/50' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </NavLink>
        <button 
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
        >
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
