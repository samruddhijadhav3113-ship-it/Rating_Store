import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StoreList.css';

function StoreList() {
  const [stores, setStores] = useState([]);
  const [rating, setRating] = useState({});  // storeId → rating value

  // Fetch all stores
  const fetchStores = () => {
    axios.get('http://localhost:5000/api/stores')
      .then(res => setStores(res.data))
      .catch(err => console.error('Error fetching stores:', err));
  };

  useEffect(() => {
    fetchStores();
  }, []);

  // Submit rating for a store
  const handleSubmitRating = async (storeId) => {
    if (!rating[storeId]) {
      alert('⚠️ Please select a rating value first');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/rate', {
        store_id: storeId,
        user_id: 1,   // TODO: replace with logged-in user id
        rating: rating[storeId]
      });
      alert('✅ Rating submitted!');
      fetchStores(); // refresh store list after submitting
    } catch (err) {
      console.error('Error during rating:', err);
      alert('❌ Error while submitting rating');
    }
  };

  return (
    <div className="store-container">
      <h3>📍 All Stores</h3>

      {stores.length === 0 ? (
        <p>No stores available. Please check again later.</p>
      ) : (
        stores.map(store => (
          <div key={store.id} className="store-card">
            <p><strong>Name:</strong> {store.name}</p>
            <p><strong>Address:</strong> {store.address}</p>
            <p><strong>Average Rating:</strong> {store.avg_rating ? store.avg_rating.toFixed(1) : "No ratings yet"}</p>

            <div className="rating-section">
              <select
                value={rating[store.id] || ""}
                onChange={(e) => setRating({ ...rating, [store.id]: e.target.value })}
              >
                <option value="">Rate</option>
                <option value="1">⭐ 1</option>
                <option value="2">⭐ 2</option>
                <option value="3">⭐ 3</option>
                <option value="4">⭐ 4</option>
                <option value="5">⭐ 5</option>
              </select>
              <button onClick={() => handleSubmitRating(store.id)}>Submit</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default StoreList;
