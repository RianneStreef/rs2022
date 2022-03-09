import React from "react";

import { content } from "../content/languages";

import "../styles/About.css";
import me from "../images/icon.png";

const About = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div id="about">
      <div className="header-placeholder" />
      <div className="about">
        <img src={me} alt="Me!" className="me-2" />
        <div className="about-details">
          <h3>{languageToUse.aboutTitle}</h3>
          <p className="intro-text grey-text">{languageToUse.aboutIntro}</p>
          <span className="about-subject">{languageToUse.name}:</span>
          <span className="grey-text">Rianne Streef</span>
          <br />
          <span className="about-subject">{languageToUse.dateOfBirth}:</span>
          <span className="grey-text">13 / 11 / 1985</span>
          <br />
          <span className="about-subject">
            {languageToUse.nationalityTitle}:
          </span>
          <span className="grey-text">{languageToUse.nationality}</span>
          <br />
          <span className="about-subject">
            {languageToUse.placeOfResidence}:
          </span>
          <span className="grey-text">Val Thorens, France</span>
          <br />
          <span className="about-subject">{languageToUse.email}:</span>
          <span className="grey-text">rianne@riannestreef.com</span>
          <br />
          <span className="about-subject">{languageToUse.phone}:</span>
          <span className="grey-text">+33 6 81 92 78 55 </span>
        </div>
      </div>
    </div>
  );
};

export default About;
