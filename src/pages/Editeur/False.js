import React from 'react'
import { Link } from 'react-router-dom'

function False(props) {
  return (
    <div className='h-[30%]  w-2/5 bg-white flex flex-col justify-center gap-5 lg:gap-10'>
        <p className='mx-auto h-fit w-[70%] text-sm text-center lg:text-xl font-medium'>{props.msg}</p>
        <div className='h-10 lg:h-14 w-[100%] flex flex-row-reverse justify-center gap-3 '>
        <button onClick={()=>props.showFalseFr()} className='h-[100%] w-fit px-4 py-2 text-white bg-red-500 hover:bg-red-700  rounded-lg hover:scale-105   text-sm lg:text-base font-semibold '>{props.ress}</button>
            <Link to="../exercices">
                <button className='h-[100%] w-fit px-4 py-2 text-white rounded-lg hover:scale-105  text-sm lg:text-base font-semibold bg-blue-500 hover:bg-blue-700'>{props.ret}</button>
            </Link>

        </div>
    </div>
    
  )
}

export default False