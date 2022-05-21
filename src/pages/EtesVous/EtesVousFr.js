import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Absolute from "./Absolute";
import Card from "./Card";
import ContinueAsFr from "./ContinueAsFr";
import MdpForm from "./MdpForm";
import MdpInputCard from "./MdpInputCard";
const axios = require("axios");

function EtesVousFr({ User, currentuserId }) {
  
  const [showModal, setShowModal] = useState(false);
  // const [CurrentUser, setCurrentUser] = useState(User);
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
    <div className="relative w-screen h-screen ">
      <Absolute />
      <h1 className="main-title">Êtes vous un</h1>

      <div className={`absolute left-0 top-0 h-screen w-screen z-10 bg-slate-300/30 flex flex-col justify-center items-center ${!mdp && 'hidden'}`}>
            <div className='h-8 lg:h-12 w-3/4 lg:w-2/3 flex flex-row justify-end bg-blue-200'>
                <button onClick={showMdp} className='h-8 lg:h-12 w-8 lg:w-12 text-lg lg:text-2xl font-semibold text-center hover:bg-[#FAE0B2] bg-white/0' >x</button>
            </div>
            <MdpForm />
      </div>

      <div className="flex mt-3 gap-32 justify-center">
        <>
          <ContinueAsFr
            nom={User.nom}
            avatar={User.avatar}
            currentuserId={currentuserId} 
            Modal={showModal}
          />
        </>
        {currentuserId === 0 ? ( 
          <Link to="/nom">
            <div onClick={() => handleMode("eleve")}>
              <Card path="/etesvous/Eleve.png" scale="scale-100" name="Elève" />
            </div>
          </Link>
        ) : (
          <div
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Card path="/etesvous/Eleve.png" scale="scale-100" name="Elève" />
          </div>
        )}
          <div onClick={showMdp}>
            <Card
              path="/etesvous/Enseignant.png"
              scale="scale-125"
              name="Enseignant"
            />
          </div>
      </div>
    </div>
  );
}

export default EtesVousFr;
