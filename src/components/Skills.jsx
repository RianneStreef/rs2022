import React, { useEffect } from "react";

import { content } from "../content/languages";

import "../styles/Skills.css";

import skill1Icon from "../images/html.png";
import skill2Icon from "../images/css.png";
import skill3Icon from "../images/js.png";
import skill4Icon from "../images/react.png";
import skill5Icon from "../images/gatsby.png";
import skill6Icon from "../images/contentful.png";
import skill7Icon from "../images/github.png";
import skill8Icon from "../images/ga.png";

import skill1IconWhite from "../images/html-white.png";
import skill2IconWhite from "../images/css-white.png";
import skill3IconWhite from "../images/js-white.png";
import skill4IconWhite from "../images/react-white.png";
import skill5IconWhite from "../images/gatsby-white.png";
import skill6IconWhite from "../images/contentful-white.png";
import skill7IconWhite from "../images/github-white.png";
import skill8IconWhite from "../images/ga-white.png";

const Skills = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  useEffect(() => {
    console.log("darkMode useEffect Skills");
    console.log(darkMode);
  }, [darkMode]);

  return (
    <div className="skills" id="skills">
      <div className="header-placeholder" />

      <h3>{languageToUse.skills}</h3>
      <p className="grey-text intro-text">{languageToUse.skillsIntro}</p>
      <div className="skills-container">
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill1IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill1Icon} alt="" className="skills-icon" />
              )}
              <h6>HTML 5</h6>
            </div>
            <h6>95%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill1-pink" />
            <div className="light-pink skill1-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill2IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill2Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>CSS 3 </h6>
            </div>
            <h6>90%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill2-pink" />
            <div className="light-pink skill2-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill3IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill3Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>JavaScript</h6>
            </div>
            <h6>70%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill3-pink" />
            <div className="light-pink skill3-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill4IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill4Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>React</h6>
            </div>
            <h6>75%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill4-pink" />
            <div className="light-pink skill4-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill5IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill5Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>Gatsby</h6>
            </div>
            <h6>75%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill5-pink" />
            <div className="light-pink skill5-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill6IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill6Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>Contentful</h6>
            </div>
            <h6>90%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill6-pink" />
            <div className="light-pink skill6-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill7IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill7Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>GitHub</h6>
            </div>
            <h6>80%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill7-pink" />
            <div className="light-pink skill7-light-pink" />
          </div>
        </div>
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              {darkMode ? (
                <img src={skill8IconWhite} alt="" className="skills-icon" />
              ) : (
                <img src={skill8Icon} alt="" className="skills-icon" />
              )}{" "}
              <h6>Google Analytics</h6>
            </div>
            <h6>60%</h6>
          </div>
          <div className="row progress">
            <div className="pink skill8-pink" />
            <div className="light-pink skill8-light-pink" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
