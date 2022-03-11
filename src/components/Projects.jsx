import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";
import { projects } from "../content/projects";

import "../styles/Projects.css";

import claire from "../images/claire.jpeg";
import faceOuest from "../images/faceOuest.jpeg";
import core from "../images/core.jpeg";
import seb from "../images/seb.jpeg";
import rendezvous from "../images/rendezvous.jpeg";
import caribou from "../images/caribou.jpeg";
import optic from "../images/optic.jpeg";

import x from "../images/x.png";
import xWhite from "../images/x-white.png";

const Projects = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  let [show, setShow] = useState(false);
  let [currentProject, setProject] = useState("");

  function handleSetProject(project) {
    setProject(project);
    setShow(true);
  }

  function closeProjectCard() {
    setShow(false);
  }

  let projectToShow = projects[currentProject];

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = show ? "hidden" : "auto";
  }, [show, currentProject]);

  return (
    <div className="projects" id="projects">
      <div className="header-placeholder" />

      {show ? (
        <div className="project-info">
          <div className="project-info-card">
            {darkMode === false ? (
              <img src={x} onClick={() => closeProjectCard()} className="x" />
            ) : (
              <img
                src={xWhite}
                onClick={() => closeProjectCard()}
                className="x"
              />
            )}
            <div className="project-info-card-inner">
              <p className="product-card-title">{projectToShow.title}</p>
              {language === "english" ? (
                <p>{projectToShow.descriptionEn}</p>
              ) : null}
              {language === "french" ? (
                <p>{projectToShow.descriptionFr}</p>
              ) : null}
              {language == "dutch" ? (
                <p>{projectToShow.descriptionNl}</p>
              ) : null}
              <a href={projectToShow.link} target="_blank">
                {projectToShow.link}
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <h3>{languageToUse.projects}</h3>

      <p className="grey-text intro-text">{languageToUse.projectsIntro}</p>
      <div className="project-images">
        <Link to="/#projects">
          <img
            src={claire}
            alt="Claire Turner Design Website"
            className="project-image claire"
            onClick={() => handleSetProject("claire")}
          />
        </Link>
        <Link to="/#projects">
          <img
            src={faceOuest}
            alt="Restaurant FaceOuest Website"
            className="project-image faceOuest"
            onClick={() => handleSetProject("faceOuest")}
          />
        </Link>
        <Link to="/#projects">
          <img
            src={seb}
            alt="Restaurant FaceOuest Website"
            className="project-image seb"
            onClick={() => handleSetProject("seb")}
          />
        </Link>
        <Link to="/#projects">
          <img
            src={caribou}
            alt="Restaurant Caribou Website"
            className="project-image caribou"
            onClick={() => handleSetProject("caribou")}
          />
        </Link>
        <Link to="/#projects">
          <img
            src={core}
            alt="Claire Turner Design Website"
            className="project-image core"
            onClick={() => handleSetProject("core")}
          />
        </Link>

        <Link to="/#projects">
          <img
            src={rendezvous}
            alt="Restaurant Rendez Vous Website"
            className="project-image rendezvous"
            onClick={() => handleSetProject("rendezvous")}
          />
        </Link>
        <Link to="/#projects">
          <img
            src={optic}
            alt="Optic 2300"
            className="project-image optic"
            onClick={() => handleSetProject("optic")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
