import React,{useState} from 'react'

import EtesVousAr from './EtesVousAr';
import EtesVousFr from './EtesVousFr';

function EtesVous() {
  const [langue, setLangue] = useState("arabe");

  return (    
     <>
{ (langue==="français")? <EtesVousFr /> : <EtesVousAr /> }
     </>
   
  )
    
  
}

export default EtesVous