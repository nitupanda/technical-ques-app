import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Sign.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("currentuser");
    if (user) {
      let activeuser = JSON.parse(user);
      let curuser = JSON.parse(localStorage.getItem(activeuser));
      if (curuser && curuser.active === true) {
        navigate("/Home");
      }
    } else {
      navigate("/");
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    //Basic validation
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem(email));
    //console.log(email,userData,"checking email")
    if (!userData || userData.password !== password) {
      setError("Invalid email or password");
      return;
    }

    // Set user's active status to true
    userData.active = true;
    localStorage.setItem(email, JSON.stringify(userData));
    localStorage.setItem("currentuser", JSON.stringify(email));
    // Redirect to Home page
    navigate("/Home");
  };

  return (
    <div className="container">
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
