import React from "react";
import "../../style/components/TopBar.css"; // если стили вынесены в отдельный файл

const TopBar = ({ handleSearch, showNotifications, toggleUserMenu }) => {
  return (
    <header className="top-bar">
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>

        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onKeyUp={handleSearch}
        />
      </div>

      <div className="top-bar-actions">
        <div className="notification-btn" onClick={showNotifications}>
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>

        <div className="user-menu" onClick={toggleUserMenu}>
          <img
            src="https://picsum.photos/seed/user/36/36"
            alt="User"
            className="user-avatar"
          />
          <span className="user-name">Alex</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
