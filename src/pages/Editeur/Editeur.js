import React from 'react'
import SideBar from '../../Components/SideBar'
import UserTitle from '../../Components/UserTitle'
function Editeur() {
  return (
    <div className='symapp-container'>
        
        <UserTitle userName = 'Amine' userImage='PersonPic'/>
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
    
  )
}

export default Editeur