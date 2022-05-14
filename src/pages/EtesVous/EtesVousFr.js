import React from "react";
import { Link } from "react-router-dom";
import Absolute from "./Absolute";
import Card from "./Card";
const axios = require("axios");
function EtesVousFr() {
  const handleClick = (mode) => {
    axios
      .patch("http://localhost:5000/parametres", { mode: mode })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="relative w-screen h-screen ">
      <Absolute />
      <h1 className="main-title">Êtes vous un</h1>
      <div className="flex mt-3 gap-32 justify-center">
        <Link to="/nom">
          <div onClick={() => handleClick("eleve")}>
            <Card path="/etesvous/Eleve.png" scale="scale-100" name="Elève" />
          </div>
        </Link>
        <Link to="/home/-1">
          <div onClick={() => handleClick("prof")}>
            <Card
              path="/etesvous/Enseignant.png"
              scale="scale-125"
              name="Enseignant"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EtesVousFr;
