import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import CoursAr from './CoursAr';
import CoursFr from './CoursFr';
import GetMode from "../../Components/GetMode";
import CoursProfFr from "./CoursProfFr";
import CoursProfAr from "./CoursProfAr";


function Cours() {
  const { id } = useParams();
  const [language, setlanguage] = useOutletContext();
  const [User, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [Courses, SetCourses] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();


      fetch(`http://localhost:5000/users/${id}`, { signal: abortControl.signal })
      .then(res => {
        if (!res.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setUser(data);
        fetch("http://localhost:5000/courses?_sort=position")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        SetCourses(data);
      });
      })
      .catch(err => { 
          setIsPending(false);
          console.log(err.message);
      })
    return () => abortControl.abort();
  }, [id])
 
  const mode = GetMode();
   return (    
      <>
      {isPending && <div className={`${(language==="français")? "symapp-container" :"symapp-container-Ar" } flex justify-center items-center font-bold text-5xl`}></div> }
 {  Courses && (language==="français")&&(mode ==="eleve") && <CoursFr userAvatar={User.avatar}  Courses={Courses} userName={User.nom} />  }
 { Courses && (language==="français")&&(mode ==="prof") && <CoursProfFr userAvatar={User.avatar} SetCourses={SetCourses} Courses={Courses} userName={User.nom} />  }
 {  Courses && (language==="arabe")&& (mode ==="eleve") &&<CoursAr userAvatar={User.avatar} Courses={Courses} userName={User.nom} /> }
 {  Courses && (language==="arabe")&& (mode ==="prof") &&<CoursProfAr userAvatar={User.avatar} SetCourses={SetCourses} Courses={Courses} userName={User.nom}/> }
      </>
    
   )
    }
  


export default Cours