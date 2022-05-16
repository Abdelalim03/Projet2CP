import React from 'react'
import GetLanguage from '../../Components/GetLanguage';
import ExercicesAr from './ExercicesAr';
import ExercicesFr from './ExercicesFr';




function Exercices() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <ExercicesFr />  }
 { (language==="arabe")&&  <ExercicesAr /> }
      </>
    
   )
    }
  


export default Exercices