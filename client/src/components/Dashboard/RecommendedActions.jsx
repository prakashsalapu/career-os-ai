import React from "react";

const actions = [
  "Improve Resume Score",
  "Complete Weekly Goals",
  "Practice Arrays",
  "Apply to 5 More Jobs",
];

const RecommendedActions = () => {
  return (
    <section className="card card--large actions-card">
      <div className="card__header">
        <div>
          <p className="card__eyebrow">Recommended Actions</p>
          <h3>Next steps to keep moving</h3>
        </div>
      </div>

      <div className="actions-list">
        {actions.map((label) => (
          <div key={label} className="action-item">
            <div>
              <h4>{label}</h4>
              <p>Finish this task to stay ahead of your goals.</p>
            </div>
            <button className="dashboard-button dashboard-button-tertiary">Take action</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedActions;
