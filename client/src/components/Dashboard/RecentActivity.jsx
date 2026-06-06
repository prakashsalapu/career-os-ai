import React from "react";
import { Sparkles, Briefcase, CheckCircle2, FileText } from "lucide-react";

const activities = [
  {
    icon: Sparkles,
    title: "Resume Updated",
    description: "Polished the summary and skills section.",
    time: "Today · 9:15 AM",
  },
  {
    icon: Briefcase,
    title: "Applied to Frontend Developer at Google",
    description: "Submitted application with updated resume.",
    time: "Yesterday · 4:20 PM",
  },
  {
    icon: CheckCircle2,
    title: "Solved Two Sum (LeetCode)",
    description: "Completed challenge with optimized solution.",
    time: "Yesterday · 1:00 PM",
  },
  {
    icon: FileText,
    title: "Completed React Revision",
    description: "Reviewed hooks, state, and component patterns.",
    time: "Monday · 6:30 PM",
  },
];

const RecentActivity = () => {
  return (
    <section className="card card--large recent-activity-card">
      <div className="card__header">
        <div>
          <p className="card__eyebrow">Recent Activity</p>
          <h3>What you finished recently</h3>
        </div>
      </div>

      <div className="timeline">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={activity.title} className="timeline-item">
              <div className="timeline-item__meta">
                <span className="timeline-dot" />
                <div className="timeline-icon">
                  <Icon size={14} />
                </div>
              </div>

              <div className="timeline-item__content">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
                <span>{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentActivity;
