import React from "react";

export default function BottomNav({ active = "results" }) {
  return (
    <nav className="bottom-nav" aria-label="Bottom navigation">
      <a className={`bn-item ${active === "home" ? "active" : ""}`} href="#home">🏠<span>Home</span></a>
      <a className={`bn-item ${active === "search" ? "active" : ""}`} href="#search">🔎<span>Search</span></a>
      <a className={`bn-item ${active === "results" ? "active" : ""}`} href="#results">📍<span>Results</span></a>
      <a className={`bn-item ${active === "profile" ? "active" : ""}`} href="#profile">👤<span>Profile</span></a>
    </nav>
  );
}
