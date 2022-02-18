import React, { useState } from "react";

import { content } from "../content/languages";
import { projects } from "../content/projects";

import "../styles/Projects.css";

import claire from "../images/claire.jpeg";
import faceOuest from "../images/faceOuest.jpeg";
import core from "../images/core.jpeg";
import seb from "../images/seb.jpeg";

const Projects = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let [show, setShow] = useState(false);
  let [project, setProject] = useState("");

  function handleSetProject(project) {
    setProject(project);
    setShow(true);
  }

  function closeProjectCard() {
    setShow(false);
  }

  return (
    <div className="projects" id="projects">
      {show ? (
        <div className="project-info">
          <div className="project-info-card">
            Project Info <span onClick={() => closeProjectCard()}>X</span>
            <p>title</p>
          </div>
        </div>
      ) : null}
      <h3>{languageToUse.projects}</h3>

      <p className="grey-text intro-text">{languageToUse.projectsIntro}</p>
      <div className="project-images">
        <img
          src={claire}
          alt="Claire Turner Design Website"
          className="project-image claire"
          onClick={() => handleSetProject("claire")}
        />
        <img
          src={faceOuest}
          alt="Restaurant FaceOuest Website"
          className="project-image faceOuest"
          onClick={() => handleSetProject("faceOuest")}
        />
        <img
          src={seb}
          alt="Restaurant FaceOuest Website"
          className="project-image seb"
          onClick={() => handleSetProject("seb")}
        />
        <img
          src={core}
          alt="Claire Turner Design Website"
          className="project-image core"
          onClick={() => handleSetProject("core")}
        />
      </div>
    </div>
  );
};

export default Projects;
