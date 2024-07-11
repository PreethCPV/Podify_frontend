import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://podify-backend-1.onrender.com/auth/verify")
      .then((res) => {
        if (res.data.status) {
        } else {
          navigate("/");
        }
      });
  }, []);
  return (
    <div>
      <h2>dashboard</h2>
    </div>
  );
};

export default Dashboard;
