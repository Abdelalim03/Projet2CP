import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../Components/SideBar'

function Cours() {
    
  return (
    <div className='relative   bg-[#98BCFF] min-h-screen flex flex-row-reverse selection:bg-fuchsia-300 overflow-y-auto '>
        <SideBar />
        <div className='bg-white rounded-l-2xl lg:rounded-l-3xl  flex flex-col py-7 lg:py-14 items-center w-[92%] '>
            <div className='w-[80%] h-32 mb-0 lg:mb-5'>
                <div className='flex'>
                    <div className='select-none h-16 lg:h-20 w-16 lg:w-20  p-2 rounded-[50%] border-2 border-[#C7DBFE] bg-white'>
                        <div className='h-[100%] w-[100%] rounded-[50%] overflow-hidden bg-[#C7DBFE]'>
                            <img className='h-[80%] w-[100%] mt-[20%] ' src='/avatar/Group-1.svg' alt='avatrar'/>
                        </div>
                    </div>
                    <p className='h-16 lg:h-20 w-28 lg:w-36 ml-3 py-4 lg:py-6 font-semibold text-lg lg:text-2xl'>Salut flen !</p>
                </div>
                <p className='ml-2 lg:ml-3 font-semibold text-sm lg:text-base'>Apprenons quelque chose de nouveau aujourd'hui !</p>
            </div>
            <div className='w-[80%]  grid grid-cols-3 gap-4 '>
            
                <div className='bg-[#FFC5C1] py-4 lg:py-5 rounded-3xl flex flex-row col-span-2'>
                    <div className='w-[15%] flex flex-row justify-center items-center'>
                        <img className='w-9 lg:w-12 h-9 lg:h-12' src='/Cours/imgCours/CoursPic.svg' alt='img1' /> 
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <h1 className='font-semibold text-base lg:text-2xl'>Chapitre 01</h1>
                            <h2 className='font-normal text-xs lg:text-xl'>la symmetrie d’un point par rapport a un point</h2>
                        </div>
                    </div>
                    <div className='w-[15%]  flex flex-row justify-center items-center'>
                        <button className='bg-[#FAE0B2] flex justify-center items-center w-6 lg:w-9 h-6 lg:h-9'>
                            <img className='w-4 lg:w-7 h-4 lg:h-7' src='/Cours/Icons/chevron-right-svgrepo-com (1) 1.svg' alt='icon'/> 
                        </button>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center rounded-3xl bg-[#98BCFF]'>
                    <div>
                        <h1 className='font-semibold text-base lg:text-2xl mb-3 lg:mb-6'> Quiz 01</h1>
                        <Link to="/quiz">
                            <button className='font-normal text-xs lg:text-xl text-center border-2 border-[#283D93] p-1 rounded-lg'>xx Exp</button>
                        </Link>
                    </div>
                </div>
                <div className='bg-[#C29E9C] py-4 lg:py-5 rounded-3xl flex flex-row col-span-2'>
                    <div className='w-[15%] flex justify-center items-center'>
                        <img className='w-9 lg:w-12 h-9 lg:h-12' src='/Cours/imgCours/CoursPic.svg' alt='img1' /> 
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <h1 className='font-semibold text-base lg:text-2xl'>Chapitre 02</h1>
                            <h2 className='font-normal text-xs lg:text-xl'>Titre 02</h2>
                        </div>
                    </div>
                    <div className='w-[15%]  flex justify-center items-center'>
                        <img className='w-7 lg:w-10 h-8 lg:h-11' src='/Cours/Icons/lock-svgrepo-com 2.svg' alt='img'/> 
                    </div>
                </div>
                <div className='flex justify-center items-center rounded-3xl bg-[#64738F]'>
                    <div>
                        <h1 className='font-semibold text-base lg:text-2xl mb-3 lg:mb-6'>Quiz 02</h1>
                        <button className='font-normal text-xs lg:text-xl text-center border-2 border-[#283D93] p-1 rounded-lg'>xx Exp</button>
                    </div>
                </div>
                <div className='bg-[#C29E9C] py-4 lg:py-5 rounded-3xl flex flex-row col-span-2'>
                    <div className='w-[15%] flex justify-center items-center'>
                        <img className='w-9 lg:w-12 h-9 lg:h-12' src='/Cours/imgCours/CoursPic.svg' alt='img1' /> 
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <h1 className='font-semibold text-base lg:text-2xl'>Chapitre 03</h1>
                            <h2 className='font-normal text-xs lg:text-xl'>Titre 03</h2>
                        </div>
                    </div>
                    <div className='w-[15%]  flex justify-center items-center'>
                        <img className='w-7 lg:w-10 h-8 lg:h-11' src='/Cours/Icons/lock-svgrepo-com 2.svg' alt='img'/> 
                    </div>
                </div>
                <div className='flex justify-center items-center rounded-3xl bg-[#64738F]'>
                    <div>
                        <h1 className='font-semibold text-base lg:text-2xl mb-3 lg:mb-6'>Quiz 03</h1>
                        <button className='font-normal text-xs lg:text-xl text-center border-2 border-[#283D93] p-1 rounded-lg'>xx Exp</button>
                    </div>
                </div>
                <div className='bg-[#C29E9C] py-4 lg:py-5 rounded-3xl flex flex-row col-span-2'>
                    <div className='w-[15%] flex justify-center items-center'>
                        <img className='w-9 lg:w-12 h-9 lg:h-12' src='/Cours/imgCours/CoursPic.svg' alt='img1' /> 
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <h1 className='font-semibold text-base lg:text-2xl'>Chapitre 04</h1>
                            <h2 className='font-normal text-xs lg:text-xl'>Titre 04</h2>
                        </div>
                    </div>
                    <div className='w-[15%]  flex justify-center items-center'>
                        <img className='w-7 lg:w-10 h-8 lg:h-11' src='/Cours/Icons/lock-svgrepo-com 2.svg' alt='img'/> 
                    </div>
                </div>
                <div className='flex justify-center items-center rounded-3xl bg-[#64738F]'>
                    <div>
                        <h1 className='font-semibold text-base lg:text-2xl mb-3 lg:mb-6'>Quiz 04</h1>
                        <button className='font-normal text-xs lg:text-xl text-center border-2 border-[#283D93] p-1 rounded-lg'>xx Exp</button>
                    </div>
                </div>
                
                
                
               
                
            </div>
        </div>
    </div>
  )
}

export default Cours