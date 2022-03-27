import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Nom() {
    console.log(__dirname);
  return (
    // bg-[url('./1st_bg.png')] bg-contain bg-no-repeat 
    
    <div className="relative w-screen h-screen ">
    {/* <img src='./1st_bg.png' className='absolute w-full h-full -z-50' alt="khra" /> */}
    {/* w-[460px] lg:w-auto */}
        <img className='absolute right-0 w-[48%] lg:w-[40%] -z-10' src='/vague_droite.png' alt='vague_dr' />
        <img className='absolute left-0 bottom-0 w-[55%] lg:w-[45%] -z-10' src='/vague_gauche.png' alt='vague_ga' />
        <img className='absolute w-16 lg:w-auto left-5 bottom-5 ' src='/kousssghir.png' alt='vague_ga' />
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
        <h1 className=' leading-10 font-semibold text-[#194084] text-3xl lg:text-5xl p-16 lg:p-28'>Veuillez introdure votre nom </h1>
        <div className='flex justify-center'>
            <div className="relative flex  justify-center items-center lg:-mt-4 h-52 lg:h-72 w-[55%] lg:w-[43%] bg-[url('./grid.png')] bg-[#80aaff12] border-solid border-4 border-[#0083CB] rounded-3xl ">
                <img className='absolute -left-7 -bottom-[6px] lg:-bottom-[7px] h-[72%] lg:-left-10' src='/kateb.png'  alt='kateb'/>
                <img className='absolute left-[55%] bottom-[10%] ' src='/Rectangle 74.svg' alt='rect'/>
                <div className="overflow-hidden">
                  <img className='absolute top-0 left-[60%]' src='/Polygon 10.svg' alt='poly'/>
                </div>
                <img className='absolute left-[30%] top-[10%] ' src='/Group 70.svg' alt='rect'/>
                <div className='flex formul overflow-hidden h-14 p-0 lg:h-16 border-[0] border-[#0083CB] rounded-3xl w-[65%]'>
                <input type="text" className='h-full m-0 pl-9 pr-2 text-base lg:text-xl w-[70%] focus:outline-none' placeholder="Nom d'utilisateur" />
                  <button className="w-[30%] h-full m-0 suivant rounded-r-3xl bg-[#0083CBB2] hover:bg-[#194084F2] text-base lg:text-2xl text-white font-bold lg:px-4 focus:outline-none transition ease-in-out delay-150 duration-300" type="button">
                    suivant <FontAwesomeIcon className='text-white bg-white w-10' icon="fa-light fa-arrow-right-to-bracket" />
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nom