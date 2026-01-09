import "../../style/sections/About.css"



export default function About() {
    return (
        <div id="about" className="page">
            <div className="about-container">

                {/* HERO */}
                <div className="about-hero glass-card">
                    <h1>About Axios</h1>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            color: "var(--text-secondary)",
                            maxWidth: "600px",
                            margin: "0 auto"
                        }}
                    >
                        Advanced Psychological Support Platform for the modern world
                    </p>
                </div>

                {/* MISSION */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-bullseye"></i> Our Mission
                    </h2>

                    <div className="glass-card">
                        <p
                            style={{
                                fontSize: "1.125rem",
                                lineHeight: "1.8",
                                color: "var(--text-secondary)"
                            }}
                        >
                            At Axios, we believe that mental health support should be 
                            accessible, affordable, and stigma-free. Our mission is to 
                            create a safe, anonymous platform where anyone can find the 
                            psychological support they need without judgment or fear of 
                            exposure.
                        </p>
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
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    marginTop: "0.5rem"
                                }}
                            >
                                We approach every interaction with empathy and understanding.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Confidentiality</h3>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    marginTop: "0.5rem"
                                }}
                            >
                                Your information is always secure and private.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-universal-access"></i>
                            </div>
                            <h3>Accessibility</h3>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    marginTop: "0.5rem"
                                }}
                            >
                                Mental health support should be available to everyone.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3>Innovation</h3>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    marginTop: "0.5rem"
                                }}
                            >
                                We continuously improve our platform and services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* IMPACT */}
                <div className="profile-section">
                    <h2 className="section-title">
                        <i className="fas fa-chart-line"></i> Our Impact
                    </h2>

                    <div className="glass-card">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "2rem",
                                textAlign: "center"
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 700,
                                        color: "var(--neon-red)"
                                    }}
                                >
                                    50K+
                                </div>
                                <div style={{ color: "var(--text-secondary)" }}>
                                    Active Users
                                </div>
                            </div>

                            <div>
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 700,
                                        color: "var(--neon-pink)"
                                    }}
                                >
                                    500+
                                </div>
                                <div style={{ color: "var(--text-secondary)" }}>
                                    Licensed Professionals
                                </div>
                            </div>

                            <div>
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 700,
                                        color: "var(--neon-crimson)"
                                    }}
                                >
                                    1M+
                                </div>
                                <div style={{ color: "var(--text-secondary)" }}>
                                    Sessions Completed
                                </div>
                            </div>

                            <div>
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: 700,
                                        color: "var(--neon-orange)"
                                    }}
                                >
                                    98%
                                </div>
                                <div style={{ color: "var(--text-secondary)" }}>
                                    Satisfaction Rate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
