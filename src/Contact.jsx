// src/Contact.jsx

import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <h1>Contact Page</h1>
        <p>This is the contact page.</p>
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

export default Contact;
