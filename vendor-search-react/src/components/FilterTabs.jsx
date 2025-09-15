import React from "react";

export default function FilterTabs({ categories, active, onChange }) {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Categories">
      {["All", ...categories].map((cat) => {
        const isActive = active === (cat === "All" ? "all" : cat);
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            className={`chip ${isActive ? "chip-active" : ""}`}
            onClick={() => onChange(cat === "All" ? "all" : cat)}
          >
            {cat} {cat !== "All" && <span className="chip-count" aria-hidden>•</span>}
          </button>
        );
      })}
    </div>
  );
    }
