import React from 'react'
import GetLanguage from '../../Components/GetLanguage';


import CoursAr from './CoursAr';
import CoursFr from './CoursFr';

function Cours() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <CoursFr />  }
 { (language==="arabe")&&  <CoursAr /> }
      </>
    
   )
    }
  


export default Cours