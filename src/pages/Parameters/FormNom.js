import React from 'react'
import GetLanguage from '../../Components/GetLanguage'
import InputCard from './InputCard'
import InputCardAr from './InputCardAr';

export default function FormNom() {
  const language = GetLanguage();
  return (
    <div className='h-4/5 w-3/4 font-["Tajawal"] lg:w-2/3 bg-white flex flex-col pt-14 gap-5 lg:gap-10 overflow-auto'>
        {(language === "français") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>Veuillez réintroduire votre nom </h1>}
        {(language === "arabe") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>أعد إدخال اسمك </h1>}
        {(language === "français") && <InputCard />}
        {(language === "arabe") && <InputCardAr />}
    </div>
  )
}
