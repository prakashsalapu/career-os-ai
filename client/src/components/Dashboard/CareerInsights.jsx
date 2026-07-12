import React from "react";
import { TrendingUp } from "lucide-react";

const CareerInsights = () => {
  return (
    <section className="card card--large insights-card">
      <div className="card__header card__header--split">
        <div>
          <p className="card__eyebrow">Career Insights</p>
          <h3>Momentum matters</h3>
        </div>
        <div className="insights-tag">
          <TrendingUp size={16} />
          <span>+12 vs last week</span>
        </div>
      </div>

      <p className="insights-copy">
        You solved 12 more problems this week than last week. Keep the momentum going.
      </p>
    </section>
  );
};

export default CareerInsights;
