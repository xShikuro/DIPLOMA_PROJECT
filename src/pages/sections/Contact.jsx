import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../style/sections/Contact.css";

const Contact = () => {
  const sendEmail = () => console.log("Send Email");
  const makeCall = () => console.log("Call Now");
  const startLiveChat = () => console.log("Start Chat");

  const submitContactForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="contact page">
      <div className="contact-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Contact Us</h1>
          <p className="dashboard-subtitle">We're here to help</p>
        </div>

        {/* CARDS */}
        <div className="contact-grid">
          {[
            { icon: "fa-envelope", title: "Email", text: "support@axios.com", action: sendEmail, btn: "Send Email" },
            { icon: "fa-phone", title: "Phone", text: "1-800-AXIOS-HELP", action: makeCall, btn: "Call Now" },
            { icon: "fa-comments", title: "Live Chat", text: "Available 24/7", action: startLiveChat, btn: "Start Chat" }
          ].map((item, i) => (
            <div className="glass-card contact-card" key={i}>
              <div className="contact-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>

              <h3>{item.title}</h3>
              <p className="contact-text">{item.text}</p>

              <button className="btn-primary" onClick={item.action}>
                {item.btn}
              </button>
            </div>
          ))}
        </div>

        {/* EMERGENCY */}
        <div className="glass-card emergency-card">
          <h3 className="section-title danger">
            <i className="fas fa-exclamation-triangle"></i> Emergency Resources
          </h3>

          <p className="contact-text">
            If you're in crisis or need immediate help:
          </p>

          <ul className="emergency-list">
            <li><strong>Crisis Text Line:</strong> 741741</li>
            <li><strong>Suicide Lifeline:</strong> 988</li>
            <li><strong>Trevor Project:</strong> 1-866-488-7386</li>
          </ul>
        </div>

        {/* FORM */}
        <div className="glass-card contact-form">
          <h3 className="section-title">
            <i className="fas fa-paper-plane"></i> Send us a Message
          </h3>

          <form onSubmit={submitContactForm}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" placeholder="What's this about?" required />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" rows="5" placeholder="Your message..." required />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;