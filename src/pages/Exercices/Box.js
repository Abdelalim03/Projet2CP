import React from 'react'
import GetLanguage from '../../Components/GetLanguage'


function Box(props) {
    let indents = [];
    for (let i = 0; i < props.stars; i++) {
    indents.push(<img key={i}  className={`coin lg:w-4 lg:h-4 w-[14px] h-[14px] px-[2px]`} src='/Exercices/coin.svg'/>);
    }
  return (
    <div className='relative lg:w-[180px] lg:h-[180px] w-[130px] h-[130px] select-none'>
        <div className='container cursor-pointer hover:z-20 absolute lg:w-[110px] lg:h-[110px] w-[80px] h-[80px] lg:top-[35px] lg:left-[35px] top-[25px] left-[25px] lg:hover:w-[180px] lg:hover:h-[180px] hover:w-[130px] hover:h-[130px] hover:bg-[#FFC5C1] hover:border-[3px] hover:top-0 hover:left-0 border-2 bg-[#FFDFD9] border-[#6A5CF7]'>
            <div className='w-[100%] lg:mt-1 mt-[1px] flex flex-row justify-center'>
            {
                indents
                }
                
            </div>
            <div className='littleKey w-[100%] h-6 lg:h-9 flex flex-row justify-center'>
                <img  className='w-[75%] h-[90%] lg:h-[95%]' src='/Exercices/Clef.svg'/>
            </div>
            <div className=''>
                { (props.language==="français")&& <div className='toShow hidden w-[70%] text-center lg:text-2xl text-[16px] font-bold text-white m-auto'>Obtenez la clé {props.numExo}</div> }
                { (props.language==="arabe")&& <div className='toShow hidden w-[70%] text-center lg:text-2xl text-[16px] font-bold text-white m-auto'>أحصل على المفتاح {props.numExo}</div> }
            </div>
            <div className='bigKey hidden w-[100%] lg:h-16 h-11 lg:mt-[10px] mt-[6px]'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/Clef.svg'/>
            </div>
            <div className='toHide h-[46%] lg:pl-[45px] lg:pt-[10px] pl-[32px] pt-[9px] flex'>
                <img  className='port absolute lg:left-[22px] lg:top-[45px] left-[18px] top-[35px] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]' src='/Exercices/port.svg'/>
                <div  className='boxText lg:text-xl text-[15px] font-bold text-white'>{props.numExo}</div>
            </div>

        </div>
    </div>
  )
}

export default Box