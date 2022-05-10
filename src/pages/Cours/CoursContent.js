import React from 'react'
import GetLanguage from '../../Components/GetLanguage';


import CoursContentAr from './CoursContentAr';
import CoursContentFr from './CoursContentFr';

function CoursContent() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <CoursContentFr />  }
 { (language==="arabe")&&  <CoursContentAr /> }
      </>
    
   )
    }
  


export default CoursContent