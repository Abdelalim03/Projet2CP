import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../Components/SideBar'
import Box from './Box'
import BoxBloquee from './BoxBloquee'

function ExercicesFr({Max}) {
  let tableOfex=[{class:"lg:top-[110px] top-[80px]",stars:1,id:1},
  {class:"lg:top-[218px] top-[158px]",stars:1,id:2},
  {class:"lg:top-[326px] top-[236px]",stars:1,id:3},
  {class:"lg:top-[434px] top-[314px]",stars:1,id:4},
  {class:"lg:left-[108px] lg:top-[434px] left-[78px] top-[314px]",stars:1,id:5},
  {class:"lg:left-[216px] lg:top-[434px] left-[156px] top-[314px]",stars:1,id:6},
  {class:"lg:left-[216px] lg:top-[326px] left-[156px] top-[236px]",stars:1,id:7},
  {class:"lg:left-[216px] lg:top-[218px] left-[156px] top-[158px]",stars:1,id:8},
  {class:"lg:left-[216px] lg:top-[110px] left-[156px] top-[80px]",stars:1,id:9},
  {class:"lg:left-[216px] lg:top-1 left-[156px] top-[2px]",stars:1,id:10},
  {class:"lg:left-[324px] lg:top-1 left-[234px] top-[2px]",stars:1,id:11},
  {class:"lg:left-[432px] lg:top-1 left-[312px] top-[2px]",stars:1,id:12},
  {class:"lg:left-[540px] lg:top-1 left-[390px] top-[2px]",stars:1,id:13},
  {class:"lg:left-[648px] lg:top-1 left-[468px] top-[2px]",stars:1,id:14},
  {class:"lg:left-[756px] lg:top-1 left-[546px] top-[2px]",stars:1,id:15},
  {class:"lg:left-[756px] lg:top-[110px] left-[546px] top-[80px]",stars:1,id:16},
  {class:"lg:left-[756px] lg:top-[218px] left-[546px] top-[158px]",stars:1,id:17},
  {class:"lg:left-[648px] lg:top-[218px] left-[468px] top-[158px]",stars:1,id:18},
  {class:"lg:left-[540px] lg:top-[218px] left-[390px] top-[158px]",stars:1,id:19},
  {class:"lg:left-[432px] lg:top-[218px] left-[312px] top-[158px]",stars:1,id:20},
  {class:"lg:left-[432px] lg:top-[326px] left-[312px] top-[236px]",stars:1,id:21},
  {class:"lg:left-[432px] lg:top-[434px] left-[312px] top-[314px]",stars:1,id:22},
  {class:"lg:left-[540px] lg:top-[434px] left-[390px] top-[314px]",stars:1,id:23},
  {class:"lg:left-[648px] lg:top-[434px] left-[468px] top-[314px]",stars:1,id:24},
  
  
];
  return (
    <div className='symapp-container'>
      <div className=' relative bg-white rounded-l-2xl lg:rounded-l-3xl w-[92%] flex justify-center items-center flex-col '>
          <div className=' relative left-4 lg:left-7  flex flex-row'>
            <img className='mt-5  lg:w-[120px] lg:h-[145px] w-[90px] h-[110px]' src='/Exercices/FlecheGif.gif' alt='FlecheB'/>
            <p className='mt-6 mr-6 lg:pl-24 pl-8 lg:pr-8 font-semibold text-[#194084] lg:text-[18px] text-[14px] '>Obtenez les clés en résolvant les exercices pour obtenir le cadeau !  </p>
            <img className=' lg:h-[80px] h-[60px]' src='/Exercices/GiftGif.gif' alt='Gift'/>
          </div>
          

          <div className='relative -top-20 left-5 lg:left-0 lg:w-[940px] w-[710px]'>
            <div className='relative'> 

                {tableOfex.map((exo,index)=>(
                  <div key={exo.id} className= {`absolute ${exo.class}`}  >
                  {(exo.id <=Max) ?
                  <Link to={`../exercice/${exo.id}/${exo.stars}`}>
                  <Box language="français" numExo={(exo.id<=9)?`0${exo.id}`:`${exo.id}`  } stars={exo.stars} />
                  </Link>
                    :
                    <BoxBloquee language="français" numExoPrecedent={(exo.id-1<=9)?`0${exo.id-1}`:`${exo.id-1}` } stars={exo.stars} numExoBloque={(exo.id<=9)?`0${exo.id}`:`${exo.id}` } />
                }
                </div>
              
              ))}
                
                <Link to={"../ExercicesFr2/"+Max}>
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

export default ExercicesFr