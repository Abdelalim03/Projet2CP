

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AbsoluteAr from "./AbsoluteAr";
import CardAr from "./CardAr";
import ContinueAsAr from "./ContinueAsAr";
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

  return (
    <div className="font-['Tajawal'] relative w-screen h-screen ">
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
                path="/etesvous/Eleve.png"
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
              path="/etesvous/Eleve.png"
              scale="scale-100"
              name="تلميـذ"
            />
          </div>
        )}
        <Link to="/home/-1">
          <div
            onClick={() => {
              handleMode("prof");
            }}
          >
            <CardAr
              path="/etesvous/Enseignant.png"
              scale="scale-125"
              name="أستـاذ"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EtesVousAr;
