import React from "react";
import { Link } from "react-router-dom";

function EtesVous() {
  console.log(__dirname);
  return (
    <div className="relative w-screen h-screen ">
      <div>
      <img
        className="absolute right-0 w-[70%] h-[24%] -z-10"
        src="/etesvous/Vague_haut.svg"
        alt="vague_haut"
      />
            <img
        className="absolute w-5 right-[45%] top-[5%] "
        src="/etesvous/Etoile1.png"
        alt="Etoile1"
      />
            <img
        className="absolute w-3 right-[40%] top-[15%] "
        src="/etesvous/Rectangle_bleu.svg"
        alt="Rectangle_bleu"
      />
      <img
        className="absolute w-20 right-[20%] top-[10%] "
        src="/etesvous/Points.png"
        alt="Points"
      />
      <img
        className="absolute w-16 right-[5%] top-[7%] "
        src="/etesvous/x.png"
        alt="x"
      />
      <img
        className="absolute w-5 right-[28%] top-[3%] "
        src="/etesvous/Polyg_Gris.png"
        alt="Polyg_Gris"
      />
      <img
        className="absolute w-10 right-[5%] top-[26%] "
        src="/nom/Group 58.png"
        alt="xxshape"
      />
      <img
        className="absolute w-20 left-[37%] top-0 "
        src="/etesvous/CircleShape.png"
        alt="CircleShape"
      />
</div>

<div>
      <img
        className="absolute left-0 bottom-0 w-[70%] -z-10"
        src="/etesvous/Vague_bas.svg"
        alt="vague_bas"
      />
      <img
        className="absolute w-10 left-36 bottom-7 "
        src="/etesvous/Min9alasghira.png"
        alt="Min9alasghira"
      />
      <img
        className="absolute w-5 left-[54%] bottom-[3%]"
        src="/etesvous/Polyg_Orange.png"
        alt="Polyg_Orange.png"
      />

      <img
        className="absolute w-5 left-[5%] bottom-[3%] "
        src="/etesvous/Etoile1.png"
        alt="Etoile1"
      />
</div>



      <img
        className="absolute w-5 left-0 top-[40%] "
        src="/etesvous/Polygon 3.png"
        alt="Polygon"
      />
      <img
        className="absolute w-5 left-[10%] bottom-[30%] "
        src="/etesvous/Rectangle_rose.svg"
        alt="Rectangle_rose"
      />


      <h1 className="main-title">
        Êtes vous un
      </h1>

      <div class="flex absolute ml-[35%] mb-[24%]">
        <Link to="/nom">
          <div class="relative hover:shadow-lg transform hover:scale-110 transition ease-out cursor-pointer">
            <img className="w-40" src="/etesvous/CardElev.png" alt="Card_Elev" />
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
