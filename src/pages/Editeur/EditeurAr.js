import React from 'react'
import InsPolygoneContentAr from './InsPolygoneContentAr'
import RotateContentAr from './RotateContentAr'

function EditeurAr() {
  return (
    <div dir="rtl" className='symapp-container-Ar'>
        <div className='mr-40 lg:mr-44 mt-4 h-24 w-3/4'>
                <div className="text-base font-['Tajawal'] lg:text-xl font-semibold text-[#283D93]" >
                    هنا يمكنك تطبيق ما تعلمت
                </div>
                <div className='palButton flex flex-row mt-5 h-fit w-fit'>
                    <button className='h-11 lg:h-12 w-11 lg:w-12 flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='w-8 lg:w-10 h-8 lg:h-10' src='/Editeur/EditorIcons/Group 10.svg' alt='icon' />
                    </button>
                    <div className='palCol h-11 animate-[avatar_500ms_ease-in-out_1] lg:h-12 w-[500px] lg:w-[900px] hidden flex-row gap-3'>
                        <div className='mr-8 cursor-pointer h-[60%] w-[26.4px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                        <div className=' h-[60%] cursor-pointer w-[26px] lg:w-[28px] my-auto bg-slate-400'></div>
                    </div>
                </div>
            </div>
            <div className='h-full flex justify-start gap-10'>
            <div className='h-3/4 mt-1 w-20 px-2 mr-10 flex flex-col justify-around'>
                <div className='h-14 lg:h-16 w-14 lg:w-16 flex justify-center items-center'>
                    <button className='bouton h-[80%] w-[80%] hover:h-[100%] hover:w-[100%] hover:bg-[#FFC5C1] flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='boutonImg w-6 lg:w-8 h-6 lg:h-8' src='/Editeur/EditorIcons/Vector.png' alt='icon' />
                    </button>
                </div>
                <div className='h-14 lg:h-16 w-14 lg:w-16 flex justify-center items-center'>
                    <button className='bouton h-[80%] w-[80%] hover:h-[100%] hover:w-[100%] hover:bg-[#FFC5C1] flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='boutonImg w-8 lg:w-10 h-8 lg:h-10' src='/Editeur/EditorIcons/Group 8.svg' alt='icon' />
                    </button>
                </div>
                <div className='insPolygone relative h-14 lg:h-16 w-14 lg:w-16 flex justify-center items-center'>
                    <button className='h-[80%] w-[80%] flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='w-8 lg:w-10 h-8 lg:h-10' src='/Editeur/EditorIcons/polygones.svg' alt='icon' />
                    </button>
                    <InsPolygoneContentAr />
                </div>
                <div className='h-14 lg:h-16 w-14 lg:w-16 flex justify-center items-center'>
                    <button className='bouton h-[80%] w-[80%] hover:h-[100%] hover:w-[100%] hover:bg-[#FFC5C1] flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='boutonImg w-8 lg:w-10 h-8 lg:h-10' src='/Editeur/EditorIcons/Group 14.svg' alt='icon' />
                    </button>
                </div>
                <div className='h-14 lg:h-16 w-14 lg:w-16 flex justify-center items-center'>
                    <button className='bouton h-[80%] w-[80%] hover:h-[100%] hover:w-[100%] hover:bg-[#FFC5C1] flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='boutonImg w-8 lg:w-10 h-8 lg:h-10' src='/Editeur/EditorIcons/Group 12.svg' alt='icon' /> 
                    </button>
                </div>
                <div className='rotate relative h-14 lg:h-16 w-14 lg:w-16 flex justify-center items-center'>
                    <button className='h-[80%] w-[80%] flex justify-center items-center border-2 border-[#6A5CF7] bg-[#FFDFD9]'>
                        <img className='w-8 lg:w-10 h-8 lg:h-10' src='/Editeur/EditorIcons/Arrow-33.svg' alt='icon' />
                    </button>
                    <RotateContentAr />
                </div>
            </div>
            <canvas  className= 'w-[80%] h-[90%] bg-red-500'></canvas>
            </div>
            
    </div>
  )
} 

export default EditeurAr