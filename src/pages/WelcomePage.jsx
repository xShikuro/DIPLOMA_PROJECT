import "../style/pages/WelcomePage.css";




function WelcomePage({ onEnter }) {
  return (
    <div id="welcome" className="page active">
      <div className="welcome-screen">
        <div className="welcome-grid"></div>

        <div className="welcome-content">
          <h1 className="welcome-logo">AXIOS</h1>
          <p className="welcome-subtitle">
            Advanced Psychological Support Platform
          </p>
          <button className="welcome-btn" onClick={onEnter}>
            Enter Platform <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
