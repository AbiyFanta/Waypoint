// src/Services.jsx

import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <h1>Our Services</h1>
        <div style={serviceItemStyle}>
          <h2>Service 1</h2>
          <p>Description of service 1.</p>
        </div>
        <div style={serviceItemStyle}>
          <h2>Service 2</h2>
          <p>Description of service 2.</p>
        </div>
        <div style={serviceItemStyle}>
          <h2>Service 3</h2>
          <p>Description of service 3.</p>
        </div>
      </div>
    </div>
  );
};

const pageStyle = {
  padding: "20px",
  minHeight: "200vh", // Adjust if needed
  backgroundColor: "#DADED4",
  color: "#39603D",
};

const serviceItemStyle = {
  marginBottom: "20px",
};

export default Services;
