import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Sign.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');

   
    // Basic validation
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    // Check if user exists in local storage
    const user = JSON.parse(localStorage.getItem(email));
    if (!user || user.password !== password) {
      setError('Invalid email or password');
      return;
    }
 // Set username in local storage
 localStorage.setItem('username', user.email);
    // User authenticated, redirect to home page
    navigate('/Home');
  };

  return (
    <div className='container'>
    <div className="form-container">
      <h2>Sign In</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
    </div>
  );
};

export default SignIn;