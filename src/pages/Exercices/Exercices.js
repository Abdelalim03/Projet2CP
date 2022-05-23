import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import ExercicesAr from './ExercicesAr';
import ExercicesFr from './ExercicesFr';




function Exercices() {
  const [language, setlanguage] = useOutletContext();
  let {id} = useParams();
  const [Max, setMax] = useState(1);
  useEffect( () => {
    axios.get("http://localhost:5000/users/"+id)
    .then(res=>{
      setMax(res.data.maxExo);
    });
  }, []);
  
    return (    
      <>
 { (language==="français")&& <ExercicesFr Max={Max} />  }
 { (language==="arabe")&&  <ExercicesAr Max={Max} /> }
      </>
   )
    }
  


export default Exercices