// src/App.jsx

import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={homeStyle}>
        <h1>Home Page</h1>
        <h1>Your perfect trip, expertly planned.</h1>
        <p>Your all in one travel companion</p>
      </div>
    </div>
  );
};

const homeStyle = {
  padding: "20px",
  textAlign: "center",
  minHeight: "200vh", // Add some height to enable scrolling
  backgroundColor: "#DADED4", // Main background color
};

export default App;

const waypointStyle = {
  color: "#39603D", // Secondary color
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "'Libre Bodoni', serif", // Apply Libre Bodoni font
  fontSize: "24px", // Increase font size for emphasis
};