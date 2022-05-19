import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Box from './Box'
import BoxBloquee from './BoxBloquee'

function ExercicesFr2() {
  const { Max } = useParams();
  let tableOfex=[{class:"lg:left-[160px] lg:top-[434px] left-[100px] top-[314px]",stars:1,id:25},
  {class:"lg:left-[268px] lg:top-[434px] left-[178px] top-[314px]",stars:1,id:26},
  {class:"lg:left-[376px] lg:top-[434px] left-[256px] top-[314px]",stars:1,id:27},
  {class:"lg:left-[482px] lg:top-[434px] left-[334px] top-[314px]",stars:1,id:28},
  {class:"lg:left-[590px] lg:top-[434px] left-[412px] top-[314px]",stars:1,id:29},
  {class:"lg:left-[698px] lg:top-[434px] left-[490px] top-[314px]",stars:1,id:30},
  {class:"lg:left-[806px] lg:top-[434px] left-[568px] top-[314px]",stars:1,id:31},
  {class:"lg:left-[806px] lg:top-[326px] left-[568px] top-[236px]",stars:1,id:32},
  {class:"lg:left-[806px] lg:top-[218px] left-[568px] top-[158px]",stars:1,id:33},
  {class:"lg:left-[698px] lg:top-[218px] left-[490px] top-[158px]",stars:1,id:34},
  {class:"lg:left-[590px] lg:top-[218px] left-[412px] top-[158px]",stars:1,id:35},
  {class:"lg:left-[482px] lg:top-[218px] left-[334px] top-[158px]",stars:1,id:36},
  {class:"lg:left-[376px] lg:top-[218px] left-[256px] top-[158px]",stars:1,id:37},
  {class:"lg:left-[268px] lg:top-[218px] left-[178px] top-[158px]",stars:1,id:38},
  {class:"lg:left-[160px] lg:top-[218px] left-[100px] top-[158px]",stars:1,id:39},
  {class:"lg:left-[52px] lg:top-[218px] left-[22px] top-[158px]",stars:1,id:40},
  {class:"lg:left-[52px] lg:top-[110px] left-[22px] top-[80px]",stars:1,id:41},
  {class:"lg:left-[52px] lg:top-[1px] left-[22px] top-[2px]",stars:3,id:42},
  {class:"lg:left-[160px] lg:top-[1px] left-[100px] top-[2px]",stars:1,id:43},
  {class:"lg:left-[268px] lg:top-[1px] left-[178px] top-[2px]",stars:1,id:44},
  {class:"lg:left-[376px] lg:top-[1px] left-[256px] top-[2px]",stars:1,id:45},
  {class:"lg:left-[482px] lg:top-[1px] left-[334px] top-[2px]",stars:1,id:46},
  {class:"lg:left-[590px] lg:top-[1px] left-[412px] top-[2px]",stars:1,id:47},

  
  
];
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

                {tableOfex.map((exo,index)=>(
                  <div key={exo.id} className= {`absolute ${exo.class}`}  >
                  {(exo.id<=Max) ?
                  <Link to={`../exercice/${exo.id}/${exo.stars}`}>
                  <Box language="français" numExo={`${exo.id}` } stars={exo.stars} />
                  </Link>
                    :
                    <BoxBloquee language="français" numExoPrecedent={exo.id-1} stars={exo.stars} numExoBloque={exo.id} />
                }
                </div>
              
              ))}
                
          </div>

      </div>
      
    </div>
  )
}

export default ExercicesFr2