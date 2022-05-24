import React from 'react'
import { Link } from 'react-router-dom'
import AbsoluteLending from './AbsoluteLending'

function LandingFr() {
  

  return (
    <div className='relative w-screen h-screen selection:bg-fuchsia-300'>
        <div className='flex justify-start'>
            <div className='absolute left-3 top-4 lg:top-5 font-light text-2xl lg:text-4xl'>
              <img className='h-16'  src="./landing/logos.svg" alt="logo" />
            </div>
            <div className='w-[40%] h-screen py-20 lg:py-32 flex flex-col '>
            <div className='flex flex-col h-[40%] mb-20 lg:mb-28 ml-[10%]'>
              <div className='text-left font-normal text-4xl md:text-5xl lg:text-6xl mb-[10%]'>
                
                <h1 className='inline text-[#18263f]'>Bienvenue!</h1>
          
              </div>
              
              <div className='text-left font-normal text-[#18263f] lg:font-medium text-2xl lg:text-4xl'>
                <div className='h-fit w-fit mb-10 lg:mb-16'>
                  <h2>Un monde plein de   </h2>
                  <h2 className='inline'>symetrie vous attend</h2>
                </div> 
                <h2> Découvrez le ! </h2> 
              </div>
            </div>
            <Link to="/choix" className='  mt-16 lg:mt-24 flex items-center justify-center text-center text-white font-bold text-base md:text-xl lg:text-2xl bg-[#7EABFFB2] hover:bg-[#466EB6B2] w-fit py-3 px-10 lg:px-16 h-13 lg:h-14 ml-8 lg:ml-16 rounded-2xl transition-transform hover:translate-y-[-3%]'>
              C'est parti!
            </Link>
            </div>
        </div>
        <AbsoluteLending />
      </div>
  )
}

export default LandingFr