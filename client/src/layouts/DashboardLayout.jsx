import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import MobileBottomNav from "../components/Dashboard/MobileBottomNav";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "lucide-react";

const DashboardLayout = () => {
  const { user, loading, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !token) {
      navigate('/login');
    }
  }, [loading, token, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center">
        <Loader className="animate-spin text-cyan-400" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden pb-20 lg:pb-0">
      <Sidebar />
      <MobileBottomNav />

      <div className="lg:pl-64 flex flex-col min-h-screen transition-all duration-300">
        <Header />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <Outlet context={{ user }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
