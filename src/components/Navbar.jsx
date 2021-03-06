import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
import flagNl from "../images/icon-nl.png";

import { content } from "../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 100;
  background-color: var(--background-color);
  margin-top: 0;
  padding-left: 0;
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-right: 25px;
    margin: 10px 0;
    font-family: "Montserrat";
    font-size: 20px;
    a {
      color: #fff;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight-blue);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
  }
  flex-flow: column nowrap;
  background-color: #000;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 5rem;
  transition: transform 0.3s ease-in-out;
`;

const Navbar = (props) => {
  let { open, setOpen } = props;

  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="nav-bar">
      <Ul open={open}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setOpen(!open)}>
            {languageToUse.home}
          </Link>
        </li>
        <li>
          <Link
            to="/#about"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.about}
          </Link>
        </li>
        <li>
          <Link
            to="/#resume"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.resume}
          </Link>
        </li>
        <li>
          <Link
            to="/#skills"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.skills}
          </Link>
        </li>
        <li>
          <Link
            to="/#projects"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.projects}
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.contact}
          </Link>
        </li>

        <li className="social-links-header">
          <div className="nav-item-language">
            <img
              src={flagEn}
              onClick={() => handleSetLanguage("english")}
              className={`flag ${
                languageToUse.language === "english" ? "opaque" : "fade"
              } `}
            />
            <img
              src={flagFr}
              onClick={() => handleSetLanguage("french")}
              className={`flag ${
                languageToUse.language === "french" ? "opaque" : "fade"
              } `}
            />
            <img
              src={flagNl}
              onClick={() => handleSetLanguage("dutch")}
              className={`flag ${
                languageToUse.language === "dutch" ? "opaque" : "fade"
              } `}
            />
          </div>
        </li>
      </Ul>
    </div>
  );
};

export default Navbar;
