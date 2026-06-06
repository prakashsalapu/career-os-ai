import React from "react";

const progressItems = [
  { label: "DSA Progress", value: 70 },
  { label: "Resume Completion", value: 85 },
  { label: "Projects Completion", value: 60 },
  { label: "Interview Preparation", value: 40 },
];

const CareerProgress = () => {
  return (
    <section className="card card--medium progress-card">
      <div className="card__header">
        <div>
          <p className="card__eyebrow">Career Progress</p>
          <h3>Track your growth</h3>
        </div>
      </div>

      <div className="progress-list">
        {progressItems.map((item) => (
          <div key={item.label} className="progress-item">
            <div className="progress-item__label">
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
            <div className="progress-bar">
              <div className="progress-bar__fill" style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerProgress;
