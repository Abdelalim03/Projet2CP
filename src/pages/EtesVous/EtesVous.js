import React,{useState} from 'react'
import GetLanguage from '../../Components/GetLanguage';

import EtesVousAr from './EtesVousAr';
import EtesVousFr from './EtesVousFr';

function EtesVous() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <EtesVousFr />  }
 { (language==="arabe")&&  <EtesVousAr /> }
      </>
    
  )
    }

export default EtesVous