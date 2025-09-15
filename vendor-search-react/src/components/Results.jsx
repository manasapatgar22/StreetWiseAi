import React, { useMemo, useState } from "react";
import VendorCard from "./VendorCard";
import FilterTabs from "./FilterTabs";
import EmptyState from "./EmptyState";
import { VENDORS } from "../data/vendors";

const UNIQUE_CATEGORIES = [...new Set(VENDORS.map((v) => v.category))];

export default function Results() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VENDORS.filter((v) => {
      const matchesCategory = category === "all" ? true : v.category === category;
      const matchesQuery = q === "" ? true : (
        v.name.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.address.toLowerCase().includes(q)
      );
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="results" className="results-area">
      <div className="top-controls card">
        <div className="back-location">
          <button className="back-btn" title="Back">←</button>
          <div>
            <div style={{fontWeight:700}}>Search Results</div>
            <div className="small">Within 2km of Kukatpally, Hyderabad</div>
          </div>
        </div>

        <div className="search-row">
          <input
            className="input"
            placeholder="Search vendors, addresses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search vendors"
          />
          <button className="muted-btn" title="Filter">⚙️</button>
        </div>

        <FilterTabs categories={UNIQUE_CATEGORIES} active={category} onChange={setCategory} />
      </div>

      <div className="found card small">
        Found <strong>{filtered.length}</strong> vendors near you
      </div>

      <div className="list-area">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          filtered.map((v) => <VendorCard vendor={v} key={v.id} />)
        )}
      </div>
    </section>
  );
}
