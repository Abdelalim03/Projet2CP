import React from 'react'

function CompParametersFr(props) {
  
  return (
    <div className='h-20 w-[400px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                <img className='w-[70px] h-[70px] pl-8 ' src={props.icon}/>
                <div className='w-[65%] font-bold text-xl ml-10'> {props.titre}</div>
    </div>
  )
}

export default CompParametersFr