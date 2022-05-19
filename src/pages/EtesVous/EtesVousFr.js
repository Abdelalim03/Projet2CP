import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetCurrentUser from "../../Components/GetCurrentUser";
import Absolute from "./Absolute";
import Card from "./Card";
import ContinueAsFr from "./ContinueAsFr";
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

  return (
    <div className="relative w-screen h-screen ">
      <Absolute />
      <h1 className="main-title">Êtes vous un</h1>

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
        <Link to={`/home/-1/`}>
          <div onClick={() => handleMode("prof")}>
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
