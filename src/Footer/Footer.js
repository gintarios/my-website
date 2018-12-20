import React from "react";
import "../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="footer-container">
        <div className="footer-box1">
          <div className="footer-box1-item">
            <a href="https://github.com/gintarios" target="_blank">
              Github
            </a>
          </div>
          <div className="footer-box1-item">
            <a
              href="https://www.linkedin.com/in/gintare-zolubaite-5012b364/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="footer-box1-item">
            <a href="mailto:gintare.zolubaite@gmail.com">Email </a>
          </div>
        </div>
        <div className="footer-box2">
          <p> Made by Gintare Zolubaite 2018 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
