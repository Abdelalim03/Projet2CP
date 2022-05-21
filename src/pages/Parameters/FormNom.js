import React from 'react'
import GetLanguage from '../../Components/GetLanguage'
import GetMode from '../../Components/GetMode'
import ChngMdpInputCard from './ChngMdpInputCard';
import ChngMdpInputCardAr from './ChngMdpInputCardAr';
import InputCard from './InputCard'
import InputCardAr from './InputCardAr';

export default function FormNom() {
  const language = GetLanguage();
  const mode = GetMode();
  return (
    <div className='h-[65%] w-3/4 font-["Tajawal"] lg:w-2/3 bg-white flex flex-col pt-14 gap-5 lg:gap-10 overflow-auto'>
        {(language === "français") && (mode === "eleve") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>Veuillez réintroduire votre nom </h1>}
        {(language === "arabe") && (mode === "eleve") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>أعد إدخال اسمك </h1>}
        {(language === "français") && (mode === "eleve") && <InputCard />}
        {(language === "arabe") && (mode === "eleve") && <InputCardAr />}
        {(language === "français") && (mode === "prof") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>Veuillez entrer le nouveau mot de passe </h1>}
        {(language === "arabe") && (mode === "prof") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>أدخل كلمة السر الجديدة </h1>}
        {(language === "français") && (mode === "prof") && <ChngMdpInputCard />}
        {(language === "arabe") && (mode === "prof") && <ChngMdpInputCardAr />}
    </div>
  )
}
