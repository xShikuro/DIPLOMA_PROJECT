import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import TopBar from "../components/Layout/TopBar";

// pages
import Dashboard from "./sections/Dashboard";
import Psychologists from "./sections/Psychologists";
import Chat from "./sections/Chat";
import Reviews from "./sections/Reviews";
import Profile from "./sections/Profile";
import FAQ from "./sections/FAQ";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Tutorials from "./sections/Tutorials";
import TutorialDetail from "./sections/TutorialDetail";
import Sessions from "./sections/Sessions";


const MainPage = ({ user, setUser }) => {
  return (
    <div className="main-page" style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          background: "#0a0e1a",
          color: "#e0e6ed",
          lineHeight: 1.6,
          overflowX: "hidden",
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 0, 64, 0.05) 0%, transparent 80%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 80%),
            radial-gradient(circle at 40% 20%, rgba(255, 71, 87, 0.05) 0%, transparent 80%)
          `,
        }}
      >
        <TopBar user={user} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/app/psychologists" element={<Psychologists />} />
          <Route path="/app/tutorials" element={<Tutorials />} />
          <Route path="/app/tutorials/:id" element={<TutorialDetail />} />
          <Route path="/app/chat" element={<Chat />} />
          <Route path="/app/sessions" element={<Sessions />} />
          <Route path="/app/reviews" element={<Reviews />} />
          <Route path="/app/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/app/faq" element={<FAQ />} />
          <Route path="/app/about" element={<About />} />
          <Route path="/app/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainPage;