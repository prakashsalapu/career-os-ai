import React from "react";

const chartPoints = [72, 88, 65, 95, 84, 78, 92];

const ProductivityCard = () => {
  return (
    <section className="card card--small productivity-card">
      <div className="card__header">
        <div>
          <p className="card__eyebrow">Productivity</p>
          <h3>Focus Hours This Week</h3>
        </div>
      </div>

      <div className="productivity-body">
        <div className="productivity-value">
          <strong>24.5</strong>
          <span>Hours</span>
        </div>

        <div className="productivity-chart">
          {chartPoints.map((height, index) => (
            <div key={index} className="productivity-bar" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductivityCard;
