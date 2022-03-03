import React from "react";

import { content } from "../content/languages";

import "../styles/Skills.css";

import skill1Icon from "../images/html.png";
import skill2Icon from "../images/css.png";
import skill3Icon from "../images/js.png";
import skill4Icon from "../images/REACT-icon.png";
import skill5Icon from "../images/gatsby.png";
import skill6Icon from "../images/contentful.png";
import skill7Icon from "../images/github.png";
import skill8Icon from "../images/ga.png";

const Skills = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="skills" id="skills">
      <div className="header-placeholder" />

      <h3>{languageToUse.skills}</h3>
      <p className="grey-text intro-text">{languageToUse.skillsIntro}</p>
      <div className="skills-container">
        <div className="skills-details">
          <div className="skills-title">
            <div className="row">
              <img src={skill1Icon} alt="" className="skills-icon" />
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
              <img src={skill2Icon} alt="" className="skills-icon" />
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
              <img src={skill3Icon} alt="" className="skills-icon" />
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
              <img src={skill4Icon} alt="" className="skills-icon" />
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
              <img src={skill5Icon} alt="" className="skills-icon" />
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
              <img src={skill6Icon} alt="" className="skills-icon" />
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
              <img src={skill7Icon} alt="" className="skills-icon" />
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
              <img src={skill8Icon} alt="" className="skills-icon" />
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
