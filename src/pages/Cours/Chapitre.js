import React from 'react'

function Chapitre(props) {
  return (
    <div className='w-[840px] h-100px flex flex-row justify-between mb-8'>
        <div className='bg-[#FFC5C1] w-[660px] py-4 lg:py-5 rounded-3xl flex flex-row'>
            <div className='w-[15%] flex flex-row justify-center items-center'>
                <img className='w-9 lg:w-16 h-9 lg:h-16' src={props.image} alt='img1' /> 
            </div>
            <div className='w-[70%]'>
                <div>
                    <h1 className='font-semibold text-base lg:text-2xl'>{props.nomChapitre}</h1>
                    <h2 className='font-normal text-xs lg:text-xl'>{props.titreChapitre}</h2>
                </div>
            </div>
            <div className='w-[15%]  flex flex-row justify-center items-center'>
                <button className='bg-[#FAE0B2] flex justify-center items-center w-6 lg:w-9 h-6 lg:h-9'>
                    <img className='w-4 lg:w-7 h-4 lg:h-7' src='/Cours/Icons/chevron-right-svgrepo-com (1) 1.svg' alt='icon'/> 
                </button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center pb-2 pt-5 w-[140px] rounded-3xl bg-[#98BCFF]'>
                <h1 className='font-semibold text-base lg:text-xl mb-3 lg:mb-6'>{props.nomQuiz}</h1>
                <button className='w-20 font-normal text-xs lg:text-base text-center border-2 border-[#283D93] p-1 rounded-lg'>{props.numExp} Exp</button>
        </div>
    </div>
  )
}

export default Chapitre