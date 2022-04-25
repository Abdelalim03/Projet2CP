import React from 'react'
import SideBar from '../../Components/SideBar'
import Box from './Box'
import BoxV from './BoxV'

function Exercices() {
  return (
    <div className='symapp-container'>
      <div className=' relative bg-white rounded-l-2xl lg:rounded-l-3xl   w-[92%] '>
          <img className='absolute left-36 top-16 w-[100px] h-[180px] py-9' src='/Exercices/flèche.jpg' alt='FlecheB'/>
          <div className='ml-[100px] pt-3 flex px-[160px]'>
                <p className='font-semibold text-xl px-2 py-7'>Obtenez les clés en résolvant les exercices pour gagner </p>
                <img className='h-[80px]' src='/Exercices/gift.jpg' alt='Gift'/>
          </div>
          <table className='ml-32 border-collapse'>
            <tr>
              <BoxV />
              <BoxV />
              <BoxV />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </tr>

            <tr>
              <Box />
              <BoxV />
              <BoxV />
              <Box />
              <BoxV />
              <BoxV />
              <BoxV />
              <BoxV />
              <Box />
            </tr>

            <tr>
              <Box />
              <BoxV />
              <BoxV />
              <Box />
              <BoxV />
              <BoxV />
              <Box />
              <Box />
              <Box />
            </tr>
              
            <tr>
              <Box />
              <BoxV />
              <BoxV />
              <Box />
              <BoxV />
              <BoxV />
              <Box />
              <BoxV />
              <BoxV />
            </tr>
              
            <tr>
              <Box />
              <Box />
              <Box />
              <Box />
              <BoxV />
              <BoxV />
              <Box />
              <Box />
              <BoxV />
            </tr>
             

          </table>
      </div>
      
    </div>
  )
}

export default Exercices