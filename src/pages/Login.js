import React, { useState, useEffect } from "react";
import "../styles/SignUp.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.defaults.withCredentials = true;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    Axios.post("https://podify-backend-1.onrender.com/auth/login", {
      email,
      password,
    })
      .then((response) => {
        setLoading(false);
        if (response.data.status) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data);
          navigate("/home");
        } else {
          setError(response.data.message || "Login failed");
        }
        //console.log(response);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data?.message || "An error occurred");
        console.error("Login error:", err);
      });
  };
  return (
    <div className="page-container">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <Link to="/forgotpassword">Forgot Password?</Link>
          <p>
            Don't have an Account? <Link to="/signup">Sign Up</Link>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
