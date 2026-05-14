import { useState } from "react";
import "../../style/sections/Psychologists.css";

export default function Psychologists({ showNotification, navigateTo }) {
        const psychologists = [
        { id: "1", name: "Dr. Sarah Johnson", specialization: "Anxiety & Depression", specKey: "anxiety", rating: 4.9, reviews: 127, img: "https://picsum.photos/seed/1/200/200" },
        { id: "2", name: "Dr. Michael Chen", specialization: "Relationship Counseling", specKey: "relationship", rating: 4.8, reviews: 94, img: "https://picsum.photos/seed/2/200/200" },
        { id: "3", name: "Dr. Emily Rodriguez", specialization: "Trauma & PTSD", specKey: "trauma", rating: 5.0, reviews: 156, img: "https://picsum.photos/seed/3/200/200" },
        { id: "4", name: "Dr. James Wilson", specialization: "Stress Management", specKey: "stress", rating: 4.7, reviews: 89, img: "https://picsum.photos/seed/4/200/200" },
        { id: "5", name: "Dr. Lisa Thompson", specialization: "Child Psychology", specKey: "child", rating: 4.9, reviews: 112, img: "https://picsum.photos/seed/5/200/200" },
        { id: "6", name: "Dr. Robert Kim", specialization: "Addiction Recovery", specKey: "addiction", rating: 4.8, reviews: 78, img: "https://picsum.photos/seed/6/200/200" },

        { id: "7", name: "Dr. Olivia Brown", specialization: "Burnout & Work Stress", specKey: "burnout", rating: 4.9, reviews: 140, img: "https://picsum.photos/seed/7/200/200" },
        { id: "8", name: "Dr. Daniel Lee", specialization: "Self-Esteem & Confidence", specKey: "self", rating: 4.7, reviews: 65, img: "https://picsum.photos/seed/8/200/200" },
        { id: "9", name: "Dr. Anna White", specialization: "Sleep Disorders", specKey: "sleep", rating: 4.8, reviews: 91, img: "https://picsum.photos/seed/9/200/200" },
        { id: "10", name: "Dr. Mark Green", specialization: "Anger Management", specKey: "anger", rating: 4.6, reviews: 70, img: "https://picsum.photos/seed/10/200/200" },
        { id: "11", name: "Dr. Sophie Miller", specialization: "Social Anxiety", specKey: "social", rating: 4.9, reviews: 120, img: "https://picsum.photos/seed/11/200/200" },
        { id: "12", name: "Dr. Alex Carter", specialization: "Life Coaching", specKey: "life", rating: 4.7, reviews: 88, img: "https://picsum.photos/seed/12/200/200" }
    ];

    const [specialization, setSpecialization] = useState("all");
    const [sort, setSort] = useState("rating");
    const [selected, setSelected] = useState(null);

    const chips = [
        { key: "all", label: "All" },
        { key: "anxiety", label: "Anxiety" },
        { key: "relationship", label: "Relationship" },
        { key: "trauma", label: "Trauma" },
        { key: "stress", label: "Stress" },
        { key: "child", label: "Child" },
        { key: "addiction", label: "Addiction" },
        { key: "burnout", label: "Burnout" },
        { key: "self", label: "Self-esteem" },
        { key: "sleep", label: "Sleep" },
        { key: "anger", label: "Anger" },
        { key: "social", label: "Social Anxiety" },
        { key: "life", label: "Life Coaching" }
    ];

    const viewProfile = (id) => {
        const found = psychologists.find(p => p.id === id);
        setSelected(found);
    };

    const startChat = (id) => {
        navigateTo("chat");
        showNotification(`Chat started with ${id}`, "success");
    };

    let filtered = psychologists.filter((p) =>
        specialization === "all" ? true : p.specKey === specialization
    );

    filtered.sort((a, b) => {
        if (sort === "rating") return b.rating - a.rating;
        if (sort === "experience") return b.reviews - a.reviews;
        return 0;
    });

    return (
        <div id="psychologists" className="page">
            <div className="psychologists-header">
                <h1 className="dashboard-title">Psychologists</h1>

                <select
                    className="filter-select"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="rating">Sort by Rating</option>
                    <option value="experience">Sort by Experience</option>
                </select>
            </div>

            {/* FILTER CHIPS */}
            <div className="filter-chips">
                {chips.map((chip) => (
                    <div
                        key={chip.key}
                        className={`chip ${specialization === chip.key ? "active" : ""}`}
                        onClick={() => setSpecialization(chip.key)}
                    >
                        {chip.label}
                    </div>
                ))}
            </div>

            {/* GRID */}
            <div className="psychologists-grid">
                {filtered.map((p) => (
                    <div className="psychologist-card" key={p.id}>
                        <div className="psychologist-header">
                            <img src={p.img} alt={p.name} className="psychologist-avatar" />

                            <div>
                                <h3 className="psychologist-name">{p.name}</h3>
                                <p className="psychologist-specialization">{p.specialization}</p>
                            </div>
                        </div>

                        <div className="psychologist-rating">
                            {Array.from({ length: 5 }, (_, i) => (
                                <i key={i} className={i < Math.round(p.rating) ? "fas fa-star" : "far fa-star"}></i>
                            ))}
                            <span>{p.rating} ({p.reviews} reviews)</span>
                        </div>

                        <div className="psychologist-actions">
                            <button className="psychologist-btn" onClick={() => viewProfile(p.id)}>
                                Profile
                            </button>

                            <button className="psychologist-btn primary" onClick={() => startChat(p.id)}>
                                Message
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selected && (
                <div className="modal-overlay" onClick={() => setSelected(null)}>
                    <div className="modal-card" onClick={(e) => e.stopPropagation()}>

                        <div className="modal-header">
                            <span>Profile</span>
                            <span className="modal-close" onClick={() => setSelected(null)}>✕</span>
                        </div>

                        <div className="modal-content">
                            <img src={selected.img} className="modal-avatar" />

                            <h2>{selected.name}</h2>
                            <p className="modal-spec">{selected.specialization}</p>

                            <div className="modal-rating">
                                ⭐ {selected.rating} ({selected.reviews} reviews)
                            </div>

                            <div className="modal-info">
                                <div>
                                    <span>Experience</span>
                                    <strong>{selected.reviews}+ sessions</strong>
                                </div>
                                <div>
                                    <span>Status</span>
                                    <strong>Online</strong>
                                </div>
                            </div>

                            <button
                                className="btn-primary"
                                onClick={() => startChat(selected.id)}
                            >
                                Start Chat
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}