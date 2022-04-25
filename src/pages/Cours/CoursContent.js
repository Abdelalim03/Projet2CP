import React from 'react'
import { Link } from 'react-router-dom'

export default function CoursContent() {
  return (
    <div className=' flex flex-col lg:gap-10 md:gap-2 lg:rounded-l-[50px] md:rounded-l-[30px] bg-white h-screen w-screen'>
<div className='bg-symapp-blue lg:h-40 md:h-20 lg:rounded-tl-[50px] md:rounded-tl-[30px] flex items-center '>
<div className="flex items-center lg:gap-10 md:gap-2 pl-6">
            <Link to="../cours">
              <div className="flex justify-center items-center lg:w-14 lg:h-14 md:h-9 md:w-9 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 hover:shadow-sm">
                <img className="w-fit" src="/quiz/return.svg" alt="" />
              </div>
            </Link>
            <div className="flex flex-col gap-1 items-start">
            <h1 className=' ml-3 lg:text-3xl md:text-lg text-white font-bold '>Chapitre 01 </h1>
    <p className=' ml-3 lg:text-lg md:text-sm text-white '>Chapitre Description </p>
            </div>
          </div>
   
</div>
    </div>
  )
}
