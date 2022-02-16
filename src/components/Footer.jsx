import React from "react";

import "../styles/Footer.css";

import github from "../images/github-white.png";
import insta from "../images/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">
        Copyright
        <sup> &copy; </sup> Rianne Streef 2022
      </p>
      <div className="social">
        <h4 className="social-title">Find me!</h4>
        <div className="social-links">
          <a href="https://www.github.com/RianneStreef" target="_blank">
            <img src={github} alt="Facebook link" className="social-logo" />
          </a>
          <a href="https://www.instagram.com/vtswebdesign/" target="_blank">
            <img src={insta} alt="Instagram link" className="social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
