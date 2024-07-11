import React, { useState } from "react";
import "../styles/SignUp.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      "https://podify-backend-1.onrender.com/auth/resetPassword" + token,
      {
        password,
      }
    )
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for the reset password link");
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
          <h2>Reset Password</h2>

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
