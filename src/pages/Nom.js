import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import AbsoluteNom from './AbsoluteNom';

function Nom() {
    console.log(__dirname);
  return (    
    <div className="relative w-screen h-screen ">

        <AbsoluteNom />
        <h1 className='main-title'>Veuillez introdure votre nom </h1>
        <div className='flex justify-center'>
            <div className="relative flex  justify-center items-center lg:-mt-4 h-52 lg:h-72 w-[55%] lg:w-[43%] bg-[url('./grid.png')] bg-[#80aaff12] border-solid border-4 border-[#0083CB] rounded-3xl ">
                <img className='absolute -left-7 -bottom-[6px] lg:-bottom-[7px] h-[72%] lg:-left-10' src='/kateb.png'  alt='kateb'/>
                <img className='absolute left-[55%] bottom-[10%] ' src='/Rectangle 74.svg' alt='rect'/>
                  <img className='absolute top-0 left-[60%]' src='/Polygon 10.svg' alt='poly'/>
                <img className='absolute left-[30%] top-[10%] ' src='/Group 70.svg' alt='rect'/>
                <div className='flex overflow-hidden h-[50px] lg:h-16 p-0  border-[0] border-[#0083CB] rounded-3xl w-[65%]'>
                <input type="text" className='h-full m-0 pl-9 pr-2 text-base lg:text-xl w-[70%] focus:outline-none' placeholder="Nom d'utilisateur" />
                  <button className="w-fit px-4 h-full m-0 suivant rounded-r-3xl bg-[#0083CBB2] hover:bg-[#194084F2] text-base lg:text-2xl text-white font-bold lg:px-4 focus:outline-none transition ease-in-out delay-150 duration-300" type="button">
                    suivant <FontAwesomeIcon className='text-white bg-white w-10' icon="fa-light fa-arrow-right-to-bracket" />
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nom