import React from 'react'
import Absolute from '../Nom/Absolute'
import AbsoluteLending from './AbsoluteLending'

function Landing() {
  return (
    <div className='w-screen h-screen'>
        <div className='flex justify-start'>
            <div className='w-[40%] h-screen  flex flex-col justify-around'>
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
            <button className='text-center text-white font-bold text-base md:text-xl lg:text-2xl bg-[#0083CBB2] hover:bg-[#194084F2] h-[8%] ml-[25%] mr-[25%] rounded-2xl transition-transform hover:translate-y-[-3%]'>C'est parti</button>
          </div>
        </div>
        <AbsoluteLending />
      </div>
  )
}

export default Landing