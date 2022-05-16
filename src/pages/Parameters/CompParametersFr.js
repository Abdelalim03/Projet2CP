import React from 'react'

function CompParametersFr(props) {
  
  return (
    <div className='h-14 lg:h-20 w-[350px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                <img className='w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] pl-5 lg:pl-8 ' src={props.icon}/>
                <div className='w-[65%] font-bold text-lg lg:text-xl ml-6 lg:ml-10'> {props.titre}</div>
                <button className='rounded-[7px] bg-[#FAE0B2] flex justify-center items-center h-7 lg:h-9 w-7 lg:w-9 hover:w-8 hover:h-8 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                    <img className='w-4 lg:w-7 h-4 lg:h-4' src={props.fleche}/> 
                </button>
    </div>
  )
}

export default CompParametersFr