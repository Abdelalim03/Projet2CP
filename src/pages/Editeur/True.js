import React from 'react'
import { Link } from 'react-router-dom'

function True(props) {
  return (
    <div className='h-[30%] lg:h-[32%] w-2/5 bg-white flex flex-col justify-between gap-0'>
        <div className='mx-auto   w-[70%]  flex justify-center'>
            <img className={` h-[80px] `} src={`./Gif/${props.stars}.gif`} alt='dmd' />
        </div>
        <div className={`h-10 lg:h-14 -mt-4 w-[100%] flex ${props.flex} justify-between `}>
            <div className='h-[100%] w-10 lg:w-14 '>
            <img src="./Editeur/EditorIcons/partyd.gif" alt="celb" />
            </div>
            <p className='h-fit w-fit text-sm lg:text-xl text-center font-medium my-auto'>{props.msg}</p>
            <div className='h-[100%] w-10 lg:w-14 '>
              <img src="./Editeur/EditorIcons/partyg.gif" alt="celb" />
            </div>
        </div>
        <div className='h-10 lg:h-14 w-[100%] mb-2 lg:mb-4 flex flex-row-reverse justify-center gap-3 '>
            
            <Link to="../exercices" >
            <button className='h-[100%] w-fit px-4 lg:py-2 text-white bg-green-500 hover:bg-green-700  rounded-lg hover:scale-105   text-xs lg:text-base font-semibold '>{props.cont}</button>
            </Link>
            {/* <button className='h-[100%] w-fit px-4 lg:py-2 text-white rounded-lg hover:scale-105  text-xs lg:text-base font-semibold bg-blue-500 hover:bg-blue-700'>{props.ret}</button> */}


        </div>

    </div>
  )
}

export default True