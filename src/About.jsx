// src/About.jsx

import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  );
};

const pageStyle = {
  padding: "20px",
  minHeight: "200vh",
  backgroundColor: "#DADED4",
  color: "#39603D",
};

export default About;
