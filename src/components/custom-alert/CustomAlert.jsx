// CustomAlert.js

import React from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
        <button className="ok-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
