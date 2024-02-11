import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Sign.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if user already exists in local storage
    if (localStorage.getItem(email)) {
      setError('User already exists');
      return;
    }

    // Save user to local storage
    localStorage.setItem(email, JSON.stringify({ email, password }));
    alert('User registered successfully');

    // Redirect to sign-in page
    navigate('/');
  };

  return (
    <div className='container'>
    <div className="form-container">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignUp}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </div>
    </div>
  );
};

export default SignUp;