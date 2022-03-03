import React from "react";

import { content } from "../content/languages";

import "../styles/Home.css";

import me from "../images/icon.png";
import github from "../images/github.png";

const Home = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="home" id="home">
      <div>
        <div className="home-title">
          <div className="home-title-1">
            <h1>{languageToUse.mainTitle1} </h1>
            <span className="pink-text">
              <h1>{languageToUse.mainTitle2}</h1>
            </span>
          </div>
          <div className="home-title-2">
            <h2>{languageToUse.underTitle1}</h2>
            <span className="pink-text">
              <h2>{languageToUse.underTitle2} </h2>
            </span>
            <h2>{languageToUse.underTitle3}</h2>
          </div>
        </div>
        <div className="center-button-container">
          <a href="https://github.com/RianneStreef" target="_blank">
            <img src={github} alt="GitHub repo" className="icon git-icon" />
          </a>
        </div>
      </div>
      <img src={me} alt="Me!" className="me" />
    </div>
  );
};

export default Home;
