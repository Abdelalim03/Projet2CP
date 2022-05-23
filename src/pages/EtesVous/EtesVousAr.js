

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AbsoluteAr from "./AbsoluteAr";
import CardAr from "./CardAr";
import ContinueAsAr from "./ContinueAsAr";
import MdpForm from "./MdpForm";
const axios = require("axios");

function EtesVousAr({ User, currentuserId }) {

  const [showModal, setShowModal] = useState(false);
  const handleMode = (mode) => {
    axios
      .patch("http://localhost:5000/parametres", { mode: mode })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleShow = (show) => {
    setShowModal(show);
  };
  useEffect(() => {
    if (currentuserId === 0) setShowModal(false);
  });

  const [mdp, setMdp] = useState(false)

  const showMdp = () =>{setMdp(!mdp);}

  return (
    <div className="font-['Tajawal'] relative w-screen h-screen ">
      <div className={`absolute left-0 top-0 h-screen w-screen z-10 bg-slate-300/30 flex flex-col justify-center items-center ${!mdp && 'hidden'}`}>
            <div className='h-8 lg:h-12 w-3/4 lg:w-2/3 flex flex-row justify-end bg-blue-200'>
                <button onClick={showMdp} className='h-8 lg:h-12 w-8 lg:w-12 text-lg lg:text-2xl font-semibold text-center hover:bg-[#FAE0B2] bg-white/0' >x</button>
            </div>
            <MdpForm />
      </div>
      <AbsoluteAr />
      <h1 dir="rtl" className="main-title">
        هـل أنـت؟
      </h1>
      <div className="flex flex-row-reverse mt-3 gap-32 justify-center">
        <>
          <ContinueAsAr
            nom={User.nom}
            avatar={User.avatar}
            currentuserId={currentuserId} 
            Modal={showModal}
          />
        </>
        {currentuserId === 0 ? ( 
          <Link to="/nom">
            <div onClick={() => handleMode("eleve")}>
              <CardAr
                path="./etesvous/Eleve.png"
                scale="scale-100"
                name="تلميـذ"
              />
            </div>
          </Link>
        ) : (
          <div
            onClick={() => {
              setShowModal(true);
            }}
          >
            <CardAr
              path="./etesvous/Eleve.png"
              scale="scale-100"
              name="تلميـذ"
            />
          </div>
        )}
          <div
            onClick={showMdp}
          >
            <CardAr
              path="./etesvous/Enseignant.png"
              scale="scale-125"
              name="أستـاذ"
            />
          </div>
      </div>
    </div>
  );
}

export default EtesVousAr;
