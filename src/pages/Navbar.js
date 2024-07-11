import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("https://podify-backend-1.onrender.com/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  // Fetch user data when component mounts
  React.useEffect(() => {
    axios
      .get("https://podify-backend-1.onrender.com/auth/profile")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching user data");
        setLoading(false);
      });
  }, []);

  // Function to handle user deletion

  if (loading) {
    return <div>Loading profile...</div>;
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="./categories">Categories</a>
        </li>

        <li>
          <a href="./about">About Us</a>
        </li>
        <li>
          <a href="./contact">Contact Us</a>
        </li>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
