import React from 'react'

function True(props) {
  return (
    <div className='h-[30%] lg:h-[40%] w-2/5 bg-white flex flex-col justify-center gap-5 lg:gap-10'>
        <div className='mx-auto h-5 lg:h-7 w-32 lg:w-48 bg-slate-400 flex flex-row justify-center gap-2 lg:gap-3'>
            <img className={`h-[100%] w-4 lg:w-5 ${props.hide1}`} src='/Exercices/coin.svg' alt='dmd' />
            <img className={`h-[100%] w-4 lg:w-5 ${props.hide2}`} src='/Exercices/coin.svg' alt='dmd' />
            <img className={`h-[100%] w-4 lg:w-5 ${props.hide3}`} src='/Exercices/coin.svg' alt='dmd' />
            <img className={`h-[100%] w-4 lg:w-5 ${props.hide4}`} src='/Exercices/coin.svg' alt='dmd' />
            <img className={`h-[100%] w-4 lg:w-5 ${props.hide5}`} src='/Exercices/coin.svg' alt='dmd' />
        </div>
        <div className={`h-10 lg:h-14 w-[100%] flex ${props.flex} justify-around bg-blue-300`}>
            <div className='h-[100%] w-10 lg:w-14 bg-slate-400'>

            </div>
            <p className='h-fit w-fit text-sm lg:text-xl font-medium my-auto'>{props.msg}</p>
            <div className='h-[100%] w-10 lg:w-14 bg-slate-400'>

            </div>
        </div>
        <div className='h-10 lg:h-14 w-[100%] flex flex-row justify-center gap-3 bg-orange-300'>
            <button className='h-[100%] w-[72px] lg:w-24 text-xs lg:text-base font-semibold bg-blue-500'>{props.cont}</button>
            <button className='h-[100%] w-[72px] lg:w-24 text-xs lg:text-base font-semibold bg-blue-500'>{props.ret}</button>

        </div>

    </div>
  )
}

export default True