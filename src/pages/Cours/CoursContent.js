import React from 'react'
import { useOutletContext } from 'react-router-dom';


import CoursContentAr from './CoursContentAr';
import CoursContentFr from './CoursContentFr';

function CoursContent() {
  const [language, setlanguage] = useOutletContext();
    return (    
      <>
 { (language==="français")&& <CoursContentFr />  }
 { (language==="arabe")&&  <CoursContentAr /> }
      </>
    
   )
    }
  


export default CoursContent