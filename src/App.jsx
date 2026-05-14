// App.jsx
import React, { useState, useEffect, useRef } from "react";
import MainPage from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";
import AuthModal from "./components/AuthModal";
import ChatWidget from "./components/ChatWidget";
import { getMe } from "./api/auth";

import "./style/App.css";

function App() {
  const [user, setUser] = useState(null);
  const [showMain, setShowMain] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Сохраняем таймеры, чтобы можно было отменить
  const fadeTimerRef = useRef(null);
  const showTimerRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) return;
  
    fadeTimerRef.current = setTimeout(() => setFadeOut(true), 3000);
    showTimerRef.current = setTimeout(() => setShowModal(true), 4000);
  
    return () => {
      clearTimeout(fadeTimerRef.current);
      clearTimeout(showTimerRef.current);
    };
  }, []);









  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) return;
  
    const fetchUser = async () => {
      try {
        const res = await getMe(token);
        setUser(res.data.user);
        setShowMain(true);
        setShowModal(false);
      } catch (error) {
        console.log("Ошибка получения пользователя:", error);
        localStorage.removeItem("token");
      }
    };
  
    fetchUser();
  }, []);





  const handleEnter = () => {
    // Пользователь нажал “Войти” раньше — очищаем все таймеры
    clearTimeout(fadeTimerRef.current);
    clearTimeout(showTimerRef.current);

    setFadeOut(true);
    // Открываем модалку вручную через 1с
    setTimeout(() => setShowModal(true), 1000);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowMain(true);
  };





  useEffect(() => {
  const originalTitle = "Axios";

  const messages = [
    "Stay focused",
    "Back to building",
    "Discipline > motivation",
  ];

  let interval;

  const handleBlur = () => {
    let i = 0;

    interval = setInterval(() => {
      document.title = messages[i % messages.length];
      i++;
    }, 2000);
  };

  const handleFocus = () => {
    clearInterval(interval);
    document.title = originalTitle;
  };

  window.addEventListener("blur", handleBlur);
  window.addEventListener("focus", handleFocus);

  return () => {
    clearInterval(interval);
    window.removeEventListener("blur", handleBlur);
    window.removeEventListener("focus", handleFocus);
  };
}, []);











  return (
    <div className="App">
      {/* Welcome экран */}
      {!showMain && !showModal && (
        <div className={`fade ${fadeOut ? "fade-out" : "fade-in"}`}>
          <WelcomePage onEnter={handleEnter} />
        </div>
      )}

      {/* Модалка авторизации */}
      {showModal && <AuthModal onClose={handleModalClose} />}

      {/* Основная страница */}
      {showMain && !showModal && (
        <div className="fade fade-in">
          <MainPage user={user} setUser={setUser} />
        </div>
      )}

      {showMain && <ChatWidget />}

    </div>
  );
}


export default App;
