import React from "react";
import { Link } from "react-router-dom";
import AbsoluteAr from "./AbsoluteAr";
import CardAr from "./CardAr";
const axios = require("axios")

function EtesVousAr() {
  const handleClick = (mode) => {
    axios
      .patch("http://localhost:5000/parametres", { mode: mode })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="font-['Tajawal'] relative w-screen h-screen ">
      <AbsoluteAr />
      <h1 dir='rtl' className="main-title">هـل أنـت؟</h1>
      <div className="flex mt-3 gap-32 justify-center">
        <Link to="/home/-1">
          <div onClick={()=> { handleClick("prof")}}>
            <CardAr path="/etesvous/Enseignant.png" scale="scale-125" name="أستـاذ" />
            </div>
        </Link>
        <Link to="/nom">
        <div onClick={() => handleClick("eleve")}>
            <CardAr path="/etesvous/Eleve.png" scale="scale-100" name="تلميـذ" />
            </div>
        </Link>
        

      </div>
    </div>
  );
}

export default EtesVousAr;
