import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GetLanguage from '../../Components/GetLanguage';
import ExercicesAr from './ExercicesAr';
import ExercicesFr from './ExercicesFr';




function Exercices() {
  const language = GetLanguage();
  let {id} = useParams();
  const [Max, setMax] = useState(1);
  useEffect(async () => {
   await axios.get("http://localhost:5000/users/"+id)
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