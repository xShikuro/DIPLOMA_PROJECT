import { useState } from "react";
import "../../style/sections/Profile.css"



export default function ProfilePage() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);

    const [nickname, setNickname] = useState("Alex");
    const [email, setEmail] = useState("alex@example.com");

    const showNotification = (msg, type) => {
        console.log(type.toUpperCase() + ":", msg);
        // Вставь свой UI-нотификатор
    };

    const changeAvatar = () => {
        showNotification("Avatar change feature coming soon!", "info");
    };

    const updateProfile = (e) => {
        e.preventDefault();
        showNotification("Profile updated successfully!", "success");
    };

    const toggle = (val, setter, label) => {
        setter(!val);
        showNotification(
            `${label} ${!val ? "enabled" : "disabled"}`,
            "success"
        );
    };

    return (
        <div id="profile" className="page">
            <div className="profile-container">

                {/* HEADER */}
                <div className="dashboard-header">
                    <h1 className="dashboard-title">Profile</h1>
                    <p className="dashboard-subtitle">Manage your account and settings</p>
                </div>

                {/* AVATAR */}
                <div className="profile-header glass-card">
                    <div className="profile-avatar-container">
                        <img
                            src="https://picsum.photos/seed/profile/120/120"
                            alt="Profile"
                            className="profile-avatar"
                        />
                        <div className="profile-avatar-edit" onClick={changeAvatar}>
                            <i className="fas fa-camera"></i>
                        </div>
                    </div>

                    <div className="profile-info">
                        <h1>Alex</h1>
                        <p style={{ color: "var(--text-secondary)" }}>
                            Member since October 2023
                        </p>

                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            <span className="badge red">
                                <i className="fas fa-shield-alt"></i> Verified
                            </span>
                            <span className="badge orange">
                                <i className="fas fa-fire"></i> 28 Day Streak
                            </span>
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="profile-stats">
                    <div className="stat-card">
                        <div className="stat-icon red">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <div className="stat-value">12</div>
                        <div className="stat-label">Sessions</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon pink">
                            <i className="fas fa-comments"></i>
                        </div>
                        <div className="stat-value">3</div>
                        <div className="stat-label">Active Chats</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon crimson">
                            <i className="fas fa-fire"></i>
                        </div>
                        <div className="stat-value">28</div>
                        <div className="stat-label">Day Streak</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon orange">
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className="stat-value">85%</div>
                        <div className="stat-label">Wellness Score</div>
                    </div>
                </div>

                {/* ACCOUNT SETTINGS */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-user-edit"></i> Account Settings
                    </h2>

                    <div className="glass-card">
                        <form
                            onSubmit={updateProfile}
                            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                        >
                            <div className="form-group">
                                <label className="form-label">Nickname</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>

                {/* NOTIFICATION SETTINGS */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-bell"></i> Notification Preferences
                    </h2>

                    <div className="glass-card">
                        <div className="settings-group">

                            {/* EMAIL */}
                            <div className="settings-item">
                                <div>
                                    <div style={{ fontWeight: 500 }}>Email Notifications</div>
                                    <div className="subtext">Receive updates via email</div>
                                </div>

                                <div
                                    className={`toggle-switch ${emailNotifications ? "active" : ""}`}
                                    onClick={() =>
                                        toggle(
                                            emailNotifications,
                                            setEmailNotifications,
                                            "Email Notifications"
                                        )
                                    }
                                >
                                    <div className="toggle-slider"></div>
                                </div>
                            </div>

                            {/* PUSH */}
                            <div className="settings-item">
                                <div>
                                    <div style={{ fontWeight: 500 }}>Push Notifications</div>
                                    <div className="subtext">Get instant alerts</div>
                                </div>

                                <div
                                    className={`toggle-switch ${pushNotifications ? "active" : ""}`}
                                    onClick={() =>
                                        toggle(
                                            pushNotifications,
                                            setPushNotifications,
                                            "Push Notifications"
                                        )
                                    }
                                >
                                    <div className="toggle-slider"></div>
                                </div>
                            </div>

                            {/* SMS */}
                            <div className="settings-item">
                                <div>
                                    <div style={{ fontWeight: 500 }}>SMS Alerts</div>
                                    <div className="subtext">Important updates via text</div>
                                </div>

                                <div
                                    className={`toggle-switch ${smsAlerts ? "active" : ""}`}
                                    onClick={() =>
                                        toggle(smsAlerts, setSmsAlerts, "SMS Alerts")
                                    }
                                >
                                    <div className="toggle-slider"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
