import React,{useState} from 'react'


import NomAr from './NomAr';
import NomFr from './NomFr';

function Nom() {
  const [langue, setLangue] = useState("français");
  console.log(langue);
   return (    
     <>
{ (langue==="français")? <NomAr /> : <NomFr /> }
     </>
   
  )
    
  
}

export default Nom