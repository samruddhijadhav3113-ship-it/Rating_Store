import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #6dd5fa, #ffffff, #2980b9)",
        minHeight: "90vh",
      }}
    >
      {/* Hero Section */}
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#2c3e50" }}>
        🌟 Welcome to Store Rating System
      </h1>
      <p style={{ fontSize: "1.3rem", marginBottom: "30px", color: "#333" }}>
        Discover the best places around you and share your ratings ⭐
      </p>

      {/* Buttons */}
      <div style={{ marginBottom: "40px" }}>
        <Link
          to="/stores"
          style={{
            marginRight: "20px",
            padding: "12px 24px",
            background: "#27ae60",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
          }}
        >
          🔍 View Stores
        </Link>

        <Link
          to="/admin"
          style={{
            padding: "12px 24px",
            background: "#e67e22",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
          }}
        >
          🛠 Admin Panel
        </Link>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "250px",
          }}
        >
          <h3>⭐ Rate Stores</h3>
          <p>Give your honest ratings using our star system.</p>
        </div>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "250px",
          }}
        >
          <h3>🏬 Add New Stores</h3>
          <p>Admins can easily add new stores to the system.</p>
        </div>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "250px",
          }}
        >
          <h3>📊 View Ratings</h3>
          <p>Check average ratings and reviews in real time.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
