import React from "react";

import "../styles/Resume.css";

import { content } from "../content/languages";

const Resume = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <div className="resume" id="resume">
        <div className="header-placeholder" />

        <h3>{languageToUse.resume}</h3>
        <p className="grey-text intro-text">{languageToUse.resumeIntro}</p>
        <div className="resume-cards">
          <div className="resume-card">
            <h5>2005-2010</h5>
            <h6>Bachelor of Business Administration in hotel management</h6>
            <p className="uppercase grey-text">Hotelschool The Hague</p>
            <p className="grey-text">{languageToUse.hdhIntro}</p>
          </div>
          <div className="resume-card">
            <h5>2020-2021</h5>
            <h6>Web Developer</h6>
            <p className="uppercase grey-text">OpenClassrooms</p>
            <p className="grey-text">{languageToUse.ocIntro}</p>
          </div>
          <div className="resume-card">
            <h5>2020-2022</h5>
            <h6>Various courses on development</h6>
            <p className="uppercase grey-text">Udemy</p>
            <p className="grey-text">{languageToUse.udemyIntro}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
