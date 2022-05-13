import axios from "axios";

import GetLanguage from '../../Components/GetLanguage';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoursAr from './CoursAr';
import CoursFr from './CoursFr';

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
    return (    
      <>
 { (language==="français")&& <CoursFr userAvatar={User.avatar} userName={User.nom} />  }
 { (language==="arabe")&&  <CoursAr userAvatar={User.avatar} userName={User.nom} /> }
      </>
    
   )
    }
  


export default Cours