// src/App.jsx

import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={homeStyle}>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <p>Scroll down to see the navbar minimize and fade out.</p>
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
