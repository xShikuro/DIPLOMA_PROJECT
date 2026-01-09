// App.jsx
import React, { useState, useEffect, useRef } from "react";
import MainPage from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";
import AuthModal from "./components/AuthModal";
import "./style/App.css";

function App() {
  const [showMain, setShowMain] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Сохраняем таймеры, чтобы можно было отменить
  const fadeTimerRef = useRef(null);
  const showTimerRef = useRef(null);

  useEffect(() => {
    // Стартуем анимацию и показ модалки, только если пользователь не нажал "Войти"
    fadeTimerRef.current = setTimeout(() => setFadeOut(true), 3000);
    showTimerRef.current = setTimeout(() => setShowModal(true), 4000);

    return () => {
      clearTimeout(fadeTimerRef.current);
      clearTimeout(showTimerRef.current);
    };
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
          <MainPage />
        </div>
      )}
    </div>
  );
}

export default App;
