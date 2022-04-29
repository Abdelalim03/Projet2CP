import React,{useState} from 'react'


import NomAr from './NomAr';
import NomFr from './NomFr';

function Nom() {
  const [langue, setLangue] = useState("arabe");

  return (    
     <>
{ (langue==="français")? <NomFr /> : <NomAr /> }
     </>
   
  )
    
  
}

export default Nom