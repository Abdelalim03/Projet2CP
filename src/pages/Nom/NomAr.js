import React from 'react'
import AbsoluteAr from './AbsoluteAr'
import InputCard from './InputCard'
import InputCardAr from './InputCardAr'

function NomAr() {
  return (
    <div  className=" relative w-screen h-screen selection:bg-fuchsia-300">
        <AbsoluteAr />
        <h1 dir='rtl' className='main-title'> من فضلك أدخل اسمك </h1>
        <div className='flex  justify-center'>
            <InputCardAr />
        </div>
    </div>
  )
}

export default NomAr