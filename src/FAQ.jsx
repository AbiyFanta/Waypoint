// src/FAQ.jsx

import React from "react";
import Navbar from "./Navbar";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <h1>FAQ Page</h1>
        <div style={faqItemStyle}>
          <h2>Question 1: What is this site about?</h2>
          <p>This site is a basic example of a React application with navigation.</p>
        </div>
        <div style={faqItemStyle}>
          <h2>Question 2: How do I contact you?</h2>
          <p>You can reach us via the Contact page linked above.</p>
        </div>
        <div style={faqItemStyle}>
          <h2>Question 3: What technologies are used here?</h2>
          <p>This site uses React, Vite, and React Router.</p>
        </div>
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

const faqItemStyle = {
  marginBottom: "20px",
};

export default FAQ;
