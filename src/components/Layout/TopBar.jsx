import { useState, useRef, useEffect } from "react";
import "../../style/components/TopBar.css";

const TopBar = ({ user, handleSearch, showNotifications, navigateTo }) => {

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const [moodIndex, setMoodIndex] = useState(0);
  const moods = ["😊 Good", "😐 Okay", "😔 Bad"];

  const menuRef = useRef(null);


  {/*  TIME-DATE-QUOTE-ONLINE */}
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  // WEATHER
  const [weather, setWeather] = useState("...");

  // QUOTE
  const [quote, setQuote] = useState("Loading...");

  // ONLINE USERS
  const [onlineUsers, setOnlineUsers] = useState(650);
  const [trend, setTrend] = useState("up");

  // TIME
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setDate(
        now.toLocaleDateString([], {
          day: "numeric",
          month: "short",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  {/*  TIME-DATE-QUOTE-ONLINE */}






  {/* Weather */}
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=1edf8416377d034c6e523f92d2dad6f9"
        );
        const data = await res.json();

        setWeather(`${Math.round(data.main.temp)}°C`);
      } catch {
        setWeather("—");
      }
    };

    fetchWeather();
  }, []);
  {/* Weather */}




  
{/* Quote */}
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();

        setQuote(`${data[0].q} — ${data[0].a}`);
      } catch {
        setQuote("Stay focused. Keep going.");
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 25000);
    return () => clearInterval(interval);
  }, []);
  {/* Quote */}








  {/* ONLINE */}
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers((prev) => {
        const hour = new Date().getHours();

        let baseMin = 500;
        let baseMax = 800;

        if (hour >= 9 && hour <= 23) {
          baseMin = 650;
          baseMax = 900;
        }

        let change = Math.floor(Math.random() * 11) - 5;
        let next = prev + change;

        if (next < baseMin) next = baseMin;
        if (next > baseMax) next = baseMax;

        setTrend(next > prev ? "up" : next < prev ? "down" : "same");

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  {/* ONLINE */}




  {/* CLOSE MENU */}
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    {/* CLOSE MENU */}








  return (
    <header className="top-bar">


      {/* SEARCH-BAR */}
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>

        <input
          type="text"
          className="search-input"
          placeholder="Search psychologists, chats..."
          onFocus={() => setShowSearchDropdown(true)}
          onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
          onKeyUp={handleSearch}
        />

        {showSearchDropdown && (
          <div className="search-dropdown">
            <div onClick={() => navigateTo("psychologists")}>
              Anxiety specialist
            </div>
            <div onClick={() => navigateTo("chat")}>
              AI Support Chat
            </div>
          </div>
        )}
      </div>
      {/* SEARCH-BAR */}








      {/* TOPBAR-CENTER */}
      <div className="topbar-center">

        <div className="center-row">
          <div>
            <i className="fas fa-clock"></i>
            <span>{time}</span>
          </div>

          <div>
            <i className="fas fa-calendar"></i>
            <span>{date}</span>
          </div>

          <div>
            <i className="fas fa-cloud-sun"></i>
            <span>{weather}</span>
          </div>
        </div>

        <div className="topbar-ticker">
          <div className="ticker-track">
            <span>{quote}</span>
          </div>
        </div>

      </div>
        {/* TOPBAR-CENTER */}













      {/* ACTIONS */}
      <div className="top-bar-actions">

        {/* ONLINE right-sdie */}
        <div className="online-block small">
          <span className="online-dot"></span>
          <i className="fas fa-users"></i>
          <span>{onlineUsers}</span>
          {trend === "up" && <i className="fas fa-arrow-up trend up"></i>}
          {trend === "down" && <i className="fas fa-arrow-down trend down"></i>}
        </div>

        {/* MOOD */}
        <div
          className="topbar-status"
          onClick={() => setMoodIndex((moodIndex + 1) % moods.length)}
        >
          {moods[moodIndex]}
        </div>

        {/* NOTIFICATION */}
        <div className="notification-btn" onClick={showNotifications}>
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>

        {/* USER */}
        <div className="user-menu" ref={menuRef}>
          <div
            className="user-trigger"
            onClick={() => setShowUserMenu(prev => !prev)}
          >
            <img
              src={
                user?.avatar
                  ? `http://localhost:4000/uploads/${user.avatar}`
                  : "https://picsum.photos/seed/user/36/36"
              }
              className="user-avatar"
            />
            <span>{user?.nickname || "Guest"}</span>
            <i className="fas fa-chevron-down"></i>
          </div>

          {showUserMenu && (
            <div className="user-dropdown" onClick={(e) => e.stopPropagation()}>
              <div onClick={() => document.body.classList.toggle("dark")}>
                <i className="fas fa-moon"></i> Dark Mode
              </div>

              <div
                className="danger"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default TopBar;