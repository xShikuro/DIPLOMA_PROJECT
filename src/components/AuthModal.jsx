import React, { useState } from "react";
import "../style/components/AuthModal.css";
import { registerUser, loginUser } from "../api/auth";




function AuthModal({ onClose }) {
  const [tab, setTab] = useState("login");
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [logs, setLogs] = useState([]);

  const log = (msg) => setLogs((prev) => [...prev, msg]);



 {/* UPDATING-INFO */}
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };







  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      log("Passwords do not match!");
      return;
    }
  
    try {
      await registerUser({
        nickname: formData.nickname,
        email: formData.email,
        password: formData.password,
      });
  
      const loginRes = await loginUser({
        email: formData.email,
        password: formData.password,
      });
  
      localStorage.setItem("token", loginRes.data.token);
      log("Registration successful!");
      onClose();
      window.location.reload();
    } catch (e) {
      log("Registration error: " + (e.response?.data?.message || e.message));
    }
  };









const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await loginUser({
      email: formData.email,
      password: formData.password,
    });

    localStorage.setItem("token", res.data.token);
    log("Login successful!");
    console.log(res.data);
    onClose();
    window.location.reload();
  } catch (e) {
    log("Login error: " + (e.response?.data?.message || e.message));
  }
};










  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <h2 className="auth-title">Welcome to Axios</h2>
          <p style={{ color: "var(--text-secondary)" }}>Sign in to your account</p>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">
          <div className={`auth-tab ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>
            Login
          </div>
          <div className={`auth-tab ${tab === "register" ? "active" : ""}`} onClick={() => setTab("register")}>
            Register
          </div>
        </div>

        {/* Login Form */}
        {tab === "login" && (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Login
            </button>
          </form>
        )}

        {/* Register Form */}
        {tab === "register" && (
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label className="form-label">Nickname</label>
              <input
                type="text"
                className="form-input"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="Choose a nickname"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Register
            </button>
          </form>
        )}

        {/* LOGs */}
        {logs.length > 0 && (
          <div style={{ marginTop: "10px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
            {logs.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
