import React from 'react'
import SideBar from '../../Components/SideBar'

function Editeur() {
  return (
    <div className='relative bg-[#98BCFF] min-h-screen flex flex-row-reverse selection:bg-fuchsia-300'>
        <SideBar />
        
        <div className='bg-white rounded-l-2xl lg:rounded-l-3xl  flex flex-col py-4 lg:py-8 w-[92%]' >
            <div className='ml-16 w-[80%] h-32 mb-0 lg:mb-5'>
                <div className='flex'>
                    <div className='select-none h-16 lg:h-20 w-16 lg:w-20  p-2 rounded-[50%] border-2 border-[#C7DBFE] bg-white'>
                        <div className='h-[100%] w-[100%] rounded-[50%] overflow-hidden bg-[#C7DBFE]'>
                            <img className='h-[80%] w-[100%] mt-[20%] ' src='/avatar/Group-1.svg' alt='avatrar'/>
                        </div>
                    </div>
                    <p className='h-16 lg:h-20 w-28 lg:w-36 ml-3 py-4 lg:py-6 font-semibold text-lg lg:text-2xl'>Salut Wail !</p>
                </div>
                <p className='ml-2 lg:ml-16 font-semibold text-sm lg:text-base text-[#283D93]'>C'est à vous pour appliquer vos idées</p>
            </div>
            <div className=' ml-48 mt-3 h-16 w-3/4'>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-10 h-10' src='/Editeur/EditorIcons/Group 10.svg' alt='icon' />
                </button>
            </div>
            <div className='h-3/4 mt-5 w-16 px-2 ml-16 flex flex-col justify-around'>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-8 h-8' src='/Editeur/EditorIcons/Vector.png' alt='icon' />
                </button>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-10 h-10' src='/Editeur/EditorIcons/Group 8.svg' alt='icon' />
                </button>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-10 h-10' src='/Editeur/EditorIcons/polygones.svg' alt='icon' />
                </button>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-10 h-10' src='/Editeur/EditorIcons/Group 14.svg' alt='icon' />
                </button>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-10 h-10' src='/Editeur/EditorIcons/Group 12.svg' alt='icon' /> 
                </button>
                <button className='h-12 w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                    <img className='w-10 h-10' src='/Editeur/EditorIcons/Arrow-33.svg' alt='icon' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Editeur