import React from 'react'

function CompParametersFr(props) {
  
  return (
    <div className='h-20 w-[400px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                <img className='w-[70px] h-[70px] pl-8 ' src={props.icon}/>
                <div className='w-[65%] font-bold text-xl ml-10'> {props.titre}</div>
                <button className='rounded-[7px] bg-[#FAE0B2] flex justify-center items-center h-6 lg:w-9 lg:h-9 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                    <img className='w-6 lg:w-7 h-4 lg:h-4' src={props.fleche}/> 
                </button>
    </div>
  )
}

export default CompParametersFr