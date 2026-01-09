import React from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../style/components/Sidebar.css";



const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`;

  return (
    <aside className="sidebar">
      {/* Логотип */}
      <div className="logo">
        <div className="logo-icon">
          <i className="fas fa-brain"></i>
        </div>
        <div className="logo-text">AXIOS</div>
      </div>

      {/* Навигация */}
      <nav className="nav-menu">
        <NavLink to="/" end className={linkStyle}>
          <i className="fas fa-home nav-icon"></i>
          <span className="nav-text">Dashboard</span>
        </NavLink>

        <NavLink to="/app/psychologists" className={linkStyle}>
          <i className="fas fa-user-md nav-icon"></i>
          <span className="nav-text">Psychologists</span>
        </NavLink>

        <NavLink to="/app/chat" className={linkStyle}>
          <i className="fas fa-comments nav-icon"></i>
          <span className="nav-text">Chat</span>
        </NavLink>

        <NavLink to="/app/reviews" className={linkStyle}>
          <i className="fas fa-star nav-icon"></i>
          <span className="nav-text">Reviews</span>
        </NavLink>

        <NavLink to="/app/profile" className={linkStyle}>
          <i className="fas fa-user nav-icon"></i>
          <span className="nav-text">Profile</span>
        </NavLink>

        <NavLink to="/app/faq" className={linkStyle}>
          <i className="fas fa-question-circle nav-icon"></i>
          <span className="nav-text">FAQ</span>
        </NavLink>

        <NavLink to="/app/about" className={linkStyle}>
          <i className="fas fa-info-circle nav-icon"></i>
          <span className="nav-text">About</span>
        </NavLink>

        <NavLink to="/app/contact" className={linkStyle}>
          <i className="fas fa-envelope nav-icon"></i>
          <span className="nav-text">Contact</span>
        </NavLink>
      </nav>

      {/* Футер */}
      <div className="sidebar-footer">
        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={() => console.log("Logout clicked")}
        >
          <i className="fas fa-sign-out-alt"></i>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
