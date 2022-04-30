import React from 'react'
import GetLanguage from '../../Components/GetLanguage';


import NomAr from './NomAr';
import NomFr from './NomFr';

function Nom() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <NomFr />  }
 { (language==="arabe")&&  <NomAr /> }
      </>
    
   )
    }
  


export default Nom