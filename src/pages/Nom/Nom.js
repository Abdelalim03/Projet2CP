import React from 'react'

import Absolute from './Absolute';
import InputCard from './InputCard';

function Nom() {
  
  return (    
    <div className="relative w-screen h-screen selection:bg-fuchsia-300">

        <Absolute />
        <h1 className='main-title'>Veuillez introduire votre nom </h1>
        <div className='flex justify-center'>
            <InputCard />
        </div>
    </div>
  )
}

export default Nom