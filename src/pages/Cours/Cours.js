import axios from "axios";

import GetLanguage from '../../Components/GetLanguage';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoursAr from './CoursAr';
import CoursFr from './CoursFr';
import GetMode from "../../Components/GetMode";
import NoPage from "../NoPage/NoPage2"
import CoursProfFr from "./CoursProfFr";
import CoursProfAr from "./CoursProfAr";


function Cours() {
  const [User, setUser] = useState(null);
  const { id } = useParams();
  const [Courses, SetCourses] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Courses]);
  useEffect(() => {
    fetch("http://localhost:5000/courses?_sort=position")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCourses(data);
        
      });
  }, []);

  const language = GetLanguage();
  const mode = GetMode();
    return (    
      <>
 { (language==="français")&&(mode ==="eleve") && <CoursFr userAvatar={User.avatar}  Courses={Courses} userName={User.nom} />  }
 { (language==="français")&&(mode ==="prof") && <CoursProfFr userAvatar={User.avatar} SetCourses={SetCourses} Courses={Courses} userName={User.nom} />  }
 { (language==="arabe")&& (mode ==="eleve") &&<CoursAr userAvatar={User.avatar} Courses={Courses} userName={User.nom} /> }
 { (language==="arabe")&& (mode ==="prof") &&<CoursProfAr userAvatar={User.avatar} SetCourses={SetCourses} Courses={Courses} userName={User.nom}/> }
      </>
    
   )
    }
  


export default Cours