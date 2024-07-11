import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import jwt from "jsonwebtoken";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get("https://podify-backend-1.onrender.com/auth/profile")
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data.data); // Assuming data structure matches backend response
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div>
      {profileData ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
          {/* Add more profile information as needed */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
