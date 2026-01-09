import { useState } from "react";
import "../../style/sections/FAQ.css"

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggleFAQ = () => {
    setOpen(!open); // аналог item.classList.toggle('active')
  };

  return (
    <div className={`faq-item ${open ? "active" : ""}`} onClick={toggleFAQ}>
      <div className="faq-question">
        <span>{question}</span>
        <i className={`fas fa-chevron-down faq-icon ${open ? "rotate" : ""}`}></i>
      </div>

      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ({ showNotification }) {
  // аналог submitSupportForm
  const submitSupportForm = (event) => {
    event.preventDefault();
    showNotification?.("Support ticket submitted successfully!", "success");
    event.target.reset();
  };

  return (
    <div id="faq" className="page">
      <div className="faq-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">FAQ & Support</h1>
          <p className="dashboard-subtitle">Find answers to common questions</p>
        </div>

        {/* --- GENERAL QUESTIONS --- */}
        <div className="faq-category">
          <h2 className="faq-category-title">General Questions</h2>

          <FAQItem
            question="Is my identity kept anonymous?"
            answer="Yes, your identity is completely anonymous. We don't require your real name, and all communications are encrypted. You can use a nickname of your choice."
          />

          <FAQItem
            question="Are the psychologists licensed?"
            answer="All psychologists on our platform are licensed professionals with verified credentials. We conduct thorough background checks to ensure quality care."
          />

          <FAQItem
            question="How much does it cost?"
            answer="We offer various pricing plans including pay-per-session and subscription options. Many insurance providers cover our services. Contact us for specific pricing information."
          />
        </div>

        {/* --- TECHNICAL SUPPORT --- */}
        <div className="faq-category">
          <h2 className="faq-category-title">Technical Support</h2>

          <FAQItem
            question="How do I reset my password?"
            answer="Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
          />

          <FAQItem
            question="Is my data secure?"
            answer="Yes, we use industry-standard encryption and security measures to protect your data. Your privacy is our top priority."
          />
        </div>

        {/* --- CONTACT SUPPORT FORM --- */}
        <div className="glass-card" style={{ marginTop: "2rem" }}>
          <h3 className="section-title">
            <i className="fas fa-headset"></i> Contact Support
          </h3>

          <form onSubmit={submitSupportForm}>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="What can we help you with?"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                rows="4"
                placeholder="Describe your issue in detail..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
