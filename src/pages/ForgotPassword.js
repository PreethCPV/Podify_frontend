import React, { useState } from "react";
import "../styles/SignUp.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://podify-backend-1.onrender.com/auth/forgotPassword", {
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("check your email for resetting password");
          navigate("/login");
        }

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="page-container">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <button type="submit">Send</button>
          <p>
            Don't have an Account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
