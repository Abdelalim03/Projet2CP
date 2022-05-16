import React from 'react'

function InsPolygoneContent() {
  return (
    <div className='insPolygoneContent h-40 lg:h-52 w-28 pl-4 hidden absolute left-[50px] lg:left-[60px] -bottom-[100%] lg:-bottom-[110%]'>
        <div className='z-10 w-20 lg:w-24 h-40 lg:h-52 px-1 border-2 flex flex-col justify-around border-[#6A5CF7] bg-[#FFDFD9]'>
                <div className='flex flex-row justify-around' >
                    <div className='insButton h-4 lg:h-5 w-7 lg:w-8 flex justify-center items-center'>
                        <img className='h-4 lg:h-5 w-5 lg:w-6' src='/Editeur/Polygones/mothaleth.png'/>
                    </div>
                    <div className='h-4 lg:h-5 w-8 lg:w-10 flex justify-center items-center text-sm lg:text-base font-semibold text-[#283D93] bg-white'>3</div>
                </div>
                <div className='flex flex-row justify-around'>
                    <div className='insButton h-4 lg:h-5 w-7 lg:w-8 flex justify-center items-center'>
                        <img className='h-4 lg:h-5 w-5 lg:w-6' src='/Editeur/Polygones/morabe3.svg'/>
                    </div>
                    <div className='h-4 lg:h-5 w-8 lg:w-10 flex justify-center items-center text-sm lg:text-base font-semibold text-[#283D93] bg-white'>4</div>
                </div>
                <div className='flex flex-row justify-around' >
                    <div className='insButton h-4 lg:h-5 w-7 lg:w-8 flex justify-center items-center'>
                        <img className='h-4 lg:h-5 w-5 lg:w-6' src='/Editeur/Polygones/Rectangle.svg'/>
                    </div>
                    <div className='h-4 lg:h-5 w-8 lg:w-10 flex justify-center items-center text-sm lg:text-base font-semibold text-[#283D93] bg-white'>4</div>
                </div>
                <div className='flex flex-row justify-around'>
                    <div className='insButton h-4 lg:h-5 w-7 lg:w-8 flex justify-center items-center'>
                        <img className='h-4 lg:h-5 w-5 lg:w-6' src='/Editeur/Polygones/khomassi.svg'/>
                    </div>
                    <div className='h-4 lg:h-5 w-8 lg:w-10 flex justify-center items-center text-sm lg:text-base font-semibold text-[#283D93] bg-white'>5</div>
                </div>
                <div className='flex flex-row justify-around'>
                    <div className='insButton h-4 lg:h-5 w-7 lg:w-8 flex justify-center items-center'>
                        <img className='h-4 lg:h-5 w-5 lg:w-6' src='/Editeur/Polygones/sodassi.svg'/>
                    </div>
                    <div className='h-4 lg:h-5 w-8 lg:w-10 text-sm lg:text-base flex justify-center items-center font-semibold text-[#283D93] bg-white'>6</div>
                </div>
                <div className='flex flex-row justify-around'>
                    <div className='insButton h-4 lg:h-5 w-7 lg:w-8 flex justify-center items-center'>
                        <img className='h-4 lg:h-5 w-5 lg:w-6' src='/Editeur/Polygones/Cercle.svg'/>
                    </div>
                    <div className='h-4 lg:h-5 w-8 lg:w-10 text-sm lg:text-base flex justify-center items-center bg-white'>
                        <img className='h-4 w-4' src='/Editeur/EditorIcons/infini.svg' />
                    </div>
                </div>

        </div>
    </div>
  )
}

export default InsPolygoneContent