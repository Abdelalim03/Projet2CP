import React from 'react'
import { Link } from 'react-router-dom'
import AbsoluteLandingAr from './AbsoluteLandingAr'
import AbsoluteLending from './AbsoluteLending'

function LandingAr() {
  return (
    <div className='relative w-screen h-screen selection:bg-fuchsia-300'>
       <div className='flex justify-end'>
            <div className='absolute right-3 top-3 lg:top-5 font-light text-2xl lg:text-4xl'>
              LOGO
            </div>
            <div className='w-[40%] h-screen py-20 lg:py-32 flex flex-col '>
            <div className='flex flex-col h-[40%] mr-[10%]'>
              <div className="text-right font-['Tajawal'] font-normal text-6xl md:text-7xl lg:text-8xl mb-[10%]">
                <h1 className='inline text-[#7EABFF]'>،</h1>
                <h1 className='inline'>مرحبا </h1>
                <h1 className='inline text-[#F47458]'>!</h1>
              </div>
              
              <div className="text-right font-normal font-['Tajawal'] lg:font-medium text-2xl md:text-3xl lg:text-4xl">
                  <h2>عالم مليئ بالتناظر</h2>
                  <h2 className='inline'>ينتظرك</h2>
              </div>
            </div>
            <Link to="/choix" className="mt-16 lg:mt-24 font-['Tajawal'] flex items-center justify-center text-center text-white font-bold text-base md:text-xl lg:text-2xl bg-[#7EABFFB2] hover:bg-[#466EB6B2] w-fit py-3 px-10 lg:px-16 h-13 lg:h-14 ml-32 lg:ml-56 rounded-2xl transition-transform hover:translate-y-[-3%]">
                 ! اكتشفه الآن 
            </Link>
            </div>
        </div>
        <AbsoluteLandingAr />
    </div>
  )
}

export default LandingAr