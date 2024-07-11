import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("podify-backend-2.vercel.app/auth/verify").then((res) => {
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
