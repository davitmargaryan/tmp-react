import React from "react";

export default function Filter({ onFilterChange, filter }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <button
        style={{
          fontWeight: filter === "All" ? "bold" : "normal",
        }}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>
      <button
        style={{
          fontWeight: filter === "Checked" ? "bold" : "normal",
        }}
        onClick={() => onFilterChange("Checked")}
      >
        Checked
      </button>
      <button
        style={{
          fontWeight: filter === "Unchecked" ? "bold" : "normal",
        }}
        onClick={() => onFilterChange("Unchecked")}
      >
        Unchecked
      </button>
    </div>
  );
}
