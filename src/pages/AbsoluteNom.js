import React from 'react'

export default function AbsoluteNom() {
    console.log(__dirname);
  return (
    <div>
    <img className='absolute right-0 w-[48%] lg:w-[40%] -z-10' src='/vague_droite.png' alt='vague_dr' />
        <img className='absolute left-0 bottom-0 w-[55%] lg:w-[45%] -z-10' src='/vague_gauche.png' alt='vague_ga' />
        <img className='absolute w-16 lg:w-auto left-5 bottom-5 ' src='/kousssghir.png' alt='kousssghir' />
        <img className='absolute w-20 lg:w-auto right-[20%] top-[10%] ' src='/pol.png' alt='vague_ga' />
        <img className='absolute w-24 lg:w-auto left-[40%] bottom-0' src='/Group 23.png' alt='vague_ga' />
        <img className='absolute w-10 lg:w-auto right-[12%] top-[32%] ' src='/Group 58.png' alt='vague_ga' />
        <img className='absolute w-20 lg:w-auto left-[48%] lg:left-[55%] top-0 ' src='/Group 60.png' alt='vague_ga' />
        <img className='absolute w-10 lg:w-auto left-[17%] lg:left-[14%] bottom-[17%] ' src='/Group 61.png' alt='vague_ga' />
        <img className='absolute w-24 lg:w-auto left-0 top-[40%] ' src='/CircleShape.png' alt='vague_ga' />
        <img className='absolute w-24 lg:w-auto left-0 top-[40%] ' src='/CircleShape.png' alt='vague_ga' />
        <img className='absolute w-8 lg:w-auto right-[7%] bottom-[5%] ' src='/Polygon 9.png' alt='vague_ga' />
        <img className='absolute w-4 lg:w-auto right-[25%] bottom-[15%] ' src='/Rectangle 72.png' alt='vague_ga' />
        <img className='absolute w-8 lg:w-auto right-[8%] bottom-[35%] ' src='/Rectangle 59.png' alt='vague_ga' />
    </div>
  )
}
