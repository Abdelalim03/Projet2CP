import React from 'react'

function RotateContentAr() {
  return (
    <div className='rotateContent hidden absolute pr-4 right-[50px] lg:right-[60px] bottom-[6px] h-[112px] lg:h-[128px] w-[73px] lg:w-20'>
        <div className='h-[100%] w-14 lg:w-16 border-2 z-10 border-[#6A5CF7] bg-[#FFDFD9]'>
            <div className='rotateB1 h-14 lg:h-16 w-[52px] lg:w-[60px] hover:bg-[#FFC5C1] flex justify-center items-center border-b-2 border-[#6A5CF7]'>
                <img className='rotateImg1 h-[60%] lg:h-[70%] w-[60%] lg:w-[70%]' src='/Editeur/EditorIcons/Arrow-gauche.png'/>
            </div>

            <div className='rotateB2 h-[52px] lg:h-[60px] w-[52px] lg:w-[60px] hover:bg-[#FFC5C1] flex justify-center items-center'>
                <img className='rotateImg2 h-[60%] lg:h-[70%] w-[60%] lg:w-[70%]' src='/Editeur/EditorIcons/Arrow-droite.png'/>
            </div>
        </div>
    </div>
  )
}

export default RotateContentAr