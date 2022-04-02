import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Absolute from "./Absolute";

function EtesVous() {
  console.log(__dirname);
  return (
    <div className="relative w-screen h-screen ">
      <Absolute />

      <h1 className="main-title">Êtes vous un</h1>

      <div class="flex absolute ml-[35%] mb-[24%]">
        <Link to="/nom">
          <div class="relative hover:shadow-lg transform hover:scale-110 transition ease-out cursor-pointer">
            <img
              className="w-40"
              src="/etesvous/CardElev.png"
              alt="Card_Elev"
            />
            <img
              className="w-24 inline-block absolute bottom-16 left-6"
              src="/etesvous/Eleve.png"
              alt="Eleve"
            />
            <div class="text-center font-semibold text-xl">
              <span>Elève</span>
            </div>
          </div>
        </Link>
        <Link to="/enseignant">
          <div class="relative ml-28 hover:shadow-lg transform hover:scale-105 transition ease-out cursor-pointer">
            <img className="w-40" src="/etesvous/Card_Ens.png" alt="Card_Ens" />
            <img
              className="w-32 inline-block absolute bottom-14 left-3"
              src="/etesvous/Enseignant.png"
              alt="Enseignant"
            />
            <div class="text-center font-semibold text-xl">
              <span>Enseignant</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EtesVous;
