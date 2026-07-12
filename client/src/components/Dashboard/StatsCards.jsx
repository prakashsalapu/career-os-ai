import React from "react";
import { CheckCircle2, Briefcase, FileText, CalendarDays } from "lucide-react";

const cards = [
  {
    title: "DSA Solved",
    value: "187 Problems",
    description: "+12 this week",
    icon: CheckCircle2,
    variant: "purple",
  },
  {
    title: "Job Applications",
    value: "34 Applications",
    description: "5 Pending",
    icon: Briefcase,
    variant: "blue",
  },
  {
    title: "Resume Score",
    value: "82 / 100",
    description: "Strong progress",
    icon: FileText,
    variant: "indigo",
    progress: 82,
  },
  {
    title: "Weekly Goals",
    value: "5 / 7 Completed",
    description: "Keep the momentum",
    icon: CalendarDays,
    variant: "violet",
    progress: 72,
  },
];

const StatsCards = () => {
  return (
    <section className="stats-grid" aria-label="Quick stats">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <article key={card.title} className="stat-card">
            <div className="stat-card__top">
              <div className={`stat-card__icon stat-card__icon--${card.variant}`}>
                <Icon size={18} />
              </div>
              <span className="stat-card__label">{card.title}</span>
            </div>

            <div className="stat-card__body">
              <strong>{card.value}</strong>
              <p>{card.description}</p>
            </div>

            {typeof card.progress === "number" ? (
              <div className="stat-progress">
                <div className="stat-progress__bar" style={{ width: `${card.progress}%` }} />
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
};

export default StatsCards;
