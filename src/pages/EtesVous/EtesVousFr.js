import React from "react";
import { Link } from "react-router-dom";
import Absolute from "./Absolute";
import Card from "./Card";

function EtesVousFr() {
  return (
    <div className="relative w-screen h-screen ">
      <Absolute />
      <h1 className="main-title">Êtes vous un</h1>
      <div className="flex mt-3 gap-32 justify-center">
        <Link to="/nom">
            <Card path="/etesvous/Eleve.png" scale="scale-100" name="Elève" />
        </Link>
        <Link to="/enseignant">
            <Card path="/etesvous/Enseignant.png" scale="scale-125" name="Enseignant" />
        </Link>
      </div>
    </div>
  );
}

export default EtesVousFr;
