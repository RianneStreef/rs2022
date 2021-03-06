import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Projects2 from "../components/Projects2";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, languageToUse, darkMode } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <Home language={language} languageToUse={languageToUse} />
      <About language={language} languageToUse={languageToUse} />
      <Resume language={language} languageToUse={languageToUse} />
      <Skills
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <Projects2
        language={language}
        languageToUse={languageToUse}
        darkMode={darkMode}
      />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
