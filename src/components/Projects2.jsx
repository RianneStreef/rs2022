import React from "react";

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

const Projects = (props) => {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="projects" id="projects">
      <div className="header-placeholder" />

      <h3>{languageToUse.projects}</h3>

      <p className="grey-text intro-text">{languageToUse.projectsIntro}</p>
      <div className="project-images">
        <div className="card">
          <img
            src={claire}
            alt="Claire Turner Design Website"
            className="card-img"
          />
          <div className="card-body">
            <p class="card-title">{projects.claire.title}</p>{" "}
            <a href={projects.claire.link} class="card-sub-title">
              {projects.claire.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.claire.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.claire.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.claire.descriptionNl} </p>
            )}
          </div>
        </div>
        <div className="card">
          <img
            src={faceOuest}
            alt="Restaurant Face Ouest Website"
            className="card-img"
          />
          <div className="card-body">
            <p class="card-title">{projects.faceOuest.title}</p>
            <a href={projects.faceOuest.link} class="card-sub-title">
              {projects.faceOuest.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.faceOuest.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.faceOuest.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.faceOuest.descriptionNl} </p>
            )}
          </div>
        </div>
        <div className="card">
          <img src={core} alt="Core Move Website" className="card-img" />
          <div className="card-body">
            <p class="card-title">{projects.core.title}</p>
            <a href={projects.core.link} class="card-sub-title">
              {projects.core.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.core.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.core.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.core.descriptionNl} </p>
            )}
          </div>
        </div>
        <div className="card">
          <img
            src={seb}
            alt="Seb Gourmet Traiteur Website"
            className="card-img"
          />
          <div className="card-body">
            <p class="card-title">{projects.seb.title}</p>
            <a href={projects.seb.link} class="card-sub-title">
              {projects.seb.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.seb.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.seb.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.seb.descriptionNl} </p>
            )}
          </div>
        </div>
        <div className="card">
          <img
            src={rendezvous}
            alt="Restaurant le Rendez Vous Website"
            className=" card-img"
          />
          <div className="card-body">
            <p class="card-title">{projects.rendezvous.title}</p>
            <a href={projects.rendezvous.link} class="card-sub-title">
              {projects.rendezvous.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.rendezvous.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.rendezvous.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.rendezvous.descriptionNl} </p>
            )}
          </div>
        </div>
        <div className="card">
          <img
            src={caribou}
            alt="Chalet le Caribou Website"
            className="card-img"
          />
          <div className="card-body">
            <p class="card-title">{projects.caribou.title}</p>
            <a href={projects.caribou.link} class="card-sub-title">
              {projects.caribou.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.caribou.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.caribou.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.caribou.descriptionNl} </p>
            )}
          </div>
        </div>
        <div className="card">
          <img src={optic} alt="Optic 2300 Website" className="card-img" />
          <div className="card-body">
            <p class="card-title">{projects.optic.title}</p>
            <a href={projects.optic.link} class="card-sub-title">
              {projects.optic.link}
            </a>
            {language === "english" ? (
              <p class="card-info"> {projects.optic.descriptionEn} </p>
            ) : language === "french" ? (
              <p class="card-info"> {projects.optic.descriptionFr} </p>
            ) : (
              <p class="card-info"> {projects.optic.descriptionNl} </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
