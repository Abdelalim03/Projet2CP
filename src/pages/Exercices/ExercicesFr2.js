import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../Components/SideBar'
import Box from './Box'
import BoxBloquee from './BoxBloquee'

function ExercicesFr2() {
  return (
    <div className='symapp-container'>
      <div className=' relative bg-white rounded-l-2xl lg:rounded-l-3xl w-[92%] '>
          <div className='absolute top-[44px] lg:left-8 left-4  lg:w-[1000px] w-[710px]'>
          <Link to="../exercices">
                <button className='Fleche'>
                   <img className='absolute left-0 lg:top-[495px] top-[355px] lg:h-[85px] lg:w-[150px] h-[45px] w-[110px]' src='/Exercices/FlecheG.svg' alt='FlecheB'/>
                   <img className='FlechePleine absolute left-0 lg:top-[495px] top-[355px] lg:h-[85px] lg:w-[150px] h-[45px] w-[110px]' src='/Exercices/FlecheGpleine.svg' alt='FlecheB'/>
                </button>
                </Link>
                <div className='LastGift absolute lg:left-[806px] left-[560px] top-[0px] lg:w-[130px] lg:h-[190px] w-[90px] h-[150px]'>
                    <img className='absolute top-0 left-0 lg:w-[120px] lg:h-[180px] w-[80px] h-[130px]' src='/Exercices/BigGiftGif.gif' alt='FlecheB'/>
                    <div className='back absolute top-0 left-0 lg:w-[120px] lg:h-[180px] w-[80px] h-[130px] select-none '></div>   
                    <img  className='locked absolute lg:top-[110px] lg:left-10 top-[80px] left-[26px] lg:w-[40px] lg:h-[50px] w-[30px] h-[40px] ' src='/Exercices/YLock.svg'/>

                </div>
                <div className='absolute lg:left-[160px] lg:top-[434px] left-[100px] top-[314px]'> <BoxBloquee numExoPrecedent="23" numExoBloque="24" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[268px] lg:top-[434px] left-[178px] top-[314px]'> <BoxBloquee numExoPrecedent="24" numExoBloque="25" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[376px] lg:top-[434px] left-[256px] top-[314px]'> <BoxBloquee numExoPrecedent="25" numExoBloque="26" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[482px] lg:top-[434px] left-[334px] top-[314px]'> <BoxBloquee numExoPrecedent="26" numExoBloque="27" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[590px] lg:top-[434px] left-[412px] top-[314px]'> <BoxBloquee numExoPrecedent="27" numExoBloque="28" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[698px] lg:top-[434px] left-[490px] top-[314px]'> <BoxBloquee numExoPrecedent="28" numExoBloque="29" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[806px] lg:top-[434px] left-[568px] top-[314px]'> <BoxBloquee numExoPrecedent="29" numExoBloque="30" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[806px] lg:top-[326px] left-[568px] top-[236px]'> <BoxBloquee numExoPrecedent="30" numExoBloque="31" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[806px] lg:top-[218px] left-[568px] top-[158px]'> <BoxBloquee numExoPrecedent="31" numExoBloque="32" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[698px] lg:top-[218px] left-[490px] top-[158px]'> <BoxBloquee numExoPrecedent="32" numExoBloque="33" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[590px] lg:top-[218px] left-[412px] top-[158px]'> <BoxBloquee numExoPrecedent="33" numExoBloque="34" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[482px] lg:top-[218px] left-[334px] top-[158px]'> <BoxBloquee numExoPrecedent="34" numExoBloque="35" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[376px] lg:top-[218px] left-[256px] top-[158px]'> <BoxBloquee numExoPrecedent="35" numExoBloque="36" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[268px] lg:top-[218px] left-[178px] top-[158px]'> <BoxBloquee numExoPrecedent="36" numExoBloque="37" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[160px] lg:top-[218px] left-[100px] top-[158px]'> <BoxBloquee numExoPrecedent="37" numExoBloque="38" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[52px] lg:top-[218px] left-[22px] top-[158px]'> <BoxBloquee numExoPrecedent="38" numExoBloque="39" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[52px] lg:top-[110px] left-[22px] top-[80px]'> <BoxBloquee numExoPrecedent="39" numExoBloque="40" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[52px] lg:top-[1px] left-[22px] top-[2px]'> <BoxBloquee numExoPrecedent="40" numExoBloque="41" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[160px] lg:top-[1px] left-[100px] top-[2px]'> <BoxBloquee numExoPrecedent="41" numExoBloque="42" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[268px] lg:top-[1px] left-[178px] top-[2px]'> <BoxBloquee numExoPrecedent="42" numExoBloque="43" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[376px] lg:top-[1px] left-[256px] top-[2px]'> <BoxBloquee numExoPrecedent="43" numExoBloque="44" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[482px] lg:top-[1px] left-[334px] top-[2px]'> <BoxBloquee numExoPrecedent="44" numExoBloque="45" display1="hidden" display2="hidden"  /> </div>
                <div className='absolute lg:left-[590px] lg:top-[1px] left-[412px] top-[2px]'> <BoxBloquee numExoPrecedent="45" numExoBloque="46" display1="hidden" display2="hidden"  /> </div>
          </div>

      </div>
      
    </div>
  )
}

export default ExercicesFr2