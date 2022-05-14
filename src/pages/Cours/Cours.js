import axios from "axios";

import GetLanguage from '../../Components/GetLanguage';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoursAr from './CoursAr';
import CoursFr from './CoursFr';
import GetMode from "../../Components/GetMode";
import CoursFrProf from "./CoursProfFr";
import NoPage from "../NoPage/NoPage2"


function Cours() {
  const [User, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const language = GetLanguage();
  const mode = GetMode();
    return (    
      <>
 { (language==="français")&&(mode ==="eleve") && <CoursFr userAvatar={User.avatar} userName={User.nom} />  }
 { (language==="français")&&(mode ==="prof") && <CoursFrProf userAvatar={User.avatar} userName={User.nom} />  }
 { (language==="arabe")&& (mode ==="eleve") &&<CoursAr userAvatar={User.avatar} userName={User.nom} /> }
 { (language==="arabe")&& (mode ==="prof") &&<NoPage/> }
      </>
    
   )
    }
  


export default Cours