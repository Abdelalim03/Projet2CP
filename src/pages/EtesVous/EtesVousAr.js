import React from "react";
import { Link } from "react-router-dom";
import AbsoluteAr from "./AbsoluteAr";
import CardAr from "./CardAr";

function EtesVousAr() {
  return (
    <div className="font-['Tajawal'] relative w-screen h-screen ">
      <AbsoluteAr />
      <h1 dir='rtl' className="main-title">هـل أنـت؟</h1>
      <div className="flex mt-3 gap-32 justify-center">
        <Link to="/enseignant">
            <CardAr path="/etesvous/Enseignant.png" scale="scale-125" name="أستـاذ" />
        </Link>
        <Link to="/nom">
            <CardAr path="/etesvous/Eleve.png" scale="scale-100" name="تلميـذ" />
        </Link>

      </div>
    </div>
  );
}

export default EtesVousAr;
