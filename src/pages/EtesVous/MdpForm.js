import React from 'react'
import GetLanguage from '../../Components/GetLanguage'
import MdpInputCard from './MdpInputCard';
import MdpInputCardAr from './MdpInputCardAr';

export default function MdpForm() {
  const language = GetLanguage();
  return (
    <div className='h-[65%] w-3/4 font-["Tajawal"] lg:w-2/3 bg-white flex flex-col pt-14 gap-5 lg:gap-10 overflow-auto'>
        {(language === "français") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>Veuillez Entrer le mot de passe  </h1>}
        {(language === "arabe") && <h1 className='text-center text-xl lg:text-2xl font-semibold text-[#194084]'>أدخل كلمة السر </h1>}
        {(language === "français") && <MdpInputCard />}
        {(language === "arabe") && <MdpInputCardAr />}
    </div>
  )
}
