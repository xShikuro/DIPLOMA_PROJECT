import "../../style/sections/Dashboard.css"



export default function Dashboard({ showNotification, navigateTo }) {
    // STATS DATA
    const stats = [
        { icon: "fas fa-calendar-check", value: "12", label: "Sessions Completed", color: "red" },
        { icon: "fas fa-comments", value: "3", label: "Active Conversations", color: "pink" },
        { icon: "fas fa-fire", value: "28", label: "Day Streak", color: "crimson" },
        { icon: "fas fa-heart", value: "85%", label: "Wellness Score", color: "orange" }
    ];

    // DASHBOARD CARDS DATA
    const cards = [
        {
            icon: "fas fa-user-md",
            title: "Find Psychologist",
            desc: "Connect with licensed professionals",
            action: () => navigateTo("psychologists")
        },
        {
            icon: "fas fa-comments",
            title: "Supportive Chat",
            desc: "Anonymous peer support community",
            action: () => navigateTo("chat")
        },
        {
            icon: "fas fa-chart-line",
            title: "Progress Tracking",
            desc: "Monitor your mental health journey",
            action: () => showNotification("Progress tracking feature coming soon!", "info")
        },
        {
            icon: "fas fa-book",
            title: "Resources",
            desc: "Educational materials and exercises",
            action: () => showNotification("Resources section coming soon!", "info")
        }
    ];

    // RECENT ACTIVITY DATA
    const activity = [
        {
            icon: "fas fa-comment",
            color: "red",
            text: "New message from Dr. Sarah Johnson",
            time: "2 minutes ago",
            action: () => navigateTo("chat")
        },
        {
            icon: "fas fa-calendar",
            color: "pink",
            text: "Session scheduled for tomorrow at 3:00 PM",
            time: "1 hour ago",
            action: () => showNotification("Session details coming soon!", "info")
        },
        {
            icon: "fas fa-trophy",
            color: "crimson",
            text: "Achievement unlocked: 7-day streak!",
            time: "3 hours ago",
            action: () => showNotification("Achievement details coming soon!", "info")
        }
    ];

    return (
        <div id="dashboard" className="page active">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <p className="dashboard-subtitle">
                    Welcome back to your mental wellness journey
                </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {stats.map((s, i) => (
                    <div className="stat-card" key={i}>
                        <div className={`stat-icon ${s.color}`}>
                            <i className={s.icon}></i>
                        </div>
                        <div className="stat-value">{s.value}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Dashboard Grid */}
            <div className="dashboard-grid">
                {cards.map((c, i) => (
                    <div
                        className="dashboard-card"
                        key={i}
                        onClick={c.action}
                    >
                        <div className="dashboard-card-icon">
                            <i className={c.icon}></i>
                        </div>
                        <h3 className="dashboard-card-title">{c.title}</h3>
                        <p className="dashboard-card-description">{c.desc}</p>
                    </div>
                ))}
            </div>

            {/* Activity Feed */}
            <div className="activity-feed">
                <div className="activity-header">
                    <h2 className="activity-title">Recent Activity</h2>
                    <button
                        className="btn btn-secondary"
                        onClick={() => showNotification("All activity view coming soon!", "info")}
                    >
                        View All
                    </button>
                </div>

                <div className="activity-list">
                    {activity.map((a, i) => (
                        <div
                            className="activity-item"
                            key={i}
                            onClick={a.action}
                        >
                            <div className={`activity-icon ${a.color}`}>
                                <i className={a.icon}></i>
                            </div>
                            <div className="activity-content">
                                <div className="activity-text">{a.text}</div>
                                <div className="activity-time">{a.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
