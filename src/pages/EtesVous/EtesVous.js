import React, { useState, useEffect } from "react";
import GetCurrentUser from "../../Components/GetCurrentUser";
import GetLanguage from "../../Components/GetLanguage";

import EtesVousAr from "./EtesVousAr";
import EtesVousFr from "./EtesVousFr";
import axios from "axios";
function EtesVous() {
  const language = GetLanguage();
  // const currentuserId = 1
  // const [currentuserId, setCurr] = useState(GetCurrentUser()); // hna le pb
  //rak dayer fl getCurrentuser intial = 0 dok
  const [User, setUser] = useState("");
  const currentuserId = GetCurrentUser(); //here is the problem..............treturni "" tsemma aw ra7 yfetchi all users...=> User.id undefined
  // console.log(currentuserId);

  useEffect(() => {
    if (currentuserId !== 0) {
      axios
        .get(`http://localhost:5000/users/${currentuserId}`)
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentuserId]); //boucle infinie with User...ommit User...with currentuserId it's Nice.
  // console.log(User.id);
  // console.log(currentuserId);
  return (
    <>
      {language === "français" && (
        <EtesVousFr User={User} currentuserId={currentuserId} /> //u can ommit the currentId and tkhdem ghir blokher li rak tfetchi bih...mais les cas te3 curent =0 y93ed na9es
      )}
      {/* {language === "français" && (
        <EtesVousFr User={User} /> //u can ommit the currentId and tkhdem ghir blokher li rak tfetchi bih...mais les cas te3 curent =0 y93ed na9es
      )} */}
      {language === "arabe" && (
        <EtesVousAr User={User} currentuserId={currentuserId} />
      )}
    </>
  );
}

export default EtesVous;
