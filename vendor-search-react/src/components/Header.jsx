import React from "react";

export default function Header({ onToggleTheme, theme }) {
  return (
    <header className="app-header" role="banner">
      <a className="logo" href="#home" aria-label="Vendor Search Home">
        <svg viewBox="0 0 100 100" className="logo-svg" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#76a9ff" />
              <stop offset="1" stopColor="#7ee787" />
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="88" height="88" rx="18" fill="url(#g1)"></rect>
          <circle cx="46" cy="42" r="16" fill="#071425"></circle>
        </svg>
        <div>
          <div className="brand">LocalFind</div>
          <div className="tag">Results</div>
        </div>
      </a>

      <div className="header-right">
        <nav className="nav" aria-label="Main navigation">
          <a href="#results">Results</a>
          <a href="#about">About</a>
        </nav>
        <button
          className="muted-btn"
          onClick={onToggleTheme}
          aria-pressed={theme === "dark"}
          title="Toggle theme"
        >
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
}
