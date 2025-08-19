import React, { useState } from 'react';
import './Stores.css';

function Stores({ stores, setStores }) {
  // Track user rating separately (for filled stars)
  const [userRatings, setUserRatings] = useState({});

  // Handle star click
  const handleRating = (id, rating) => {
    // Save rating for that store
    setStores(stores.map(store =>
      store.id === id ? { ...store, ratings: [...store.ratings, rating] } : store
    ));
    setUserRatings({ ...userRatings, [id]: rating });
  };

  // Calculate average rating
  const getAverageRating = (ratings) => {
    if (ratings.length === 0) return "No ratings yet";
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return `⭐ ${avg.toFixed(1)} / 5`;
  };

  return (
    <div className="stores-container">
      <h2 className="stores-title">🏪 Our Stores</h2>
      <div className="stores-grid">
        {stores.map(store => (
          <div key={store.id} className="store-card">
            <h3>{store.name}</h3>
            <p className="address">📍 {store.address}</p>
            <p className="rating">{getAverageRating(store.ratings)}</p>

            <div className="stars">
              {[1, 2, 3, 4, 5].map(num => (
                <span
                  key={num}
                  className={`star ${userRatings[store.id] >= num ? "filled" : ""}`}
                  onClick={() => handleRating(store.id, num)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stores;
