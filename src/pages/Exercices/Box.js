import React from 'react'

function Box(props) {
  return (
    <div className='relative w-[180px] h-[180px] select-none'>
        <div className='container absolute w-[110px] h-[110px] top-[35px] left-[35px] hover:w-[180px] hover:h-[180px] hover:bg-[#FFC5C1] hover:border-4 hover:top-0 hover:left-0 border-2 bg-[#FFDFD9] border-[#6A5CF7]'>
            <div className='w-[100%] mt-1 flex flex-row justify-center'>
                <img  className={`coin w-4 h-4 ${props.display1} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display2} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display3} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display4} px-[2px]`} src='/Exercices/coin.svg'/>
                <img  className={`coin w-4 h-4 ${props.display5} px-[2px]`} src='/Exercices/coin.svg'/>
            </div>
            <div className='littleKey w-[100%] h-9 flex flex-row justify-center'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/Clef.svg'/>
            </div>
            <div className='toShow hidden w-[70%] text-center text-2xl font-bold text-white m-auto'>
                Obtenez la clé {props.numExo}
            </div>
            <div className='bigKey hidden w-[100%] h-16'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/Clef.svg'/>
            </div>
            <div className='toHide h-[46%] pl-[45px] pt-[10px] flex'>
                <img  className='port absolute left-[22px] top-[45px] w-[60px] h-[60px]' src='/Exercices/port.svg'/>
                <div  className='boxText text-xl font-bold text-white'>{props.numExo}</div>
            </div>

        </div>
    </div>
  )
}

export default Box