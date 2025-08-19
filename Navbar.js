import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 40px',
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const logoStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  };

  const linkContainer = {
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    fontSize: '16px',
    transition: '0.3s',
  };

  const linkHover = {
    color: '#ffd700',
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>⭐ StoreRatingApp</div>
      <div style={linkContainer}>
        <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHover.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Home</Link>
        <Link to="/stores" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHover.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Stores</Link>
        <Link to="/admin" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHover.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Admin</Link>
        <Link to="/login" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHover.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Login</Link>
        <Link to="/signup" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHover.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
