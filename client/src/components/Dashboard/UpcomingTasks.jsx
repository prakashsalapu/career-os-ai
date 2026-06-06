import React from "react";

const upcomingTasks = [
  { task: "Mock Interview", schedule: "Tomorrow" },
  { task: "Resume Review", schedule: "Friday" },
  { task: "Apply to Amazon", schedule: "Saturday" },
];

const UpcomingTasks = () => {
  return (
    <section className="card card--small upcoming-card">
      <div className="card__header">
        <div>
          <p className="card__eyebrow">Upcoming Tasks</p>
          <h3>Next on your list</h3>
        </div>
      </div>

      <div className="upcoming-list">
        {upcomingTasks.map((item) => (
          <div key={item.task} className="upcoming-item">
            <div>
              <h4>{item.task}</h4>
              <span>{item.schedule}</span>
            </div>
            <div className="upcoming-pill">{item.schedule}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTasks;
