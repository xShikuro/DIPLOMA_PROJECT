import { useState } from "react";
import "../../style/sections/Psychologists.css"




export default function Psychologists({ showNotification, navigateTo }) {
    const psychologists = [
        {
            id: "sarah",
            name: "Dr. Sarah Johnson",
            specialization: "Anxiety & Depression",
            specKey: "anxiety",
            rating: 4.9,
            reviews: 127,
            img: "https://picsum.photos/seed/psych1/60/60"
        },
        {
            id: "michael",
            name: "Dr. Michael Chen",
            specialization: "Relationship Counseling",
            specKey: "relationship",
            rating: 4.8,
            reviews: 94,
            img: "https://picsum.photos/seed/psych2/60/60"
        },
        {
            id: "emily",
            name: "Dr. Emily Rodriguez",
            specialization: "Trauma & PTSD Specialist",
            specKey: "trauma",
            rating: 5.0,
            reviews: 156,
            img: "https://picsum.photos/seed/psych3/60/60"
        },
        {
            id: "james",
            name: "Dr. James Wilson",
            specialization: "Stress Management",
            specKey: "stress",
            rating: 4.7,
            reviews: 89,
            img: "https://picsum.photos/seed/psych4/60/60"
        },
        {
            id: "lisa",
            name: "Dr. Lisa Thompson",
            specialization: "Child & Adolescent Psychology",
            specKey: "child",
            rating: 4.9,
            reviews: 112,
            img: "https://picsum.photos/seed/psych5/60/60"
        },
        {
            id: "robert",
            name: "Dr. Robert Kim",
            specialization: "Addiction & Recovery",
            specKey: "addiction",
            rating: 4.8,
            reviews: 78,
            img: "https://picsum.photos/seed/psych6/60/60"
        }
    ];

    const [specialization, setSpecialization] = useState("all");
    const [sort, setSort] = useState("rating");

    // EVENTS
    const handleFilter = (value) => {
        setSpecialization(value);
        showNotification(`Filtering by: ${value}`, "info");
    };

    const handleSort = (value) => {
        setSort(value);
        showNotification(`Sorting by: ${value}`, "info");
    };

    const viewProfile = (id) => {
        showNotification(`Viewing profile for psychologist ${id}`, "info");
    };

    const startChat = (id) => {
        navigateTo("chat");
        showNotification(`Starting chat with psychologist ${id}`, "success");
    };

    // APPLY FILTER
    let filtered = psychologists.filter((p) =>
        specialization === "all" ? true : p.specKey === specialization
    );

    // APPLY SORT
    filtered.sort((a, b) => {
        if (sort === "rating") return b.rating - a.rating;
        if (sort === "experience") return b.reviews - a.reviews;
        if (sort === "availability") return a.name.localeCompare(b.name);
        return 0;
    });

    return (
        <div id="psychologists" className="page">
            <div className="psychologists-header">
                <h1 className="dashboard-title">Psychologists</h1>

                <div className="filter-bar">
                    <select
                        className="filter-select"
                        value={specialization}
                        onChange={(e) => handleFilter(e.target.value)}
                    >
                        <option value="all">All Specializations</option>
                        <option value="anxiety">Anxiety & Depression</option>
                        <option value="relationship">Relationship Counseling</option>
                        <option value="trauma">Trauma & PTSD</option>
                    </select>

                    <select
                        className="filter-select"
                        value={sort}
                        onChange={(e) => handleSort(e.target.value)}
                    >
                        <option value="rating">Sort by Rating</option>
                        <option value="experience">Sort by Experience</option>
                        <option value="availability">Sort by Availability</option>
                    </select>
                </div>
            </div>

            <div className="psychologists-grid">
                {filtered.map((p) => (
                    <div className="psychologist-card" key={p.id}>
                        <div className="psychologist-header">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="psychologist-avatar"
                            />
                            <div className="psychologist-info">
                                <h3 className="psychologist-name">{p.name}</h3>
                                <p className="psychologist-specialization">{p.specialization}</p>
                            </div>
                        </div>

                        <div className="psychologist-rating">
                            {Array.from({ length: 5 }, (_, i) => (
                                <i
                                    key={i}
                                    className={
                                        i < Math.round(p.rating)
                                            ? "fas fa-star"
                                            : "far fa-star"
                                    }
                                ></i>
                            ))}
                            <span>
                                {p.rating} ({p.reviews} reviews)
                            </span>
                        </div>

                        <div className="psychologist-actions">
                            <button
                                className="psychologist-btn"
                                onClick={() => viewProfile(p.id)}
                            >
                                <i className="fas fa-info-circle"></i> Profile
                            </button>

                            <button
                                className="psychologist-btn primary"
                                onClick={() => startChat(p.id)}
                            >
                                <i className="fas fa-message"></i> Message
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
