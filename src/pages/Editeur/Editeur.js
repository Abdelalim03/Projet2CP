import React from 'react'
import GetLanguage from '../../Components/GetLanguage';


import EditeurAr from './EditeurAr';
import EditeurFr from './EditeurFr';

function Editeur() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <EditeurFr />  }
 { (language==="arabe")&&  <EditeurAr /> }
      </>
    
   )
    }
  


export default Editeur