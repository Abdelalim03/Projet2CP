import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Absolute from '../Nom/Absolute'
import AbsoluteLending from './AbsoluteLending'

function Landing() {
  

  return (
    <div className='w-screen h-screen selection:bg-fuchsia-300'>
        <div className='flex justify-start'>
            <div className='w-[40%] h-screen py-20 lg:py-32 flex flex-col '>
            <div className='flex flex-col h-[40%] ml-[10%]'>
              <div className='text-left font-normal text-6xl md:text-7xl lg:text-8xl mb-[10%]'>
                <h1 className='inline text-[#F47458]'>!</h1>
                <h1 className='inline'> He</h1>
                <h1 className='inline text-[#7EABFF]'>,</h1>
              </div>
              
              <div className='text-left font-normal lg:font-medium text-2xl md:text-3xl lg:text-4xl'>
                  <h2>Un tours dans</h2>
                  <h2 className='inline'>l'univers parallèle</h2>
                  <h2 className='inline text-[#F47458]'> ?</h2>
              </div>
            </div>
            <Link to="/choix" className='  mt-16 lg:mt-24 flex items-center justify-center text-center text-white font-bold text-base md:text-xl lg:text-2xl bg-[#7EABFFB2] hover:bg-[#466EB6B2] w-fit py-3 px-10 lg:px-16 h-13 lg:h-14 ml-8 lg:ml-16 rounded-2xl transition-transform hover:translate-y-[-3%]'>
              C'est parti
            </Link>
            </div>
        </div>
        <AbsoluteLending />
      </div>
  )
}

export default Landing