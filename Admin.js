import React, { useState } from 'react';

function Admin({ stores, setStores }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleAddStore = () => {
    if (!name || !address) {
      alert("Please enter both name and address");
      return;
    }
    const newStore = {
      id: stores.length + 1,
      name,
      address,
      ratings: []
    };
    setStores([...stores, newStore]);
    setName('');
    setAddress('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>⚙️ Admin Panel</h2>
      <h3>Add New Store</h3>
      <input
        type="text"
        placeholder="Store Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Store Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddStore}>Add Store</button>
    </div>
  );
}

export default Admin;
