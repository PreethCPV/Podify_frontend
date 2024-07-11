import React from "react";
import "../styles/Contactus.css";

const Contactus = () => {
  const members = [
    {
      name: "Roshanthraj N",
      email: "roshanthraja@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/roshanthraj-n-88a171278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/roshanthraj",
    },
    {
      name: "R Karthik",
      email: "karthikhastha@gmail.com",
      linkedin: "https://www.linkedin.com/in/karthik-r-869b84277/",
      github: "https://github.com/karthikr243",
    },
    {
      name: "Preetham Venkatram C",
      email: "preethamvenkatram@gmail.com",
      linkedin: "https://www.linkedin.com/in/preetham-venkatram-b14450278",
      github: "https://github.com/PreethCPV",
    },
    {
      name: "Saran N",
      email: "n.sarancs@gmail.com",
      linkedin: "https://www.linkedin.com/in/saran-n-0b6172278/",
      github: "https://github.com/N-SARAN",
    },
  ];

  return (
    <div className="contactus-container">
      <h1>Contact Us</h1>
      {members.map((member, index) => (
        <div key={index} className="contact-details">
          <p>
            <strong>{member.name}:</strong>
          </p>
          <p>
            Email: <a href={`mailto:${member.email}`}>{member.email}</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTy76Qi6HRPueYjlAzFO1_bElBvJ3mX1CxAg&s"
                alt="LinkedIn"
                style={{ width: "20px", marginRight: "8px" }}
              />
              {member.name}'s LinkedIn
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
                alt="GitHub"
                style={{ width: "20px", marginRight: "8px" }}
              />
              {member.name}'s GitHub
            </a>
          </p>
        </div>
      ))}
      <div className="additional-info">
        <p>
          If you have any questions or need further information, please do not
          hesitate to contact us through the emails provided above. We look
          forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contactus;
