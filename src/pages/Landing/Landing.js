import React from "react";
import GetLanguage from "../../Components/GetLanguage";
import LandingAr from "./LandingAr";
import LandingFr from "./LandingFr";

function Landing() {
  const language = GetLanguage();
  return (
    <>
      {language === "français" && <LandingFr />}
      {language === "arabe" && <LandingAr />}
    </>
  );
}

export default Landing;
