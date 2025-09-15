import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <div className="app-root">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main className="main">
        <Results />
        <section id="about" className="card about-card">
          <h3>About</h3>
          <p className="small">
            A small demo reproducing a mobile-first vendor listing interface. Filter by category,
            search and view details. Designed to be accessible and responsive.
          </p>
        </section>
      </main>

      <BottomNav active="results" />
    </div>
  );
}
