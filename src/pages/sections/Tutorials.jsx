import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/sections/Tutorials.css";
import tutorials from "./data/tutorialsData";

const Tutorials = () => {
  const navigate = useNavigate();

  const grouped = tutorials.reduce((acc, t) => {
    if (!acc[t.category]) acc[t.category] = [];
    acc[t.category].push(t);
    return acc;
  }, {});

  return (
    <div className="tutorials-page">
      <h1>🎓 Tutorials</h1>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="tutorial-section-block">
          <h2 className="category-title">{category}</h2>

          <div className="tutorials-grid">
            {grouped[category].map((t) => (
<div
  key={t.id}
  className="tutorial-card"
  onClick={() => navigate(`/app/tutorials/${t.id}`)}
>
  {/* TOP */}
  <div className="card-top">
    <span className="badge">{t.category}</span>

    <div className="card-stickers">
      <span className="sticker">🧠</span>
      <span className="sticker">🎯</span>
    </div>
  </div>

  {/* BODY */}
  <div className="card-body">
    <h3>{t.title}</h3>
    <p>{t.description}</p>
  </div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <div className="progress-wrapper">
      <span className="progress-label">Progress</span>
      <span className="progress-value">{t.progress}%</span>
    </div>

    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${t.progress}%` }}
      />
    </div>
  </div>
</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;