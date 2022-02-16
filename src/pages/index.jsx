import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  console.log(languageToUse.metaKeywords);
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
      <Skills language={language} languageToUse={languageToUse} />
      <Projects language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
