import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../Components/SideBar'
import Box from './Box'
import BoxBloquee from './BoxBloquee'

function Exercices() {
  return (
    <div className='symapp-container'>
      <div className=' relative bg-white rounded-l-2xl lg:rounded-l-3xl w-[92%] flex justify-center items-center flex-col '>
          <div className=' relative left-4 lg:left-7  flex flex-row'>
            <img className='mt-5  lg:w-[120px] lg:h-[145px] w-[90px] h-[110px]' src='/Exercices/FlecheGif.gif' alt='FlecheB'/>
            <p className='mt-6 mr-6 lg:pl-24 pl-8 lg:pr-8 font-semibold text-[#194084] lg:text-[18px] text-[14px] '>Obtenez les clés en résolvant les exercices pour obtenir le cadeau !  </p>
            <img className=' lg:h-[80px] h-[60px]' src='/Exercices/GiftGif.gif' alt='Gift'/>
          </div>
          

          <div className='relative -top-20 left-5 lg:left-0   lg:w-[940px] w-[710px]'>
            <div className='relative'> 
                <div className='absolute lg:top-[110px] top-[80px]'> <Box numExo="01" display1="hidden" display2="hidden" display3="hidden" display4="hidden"/> </div>
                <div className='absolute lg:top-[218px] top-[158px]'> <BoxBloquee numExoPrecedent="01" numExoBloque="02" display1="hidden" display2="hidden" display3="hidden" display4="hidden"/> </div>
                <div className='absolute lg:top-[326px] top-[236px]'> <BoxBloquee numExoPrecedent="02" numExoBloque="03" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:top-[434px] top-[314px]'> <BoxBloquee numExoPrecedent="03" numExoBloque="04" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:left-[108px] lg:top-[434px] left-[78px] top-[314px]'> <BoxBloquee numExoPrecedent="04" numExoBloque="05" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:left-[216px] lg:top-[434px] left-[156px] top-[314px]'> <BoxBloquee numExoPrecedent="05" numExoBloque="06" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:left-[216px] lg:top-[326px] left-[156px] top-[236px]'> <BoxBloquee numExoPrecedent="06" numExoBloque="07" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:left-[216px] lg:top-[218px] left-[156px] top-[158px]'> <BoxBloquee numExoPrecedent="07" numExoBloque="08" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:left-[216px] lg:top-[110px] left-[156px] top-[80px]'> <BoxBloquee numExoPrecedent="08" numExoBloque="09" display1="hidden" display2="hidden" display3="hidden" display4="hidden" /> </div>
                <div className='absolute lg:left-[216px] lg:top-1 left-[156px] top-[2px]'> <BoxBloquee numExoPrecedent="09" numExoBloque="10" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[324px] lg:top-1 left-[234px] top-[2px]'> <BoxBloquee numExoPrecedent="10" numExoBloque="11" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[432px] lg:top-1 left-[312px] top-[2px]'> <BoxBloquee numExoPrecedent="11" numExoBloque="12" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[540px] lg:top-1 left-[390px] top-[2px]'> <BoxBloquee numExoPrecedent="12" numExoBloque="13" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[648px] lg:top-1 left-[468px] top-[2px]'> <BoxBloquee numExoPrecedent="13" numExoBloque="14" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[756px] lg:top-1 left-[546px] top-[2px]'> <BoxBloquee numExoPrecedent="14" numExoBloque="15" display1="hidden" display2="hidden" display3="hidden" /> </div>
                <div className='absolute lg:left-[756px] lg:top-[110px] left-[546px] top-[80px]'> <BoxBloquee numExoPrecedent="15" numExoBloque="16" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[756px] lg:top-[218px] left-[546px] top-[158px]'> <BoxBloquee numExoPrecedent="16" numExoBloque="17" display1="hidden" display2="hidden" display3="hidden"  /> </div>
                <div className='absolute lg:left-[648px] lg:top-[218px] left-[468px] top-[158px]'> <BoxBloquee numExoPrecedent="17" numExoBloque="18" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[540px] lg:top-[218px] left-[390px] top-[158px]'> <BoxBloquee numExoPrecedent="18" numExoBloque="19" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[432px] lg:top-[218px] left-[312px] top-[158px]'> <BoxBloquee numExoPrecedent="19" numExoBloque="20" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[432px] lg:top-[326px] left-[312px] top-[236px]'> <BoxBloquee numExoPrecedent="20" numExoBloque="21" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[432px] lg:top-[434px] left-[312px] top-[314px]'> <BoxBloquee numExoPrecedent="21" numExoBloque="22" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[540px] lg:top-[434px] left-[390px] top-[314px]'> <BoxBloquee numExoPrecedent="22" numExoBloque="23" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[648px] lg:top-[434px] left-[468px] top-[314px]'> <BoxBloquee numExoPrecedent="23" numExoBloque="24" display1="hidden" display2="hidden"  /> </div>
                <Link to="../exercices2">
                <button className='Fleche'>
                   <img className='absolute lg:h-[85px] lg:w-[150px] h-[45px] w-[110px] lg:left-[850px] lg:top-[485px] left-[590px] top-[360px]' src='/Exercices/FlecheD.svg' alt='FlecheB'/>
                   <img className='FlechePleine absolute lg:h-[85px] lg:w-[150px] h-[45px] w-[110px] lg:left-[850px] lg:top-[485px] left-[590px] top-[360px]' src='/Exercices/FlecheDpleine.svg' alt='FlecheB'/>
                </button>
                </Link>
            </div>
          </div>

          

      </div>
      
    </div>
  )
}

export default Exercices