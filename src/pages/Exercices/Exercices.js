import React from 'react'
import SideBar from '../../Components/SideBar'

function Exercices() {
  return (
    <div className='symapp-container'>
      <div className=' relative bg-white rounded-l-2xl lg:rounded-l-3xl   w-[92%] '>
          <img className='absolute left-36 top-16 w-[100px] h-[180px] py-9' src='/Exercices/flèche.jpg' alt='FlecheB'/>
          <div className='ml-[100px] pt-3 flex px-[160px]'>
                <p className='font-semibold text-xl px-2 py-7'>Obtenez les clés en résolvant les exercices pour gagner </p>
                <img className='h-[80px]' src='/Exercices/gift.jpg' alt='Gift'/>
          </div>
          <div className='ml-32 w-[900px] h-[600px] bg-slate-400'>
            
          </div>
      </div>
      
    </div>
  )
}

export default Exercices