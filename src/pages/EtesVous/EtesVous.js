import React from "react";
import { Link } from "react-router-dom";
import Absolute from "./Absolute";
import Card from "./Card";

function EtesVous() {
  console.log(__dirname);
  return (
    <div className="relative w-screen h-screen ">
      <Absolute />
      <h1 className="main-title">Êtes vous un</h1>
      <div class="flex absolute ml-[35%] mb-[24%]">
        <Link to="/nom">
          <div class="relative  transform hover:scale-105 transition ease-out cursor-pointer">
            <Card path="/etesvous/Enseignant.png" />
          
            <div class="mt-3 text-center font-semibold text-xl">
              <span>Elève</span>
            </div>
          </div>
        </Link>
        <Link to="/enseignant">
          <div class="relative ml-32 transform hover:scale-105 transition ease-out cursor-pointer">
            <Card path="/etesvous/Enseignant.png" />
            
            <div class=" mt-3 text-center font-semibold text-xl">
              <span>Enseignant</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EtesVous;
