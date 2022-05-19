import React from 'react'
import GetLanguage from "../../Components/GetLanguage";




function BoxBloquee(props) {
    let indents = [];
    for (let i = 0; i < props.stars; i++) {
    indents.push(<img key={i}  className={`coin lg:w-4 lg:h-4 w-[14px] h-[14px] px-[2px]`} src='/Exercices/coin.svg'/>);
    }

  return (
    <div className='relative lg:w-[180px] lg:h-[180px] w-[130px] h-[130px] select-none'>
        <div className='container hover:z-10 bg-[#B39D98] absolute lg:w-[110px] lg:h-[110px] w-[80px] h-[80px] lg:top-[35px] lg:left-[35px] top-[25px] left-[25px] lg:hover:w-[180px] lg:hover:h-[180px] hover:w-[130px] hover:h-[130px] hover:border-[3px] hover:top-0 hover:left-0 hover:px-2 border-2 border-[#6A5CF7]'>
            <div className='w-fit h-fit m-auto bg-[#FFDFD9] lg:mt-1 mt-[1px] lg:px-1 px-[3px] flex flex-row justify-center rounded-[14px]'>
                {indents}
            </div>
            <div className='lock1 w-[100%] lg:h-[52px] lg:mt-[6px] mt-[4px] h-[36px] flex flex-row justify-center'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/BLock.svg'/>
            </div>
            <div className='boxText toHide w-fit lg:h-[4px] h-[3px] m-auto lg:text-[18px] text-[14px] px-1 font-bold text-white flex flex-row justify-center'>
                 {props.numExoBloque}
            </div>
            <div className=''> 
                { (props.language==="français")&& <div className='toShow2 lg:mt-3 mt-2 hidden w-fit text-center lg:text-[21px] text-[14px] font-bold text-white m-auto lg:rounded-[20px] rounded-[15px]'>Vous devez avoir la clé {props.numExoPrecedent}</div> }
                { (props.language==="arabe")&& <div className="toShow2 lg:mt-3 mt-2 hidden w-fit text-center lg:text-[21px] text-[14px] font-bold text-white m-auto lg:rounded-[20px] rounded-[15px] font-[Tajawal]">يجب الحصول على المفتاح  {props.numExoPrecedent}</div> }
            </div>
            <div className='lock2 hidden w-[100%] lg:h-14 h-[42px] lg:mt-2 mt-[8px]'>
                <img  className='w-[75%] h-[95%]' src='/Exercices/BLock.svg'/>
            </div>

        </div>
    </div>
  )
}

export default BoxBloquee