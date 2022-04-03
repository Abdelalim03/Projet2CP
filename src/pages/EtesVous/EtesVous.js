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
          <div class="relative hover:shadow-lg transform hover:scale-105 transition ease-out cursor-pointer">
            <div class="inline-flex h-64 w-48 items-center justify-center">
              <div class="flex h-full flex-1 -rotate-3 transform items-center justify-center rounded-2xl bg-[#C7DBFE] p-5">
                <div class="h-full flex-1 rotate-3 rounded-2xl border-2 border-[#194084] bg-[#FFC5C1]" />
              </div>
            </div>
            <img
              className="w-28 inline-block absolute bottom-16 left-10"
              src="/etesvous/Eleve.png"
              alt="Eleve"
            />
            <div class="text-center font-semibold text-xl">
              <span>Elève</span>
            </div>
          </div>
        </Link>
        <Link to="/enseignant">
          <div class="relative ml-32 hover:shadow-lg transform hover:scale-105 transition ease-out cursor-pointer">
          <div class="inline-flex h-64 w-48 items-center justify-center">
              <div class="flex h-full flex-1 -rotate-3 transform items-center justify-center rounded-2xl bg-[#C7DBFE] p-5">
                <div class="h-full flex-1 rotate-3 rounded-2xl border-2 border-[#194084] bg-[#FFC5C1]" />
              </div>
            </div>
            <img
              className="w-36 inline-block absolute bottom-14 left-5"
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
