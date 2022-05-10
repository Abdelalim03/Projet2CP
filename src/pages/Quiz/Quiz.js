import React from 'react'
import GetLanguage from '../../Components/GetLanguage';

import QuizFr from './QuizFr';
import QuizAr from './QuizAr';

function Quiz() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <QuizFr />  }
 { (language==="arabe")&&  <QuizAr /> }
      </>
    
   )
    }
  


export default Quiz