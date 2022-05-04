import React from 'react'

function BoxBloquee(props) {
  return (
    <div className='relative top-24 left-24 w-[180px] h-[180px] select-none'>
        <div className='container bg-[#B39D98] absolute w-[110px] h-[110px] top-[35px] left-[35px] hover:w-[180px] hover:h-[180px] hover:border-4 hover:top-0 hover:left-0 hover:px-2 border-2 border-[#6A5CF7]'>
            <div className='w-fit m-auto bg-[#FFDFD9] mt-1 flex flex-row px-1 justify-center rounded-[14px]'>
                <img  className={`coin w-4 h-4 ${props.display1} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display2} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display3} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display4} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display5} px-[2px]`} src='/Exercices/coin.svg'/>
            </div>
            <div className='lock1 w-[100%] h-14 mt-4 flex flex-row justify-center'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/BLock.svg'/>
            </div>
            <div className='toShow2 mt-3 hidden w-fit text-center text-[21px] font-bold text-white m-auto'>
                Vous devez avoir la clé {props.numExo}
            </div>
            <div className='lock2 hidden w-[100%] h-14 mt-2'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/BLock.svg'/>
            </div>

        </div>
    </div>
  )
}

export default BoxBloquee