import React from "react";

import { Link } from "gatsby";

import "../styles/Footer.css";

import Unicorn from "../components/Unicorn";
import { content } from "../content/languages";

import github from "../images/github-white.png";
import insta from "../images/instagram.png";

import thumbsUpWhite from "../images/thumbs-up-white.png";
import thumbsDownWhite from "../images/thumbs-down-white.png";

const Footer = (props) => {
  let { language, languageToUse, darkMode, setDarkMode } = props;
  console.log("darkMode");
  console.log(darkMode);

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

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
      <div className="footer-top">
        <Unicorn />
        <div className="footer-links">
          <div className="column-1">
            <Link to="/#about">About Me</Link>
            <Link to="/#resume">Resume</Link>
          </div>

          <div className="column-2">
            <Link to="/#skills">Skills</Link>
            <Link to="/#projects">Projects</Link>
          </div>
          <div className="column-3">
            <Link to="/#contact">Contact</Link>
            <a href="https://vts-webdesign.com">VTS Web Design</a>
          </div>
        </div>
        <div className="social">
          <p className="social-title">Find me!</p>
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
      <div className="footer-middle">
        <div className="dark-mode">
          <p>Want to see my dark site? </p>
          <div className="dark-mode-switch">
            <img src={thumbsDownWhite} className="thumbs" />

            <label className="switch">
              <input
                type="checkbox"
                onChange={handleDarkMode}
                id="darkMode"
                name="darkMode"
              />
              <span className="slider round" />
            </label>

            <img src={thumbsUpWhite} className="thumbs" />
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright
        <sup> &copy; </sup> Rianne Streef 2022 - Logo:{" "}
        <a href="https://claireturner-design.com">Claire Turner</a> -
        <Link to="/legal"> {languageToUse.legal}</Link>
      </p>
    </div>
  );
};

export default Footer;
