import React, { useState } from "react";

const initialFocus = [
  { label: "Solve 2 DSA Problems", checked: true },
  { label: "Update Resume", checked: false },
  { label: "Apply to 3 Jobs", checked: false },
  { label: "Learn React Hooks", checked: false },
];

const TodaysFocus = () => {
  const [tasks, setTasks] = useState(initialFocus);

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, taskIndex) =>
        taskIndex === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <section className="card card--medium focus-card">
      <div className="card__header">
        <div>
          <p className="card__eyebrow">Today&rsquo;s Focus</p>
          <h3>Stay on track</h3>
        </div>
      </div>

      <div className="focus-list">
        {tasks.map((task, index) => (
          <label key={task.label} className={`focus-item ${task.checked ? "focus-item--checked" : ""}`}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(index)}
            />
            <span>{task.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default TodaysFocus;
