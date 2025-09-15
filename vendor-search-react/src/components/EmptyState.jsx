import React from "react";

export default function EmptyState() {
  return (
    <div className="empty card center" role="status" aria-live="polite">
      <div style={{fontSize:48}}>🔍</div>
      <h3>No vendors found</h3>
      <p className="small">Try adjusting your search or browsing different categories.</p>
      <button className="btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Home</button>
    </div>
  );
}
