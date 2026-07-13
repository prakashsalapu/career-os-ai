import React from "react";
import { useOutletContext } from "react-router-dom";
import StatCard from "../components/Dashboard/StatCard";
import PreparationSummary from "../components/Dashboard/PreparationSummary";
import ContinueLearning from "../components/Dashboard/ContinueLearning";
import AIMentor from "../components/Dashboard/AIMentor";
import { RoadmapProgress, RecentActivity, UpcomingInterview, ResumeScoreWidget } from "../components/Dashboard/ActivityWidgets";
import { Flame, BrainCircuit, Target, BookOpen } from "lucide-react";

const Dashboard = () => {
  const { user } = useOutletContext();

  const metrics = user?.dashboardMetrics || {
    learningStreak: 0,
    dsaProgress: 0,
    dsaTotal: 1200,
    mockInterviews: 0,
    resumeScore: 0
  };

  const firstName = user?.name ? user.name.split(' ')[0] : 'Guest';

  return (
    <>
      {/* Greeting Area */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Good morning, {firstName}! 👋</h1>
        <p className="text-slate-400 text-sm lg:text-base">Stay consistent and your future self will thank you.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Main Column */}
        <div className="flex-1 flex flex-col gap-6 w-full lg:w-2/3 xl:w-3/4">
          
          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard 
              icon={Flame} 
              iconBg="bg-gradient-to-br from-purple-500 to-indigo-500" 
              title="Learning Streak" 
              value={metrics.learningStreak} 
              subtitle="days" 
              trend="Keep it up!" 
              isStreak={true} 
            />
            <StatCard 
              icon={BrainCircuit} 
              iconBg="bg-gradient-to-br from-blue-500 to-cyan-500" 
              title="DSA Progress" 
              value={metrics.dsaProgress} 
              subtitle={`/ ${metrics.dsaTotal}`} 
              trend="Problems Solved" 
              progressColor="bg-blue-500" 
            />
            <StatCard 
              icon={Target} 
              iconBg="bg-gradient-to-br from-emerald-500 to-teal-500" 
              title="Mock Interviews" 
              value={metrics.mockInterviews} 
              trend="Completed" 
              progressColor="bg-emerald-500" 
            />
            <StatCard 
              icon={BookOpen} 
              iconBg="bg-gradient-to-br from-orange-400 to-amber-500" 
              title="Resume Score" 
              value={metrics.resumeScore} 
              subtitle="/ 100" 
              trend="Great Score! 🎉" 
              progressColor="bg-orange-500" 
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 gap-6 min-h-[320px]">
            <div className="h-full">
              <PreparationSummary />
            </div>
          </div>

          {/* Continue Learning */}
          <div className="mt-4">
            <ContinueLearning />
          </div>

          {/* Bottom widgets for Desktop */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <RoadmapProgress />
            <RecentActivity />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-6">
          <AIMentor />
          <ResumeScoreWidget score={metrics.resumeScore} />
          <UpcomingInterview />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
