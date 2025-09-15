import React from "react";

function LangChip({ text }) {
  return <span className="lang-chip">{text}</span>;
}

export default function VendorCard({ vendor }) {
  return (
    <article className="vendor-card card" tabIndex="0" aria-labelledby={`v-${vendor.id}-title`}>
      <div className="vendor-left">
        <div className="vendor-title">
          <div className="vendor-name" id={`v-${vendor.id}-title`}>{vendor.name}</div>
          <div className="vendor-meta">
            <span className="category-pill">{vendor.category}</span>
            <span className="rating">★ {vendor.rating}</span>
          </div>
        </div>

        <div className="vendor-sub">
          <div className="small"><svg className="icon" viewBox="0 0 24 24"><path fill="#6b7280" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/></svg> {vendor.address}</div>
          <div className="small">Languages: {vendor.languages.map((l) => <LangChip key={l} text={l} />)}</div>
          <p className="desc">{vendor.description}</p>

          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className="left-small">
              <span className="small">📍 {vendor.distance}</span>
              <span className="small online">{vendor.onlineAvailable ? "Available online" : ""}</span>
            </div>
            <div style={{textAlign:"right"}}>
              <div className="price">{vendor.price}</div>
              <div className="small" style={{color:"#10b981"}}>Open now</div>
            </div>
          </div>
        </div>
      </div>

      <div className="vendor-actions">
        <button className="call-btn" aria-label={`Call ${vendor.name}`}>📞</button>
      </div>
    </article>
  );
}
