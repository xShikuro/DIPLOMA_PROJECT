import { useState, useEffect } from "react";
import { uploadAvatar } from "../../api/auth";
import "../../style/sections/Profile.css";

export default function ProfilePage({ user, setUser }) {

  // ================= FORM STATE
  const [nickname, setNickname] = useState(user?.nickname || "User");
  const [email, setEmail] = useState(user?.email || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [personality, setPersonality] = useState("");

  // ================= DISPLAY STATE
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "",
    personality: ""
  });

  // ================= LOAD USER
  useEffect(() => {
    if (user) {
      setNickname(user.nickname || "User");
      setEmail(user.email || "");
      setAvatar(user.avatar || "");
    }


    const saved = localStorage.getItem("profileData");
    if (saved) {
      setProfileData(JSON.parse(saved));
    }

  }, [user]);

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "Unknown";

  const avatarSrc = avatar
    ? `http://localhost:4000/uploads/${avatar}`
    : "https://picsum.photos/seed/profile/120/120";

  // ================= AVATAR
  const changeAvatar = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = localStorage.getItem("token");
    const res = await uploadAvatar(file, token);

    const updatedUser = { ...user, avatar: res.data.avatar };
    setUser(updatedUser);
    setAvatar(res.data.avatar);
  };

  // ================= SAVE
  const updateProfile = (e) => {
    e.preventDefault();

    const newData = {
      firstName,
      lastName,
      age,
      gender,
      country,
      personality
    };

    setProfileData(newData);

    localStorage.setItem("profileData", JSON.stringify(newData));
  };

  return (
    <div id="profile" className="page">
      <div className="profile-container">

        {/* HEADER */}
        <div className="profile-header">

          <div className="profile-avatar-container">
            <img src={avatarSrc} className="profile-avatar" />

            <label className="profile-avatar-edit">
              <i className="fas fa-camera"></i>
              <input type="file" hidden onChange={changeAvatar} />
            </label>
          </div>

          <div className="profile-info">

            <h1>{nickname.toUpperCase()}</h1>
            <p>Member since {memberSince}</p>

            <div className="profile-badges">
              <div className="badge red">
                <i className="fas fa-shield-alt"></i> Verified
              </div>
              <div className="badge orange">
                <i className="fas fa-fire"></i> 1 Day Streak
              </div>
            </div>

            {/* INFO */}
            <div className="profile-info-row">

              <div className="info-item">
                <i className="fas fa-user"></i>
                {profileData.firstName || "Name"} {profileData.lastName}
              </div>

              <div className="info-item">
                <i className="fas fa-globe"></i>
                {profileData.country || "Country"}
              </div>

              <div className="info-item">
                <i className="fas fa-venus-mars"></i>
                {profileData.gender || "Gender"}
              </div>

              <div className="info-item">
                <i className="fas fa-birthday-cake"></i>
                {profileData.age || "Age"}
              </div>

              <div className="info-item highlight">
                <i className="fas fa-brain"></i>
                {profileData.personality || "MBTI"}
              </div>

            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-check"></i></div>
            <div className="stat-value">12</div>
            <div className="stat-label">Sessions</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-comments"></i></div>
            <div className="stat-value">3</div>
            <div className="stat-label">Active Chats</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-fire"></i></div>
            <div className="stat-value">28</div>
            <div className="stat-label">Day Streak</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-heart"></i></div>
            <div className="stat-value">85%</div>
            <div className="stat-label">Wellness Score</div>
          </div>
        </div>

        {/* FORM */}
        <div className="profile-section">
          <h2 className="section-title">
            <i className="fas fa-user-edit"></i> Account Settings
          </h2>

          <div className="glass-card">
            <form onSubmit={updateProfile} className="profile-form-grid">

              <input className="form-input" value={nickname} onChange={(e)=>setNickname(e.target.value)} />
              <input className="form-input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
              <input className="form-input" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
              <input className="form-input" value={email} disabled />

              <input className="form-input" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />

              <select className="form-input" value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input className="form-input" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Country" />

              <select className="form-input" value={personality} onChange={(e)=>setPersonality(e.target.value)}>
                <option value="">MBTI</option>
                <option>INTJ</option>
                <option>ENTP</option>
                <option>INFJ</option>
                <option>ENFP</option>
                <option>ISTJ</option>
                <option>ISFJ</option>
                <option>ESTP</option>
                <option>ESFP</option>
              </select>

              <button className="btn-primary full">Save Changes</button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}