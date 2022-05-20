import React, { useState, useEffect } from "react";
import GetCurrentUser from "../../Components/GetCurrentUser";
import GetLanguage from "../../Components/GetLanguage";

import EtesVousAr from "./EtesVousAr";
import EtesVousFr from "./EtesVousFr";
import axios from "axios";
function EtesVous() {
  const language = GetLanguage();
  const [User, setUser] = useState("");
  const currentuserId = GetCurrentUser(); 
  

  useEffect(() => {
    if (currentuserId !== 0) {
      axios
        .get(`http://localhost:5000/users/${currentuserId}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentuserId]); 
  return (
    <>
      {language === "français" && (
        <EtesVousFr User={User} currentuserId={currentuserId} /> 
      )}
     
      {language === "arabe" && (
        <EtesVousAr User={User} currentuserId={currentuserId} />
      )}
    </>
  );
}

export default EtesVous;
