import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost/myproject/backend/login.php', {
        email,
        password,
      });

      if (res.data.message === 'Login successful') {
        localStorage.setItem('user_id', res.data.id);
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('username', res.data.name);

        if (res.data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/stores');
        }
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Login error, please try again');
    }
  };

  return (
    <div className="auth-box">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
