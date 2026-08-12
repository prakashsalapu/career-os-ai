import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  Code2,
  FileText,
  Users,
  BookOpen,
  Bot,
  Settings,
  LogOut,
  CodeSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
      exact: true,
    },
    {
      icon: Compass,
      label: "Roadmaps",
      path: "/dashboard/roadmaps",
    },
    {
      icon: Code2,
      label: "DSA Tracker",
      path: "/dashboard/dsa",
    },
    {
      icon: FileText,
      label: "Resume Builder",
      path: "/dashboard/resume",
    },
    {
      icon: Users,
      label: "Mock Interviews",
      path: "/dashboard/mock-interviews",
    },
    {
      icon: BookOpen,
      label: "Notes",
      path: "/dashboard/notes",
    },
    {
      icon: Bot,
      label: "AI Mentor",
      path: "/dashboard/mentor",
      badge: "Beta",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-[#0B1120] border-r border-slate-800 transition-all duration-300 flex flex-col
        ${
          sidebarOpen ?"w-64":"w-20"
        }`}
      >
        {/* Logo */}
<div
  className={`h-20 border-b border-slate-800 flex items-center ${
    sidebarOpen ? "justify-between px-4" : "justify-center"
  }`}
>
  <div className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-md flex-shrink-0">
      <CodeSquare size={22} className="text-white" />
    </div>

    {sidebarOpen && (
      <h1 className="text-xl font-bold text-white whitespace-nowrap">
        CareerOS
      </h1>
    )}
  </div>

  {/* Show only when sidebar is open */}
  {sidebarOpen && (
    <button
      onClick={() => setSidebarOpen(false)}
      className="w-10 h-10 rounded-full bg-[#1E293B] border border-slate-700 hover:bg-[#2A364F] hover:border-slate-600 transition-all duration-200 flex items-center justify-center shadow-md"
    >
      <ChevronLeft size={18} className="text-white" />
    </button>
  )}
</div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-5 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = item.exact
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
  key={index}
  to={item.path}
  onClick={() => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  }}
  className={`group flex items-center ${
    sidebarOpen ? "justify-start gap-3 px-4" : "justify-center"
  } py-3 rounded-xl transition-all duration-200 ${
    isActive
      ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 text-indigo-400"
      : "text-slate-400 hover:bg-slate-800 hover:text-white"
  }`}
>
  <item.icon
    size={20}
    className={
      isActive
        ? "text-indigo-400"
        : "text-slate-500 group-hover:text-white"
    }
  />

  {sidebarOpen && (
    <span className="font-medium">{item.label}</span>
  )}

  {sidebarOpen && item.badge && (
    <span className="ml-auto text-[10px] px-2 py-1 rounded-full bg-purple-600 text-white">
      {item.badge}
    </span>
  )}
</NavLink>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 p-3 space-y-2">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center ${
                sidebarOpen
                  ? "justify-start gap-3"
                  : "justify-center"
              } px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-slate-800 text-indigo-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Settings size={19} />
            {sidebarOpen && <span>Settings</span>}
          </NavLink>

          <button
            onClick={logout}
            className={`w-full flex items-center ${
              sidebarOpen
                ? "justify-start gap-3"
                : "justify-center"
            } px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition`}
          >
            <LogOut size={19} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;