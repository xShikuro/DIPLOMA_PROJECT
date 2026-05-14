import { useState, useEffect } from "react";
import "../../style/sections/About.css";

export default function About() {

    const slides = [
        {
            title: "Safe Space",
            text: "Your mental health journey starts here",
            img: "https://picsum.photos/seed/1/900/300"
        },
        {
            title: "Professional Help",
            text: "Connect with licensed psychologists",
            img: "https://picsum.photos/seed/2/900/300"
        },
        {
            title: "Grow Daily",
            text: "Track and improve your wellbeing",
            img: "https://picsum.photos/seed/3/900/300"
        }
    ];

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(prev => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="about" className="page">
            <div className="about-container">

                {/* HERO */}
                <div className="about-hero glass-card">

                    {/* SLIDER */}
                    <div className="about-slider">
                        <img src={slides[slide].img} className="slider-img" />

                        <div className="slider-overlay">
                            <h2>{slides[slide].title}</h2>
                            <p>{slides[slide].text}</p>
                        </div>
                    </div>

                    <h1>About Axios</h1>
                    <p>
                        Advanced Psychological Support Platform for the modern world
                    </p>
                </div>

                {/* MISSION */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-bullseye"></i> Our Mission
                    </h2>

                    <div className="glass-card">
                        <p>
                            At Axios, we believe that mental health support should be 
                            accessible, affordable, and stigma-free.
                        </p>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-star"></i> What We Offer
                    </h2>

                    <div className="values-grid">

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <h3>AI Chat</h3>
                            <p>24/7 support from AI assistant</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-user-md"></i>
                            </div>
                            <h3>Experts</h3>
                            <p>Licensed psychologists ready to help</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Progress</h3>
                            <p>Track your mental health journey</p>
                        </div>

                    </div>
                </div>

                {/* VALUES */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-gem"></i> Our Values
                    </h2>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>Compassion</h3>
                            <p>We approach every interaction with empathy</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Confidentiality</h3>
                            <p>Your data is always secure</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-universal-access"></i>
                            </div>
                            <h3>Accessibility</h3>
                            <p>Available for everyone</p>
                        </div>
                    </div>
                </div>

                {/* VIDEO */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-play"></i> How Axios Works
                    </h2>

                    <div className="glass-card video-block">
                        <iframe
                            src="https://www.youtube.com/embed/8jPQjjsBbIc"
                            title="About Axios"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* IMPACT */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-chart-line"></i> Our Impact
                    </h2>

                    <div className="glass-card impact-block">
                        <div>50K+ Users</div>
                        <div>500+ Experts</div>
                        <div>1M+ Sessions</div>
                        <div>98% Satisfaction</div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}