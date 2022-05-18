import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logo() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("langue")
    }, 7000);
  return (
      <div className='flex flex-row justify-center items-center h-screen w-screen bg-[#FDFDFD]'>
         <img className='mb-14 lg:h-[400px] lg:w-[950px] h-[300px] w-[650px]' src='./Gif/logo.gif'/>
         
      </div>
      
  )
}

export default Logo