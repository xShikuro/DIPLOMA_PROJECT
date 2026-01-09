import { useState } from "react";
import "../../style/sections/Review.css"



export default function Reviews({ showNotification }) {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification?.("Review submitted successfully!", "success");

    setRating(0);
    e.target.reset();
  };

  const reviews = [
    {
      avatar: "https://picsum.photos/seed/user1/50/50",
      author: "Anonymous User",
      date: "2 days ago",
      rating: 5,
      text: "Dr. Johnson has been incredibly helpful. Her approach is compassionate and professional. I feel much better after our sessions."
    },
    {
      avatar: "https://picsum.photos/seed/user2/50/50",
      author: "Anonymous User",
      date: "1 week ago",
      rating: 4,
      text: "The platform is easy to use and the psychologists are qualified. The anonymous feature really helps me open up."
    },
    {
      avatar: "https://picsum.photos/seed/user3/50/50",
      author: "Anonymous User",
      date: "2 weeks ago",
      rating: 5,
      text: "Life-changing experience. The support I received here helped me through a difficult time. Highly recommend!"
    }
  ];

  return (
    <div id="reviews" className="page">
      <div className="reviews-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Reviews & Feedback</h1>
          <p className="dashboard-subtitle">
            Share your experience and help others
          </p>
        </div>

        {/* REVIEW FORM */}
        <div className="review-form glass-card">
          <h3 className="section-title">
            <i className="fas fa-star"></i> Leave a Review
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Rating</label>

              <div className="rating-input">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => setRating(value)}
                    style={{ cursor: "pointer" }}
                  >
                    {value <= rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Review</label>
              <textarea
                className="form-input"
                rows="4"
                placeholder="Share your experience..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Review
            </button>
          </form>
        </div>

        {/* REVIEWS LIST */}
        <h2 className="section-title">
          <i className="fas fa-comments"></i> Recent Reviews
        </h2>

        <div className="review-list">
          {reviews.map((r, idx) => (
            <div key={idx} className="review-card glass-card">
              <div className="review-header">
                <img
                  src={r.avatar}
                  alt="Anonymous User"
                  className="review-avatar"
                />

                <div className="review-meta">
                  <div className="review-author">{r.author}</div>
                  <div className="review-date">{r.date}</div>
                </div>

                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i
                      key={i}
                      className={`${i <= r.rating ? "fas" : "far"} fa-star`}
                    ></i>
                  ))}
                </div>
              </div>

              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
