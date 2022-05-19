import React from 'react'

function False(props) {
  return (
    <div className='h-[30%] lg:h-[40%] w-2/5 bg-white flex flex-col justify-center gap-7 lg:gap-16'>
        <p className='h-fit w-fit text-xs text-center lg:text-xl font-medium'>{props.msg}</p>
        <div className='h-10 lg:h-14 w-[100%] flex flex-row justify-center gap-3 bg-orange-300'>
            <button className='h-[100%] w-[72px] lg:w-24 text-xs lg:text-base font-semibold bg-blue-500'>{props.ress}</button>
            <button className='h-[100%] w-[72px] lg:w-24 text-xs lg:text-base font-semibold bg-blue-500'>{props.ret}</button>

        </div>
    </div>
    
  )
}

export default False