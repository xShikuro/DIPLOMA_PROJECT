import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../style/sections/Contact.css"; // если у тебя есть css


const Contact = () => {
  const sendEmail = () => {
    console.log("Send Email clicked");
  };

  const makeCall = () => {
    console.log("Call Now clicked");
  };

  const startLiveChat = () => {
    console.log("Start Live Chat clicked");
  };

  const submitContactForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="contact page">
      <div className="contact-container">
        
        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Contact Us</h1>
          <p className="dashboard-subtitle">We're here to help</p>
        </div>

        {/* Contact grid */}
        <div className="contact-grid">
          {/* Email */}
          <div className="contact-card glass-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p className="text-secondary" style={{ margin: "1rem 0" }}>
              support@axios.com
            </p>
            <button className="btn btn-secondary" onClick={sendEmail}>
              Send Email
            </button>
          </div>

          {/* Phone */}
          <div className="contact-card glass-card">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p className="text-secondary" style={{ margin: "1rem 0" }}>
              1-800-AXIOS-HELP
            </p>
            <button className="btn btn-secondary" onClick={makeCall}>
              Call Now
            </button>
          </div>

          {/* Live Chat */}
          <div className="contact-card glass-card">
            <div className="contact-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Live Chat</h3>
            <p className="text-secondary" style={{ margin: "1rem 0" }}>
              Available 24/7
            </p>
            <button className="btn btn-secondary" onClick={startLiveChat}>
              Start Chat
            </button>
          </div>
        </div>

        {/* Emergency card */}
        <div className="emergency-card glass-card">
          <h3 style={{ color: "var(--neon-crimson)", marginBottom: "1rem" }}>
            <i className="fas fa-exclamation-triangle"></i> Emergency Resources
          </h3>

          <p className="text-secondary" style={{ marginBottom: "1rem" }}>
            If you're in crisis or having thoughts of self-harm, please reach out immediately:
          </p>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Crisis Text Line:</strong> Text HOME to 741741
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>National Suicide Prevention Lifeline:</strong> 988
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Trevor Project (LGBTQ+):</strong> 1-866-488-7386
            </li>
          </ul>
        </div>

        {/* Message form */}
        <div className="glass-card" style={{ marginTop: "2rem" }}>
          <h3 className="section-title">
            <i className="fas fa-paper-plane"></i> Send us a Message
          </h3>

          <form onSubmit={submitContactForm}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-input" placeholder="What's this about?" required />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" rows="5" placeholder="Your message..." required />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
