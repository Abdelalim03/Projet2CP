
import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
      <div className='flex flex-col fixed h-screen  left-0 top-0  justify-between items-center w-[8%] pt-14 lg:pt-16 px-3 lg:px-5'>
            <div >
                <button className='mb-6 lg:mb-9'><img className='w-6 lg:w-8 h-5 lg:h-7' src='/Cours/side bar/MenuIcon.svg' alt='menuic' /></button>
            <Link to="/menu">
            <button className='mb-2 lg:mb-3'><img className='w-14 lg:w-16 h-12 lg:h-14' src='/Cours/side bar/Instruction manual-rafiki 1.svg' alt='menuic' /></button>
            </Link>
            <Link to="/cours">
              <button className='mb-2 lg:mb-3'><img className='w-14 lg:w-16 h-12 lg:h-14' src='/Cours/side bar/Group.svg' alt='menuic' /></button>
            </Link>

            <Link to="/exercices">
              <button className='mb-2 lg:mb-3'><img className='w-14 lg:w-16 h-12 lg:h-14' src='/Cours/side bar/Group-1.svg' alt='menuic' /></button>
            </Link>
            <Link to="/dessiner">
              <button className='mb-2 lg:mb-28'><img className='w-14 lg:w-16 h-12 lg:h-14' src='/Cours/side bar/OutilLibreIcon.svg' alt='menuic' /></button>
            </Link>
            </div>
            <div  >
               <Link to="/parametres">
                  <button className='mb-20'><img className='w-14 lg:w-16 h-12 lg:h-14' src='/Cours/side bar/Maintenance-bro.svg' alt='menuic' /></button>
               </Link>
            </div>
        </div>
  )
}
