import React from "react";

import "../styles/Footer.css";

import github from "../images/github-white.png";
import insta from "../images/instagram.png";

import thumbsUpBlack from "../images/thumbs-up-black.png";
import thumbsUpWhite from "../images/thumbs-up-white.png";
import thumbsDownBlack from "../images/thumbs-down-black.png";
import thumbsDownWhite from "../images/thumbs-down-white.png";

const Footer = (props) => {
  let { language, setLanguage, darkMode, setDarkMode } = props;

  function handleDarkMode() {
    setDarkMode(!darkMode);

    var backgroundColor = document.documentElement.style;
    var textColor = document.documentElement.style;
    var shadowColor = document.documentElement.style;

    if (darkMode === true) {
      backgroundColor.setProperty("--color-background", "#000");
      textColor.setProperty("--color-text", "#fff");
      shadowColor.setProperty("--color-shadow", "#313131");
    } else {
      backgroundColor.setProperty("--color-background", "#fff");
      textColor.setProperty("--color-text", "#000");
      shadowColor.setProperty("--color-shadow", "#eaeaea");
    }
  }

  return (
    <div className="footer">
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
      <p className="copyright">
        Copyright
        <sup> &copy; </sup> Rianne Streef 2022
      </p>
      <div>
        <div className="dark-mode">
          <p>Want to see my dark site? </p>
          <div className="dark-mode-switch">
            <img src={thumbsUpWhite} className="thumbs" />

            <label class="switch">
              <input
                type="checkbox"
                onChange={handleDarkMode}
                id="darkMode"
                name="darkMode"
              />
              <span class="slider round" />
            </label>

            <img src={thumbsDownWhite} className="thumbs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
