import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SideBar from '../../Components/SideBar'
import Box from './Box'
import BoxBloquee from './BoxBloquee'

function ExercicesAr2() {
  const navigate = useNavigate();
  const { Max } = useParams();
  let tableOfex=[
  {class:" lg:right-[160px] lg:top-[434px] right-[100px] top-[314px]",stars:1,id:25},  
  {class:" lg:right-[268px] lg:top-[434px] right-[178px] top-[314px]",stars:1,id:26},   
  {class:" lg:right-[376px] lg:top-[434px] right-[256px] top-[314px]",stars:1,id:27},    
  {class:" lg:right-[482px] lg:top-[434px] right-[334px] top-[314px]",stars:1,id:28},     
  {class:" lg:right-[590px] lg:top-[434px] right-[412px] top-[314px]",stars:1,id:29},   
  {class:" lg:right-[698px] lg:top-[434px] right-[490px] top-[314px]",stars:1,id:30}, 
  {class:" lg:right-[806px] lg:top-[434px] right-[568px] top-[314px]",stars:1,id:31},      
  {class:" lg:right-[806px] lg:top-[326px] right-[568px] top-[236px]",stars:1,id:32},    
  {class:" lg:right-[806px] lg:top-[218px] right-[568px] top-[158px]",stars:1,id:33},      
  {class:" lg:right-[698px] lg:top-[218px] right-[490px] top-[158px]",stars:1,id:34},      
  {class:" lg:right-[590px] lg:top-[218px] right-[412px] top-[158px]",stars:1,id:35},  
  {class:" lg:right-[482px] lg:top-[218px] right-[334px] top-[158px]",stars:1,id:36},     
  {class:" lg:right-[376px] lg:top-[218px] right-[256px] top-[158px]",stars:1,id:37},
  {class:" lg:right-[268px] lg:top-[218px] right-[178px] top-[158px]",stars:1,id:38},
  {class:" lg:right-[160px] lg:top-[218px] right-[100px] top-[158px]",stars:1,id:39},   
  {class:" lg:right-[52px] lg:top-[218px] right-[22px] top-[158px]"  ,stars:1,id:40},
  {class:" lg:right-[52px] lg:top-[110px] right-[22px] top-[80px]"   ,stars:1,id:41},
  {class:" lg:right-[52px] lg:top-[1px] right-[22px] top-[2px]"      ,stars:1,id:42},
  {class:" lg:right-[160px] lg:top-[1px] right-[100px] top-[2px]"    ,stars:1,id:43},
  {class:" lg:right-[268px] lg:top-[1px] right-[178px] top-[2px]"    ,stars:1,id:44},
  {class:" lg:right-[376px] lg:top-[1px] right-[256px] top-[2px]"    ,stars:1,id:45},
  {class:" lg:right-[482px] lg:top-[1px] right-[334px] top-[2px]"    ,stars:1,id:46},
  {class:" lg:right-[590px] lg:top-[1px] right-[412px] top-[2px]"    ,stars:1,id:47},

  
  
];
  return (
    <div className='symapp-container-Ar'>
      <div className=' relative bg-white rounded-l-2xl lg:rounded-l-3xl w-[92%] '>
          <div className='absolute top-[44px] lg:right-8 right-4  lg:w-[1000px] w-[710px]'>
          <Link to="../exercices">
                <button className='Fleche'>
                   <img className='absolute right-0 lg:top-[495px] top-[355px] lg:h-[85px] lg:w-[150px] h-[45px] w-[110px]' src='/Exercices/FlecheD.svg' alt='FlecheB'/>
                   <img className='FlechePleine absolute right-0 lg:top-[495px] top-[355px] lg:h-[85px] lg:w-[150px] h-[45px] w-[110px]' src='/Exercices/FlecheDpleine.svg' alt='FlecheB'/>
                </button>
                </Link>
                <div onClick={()=>{(parseInt(Max)===48)&& navigate("../dessiner/"+Max)}}  className='LastGift absolute lg:right-[806px] right-[560px] top-[0px] lg:w-[130px] lg:h-[190px] w-[90px] h-[150px]'>
                    <img className={`absolute top-0 right-0 lg:w-[120px] lg:h-[180px] w-[80px] h-[130px] ${(parseInt(Max)===48) && "cursor-pointer"}`} src='/Exercices/BigGiftGif.gif' alt='FlecheB'/>
                    {(parseInt(Max)<48) && <>
                      <div className='back absolute top-0 right-0 lg:w-[120px] lg:h-[180px] w-[80px] h-[130px] select-none '></div>   
                    <img  className='locked absolute lg:top-[110px] lg:right-10 top-[80px] right-[26px] lg:w-[40px] lg:h-[50px] w-[30px] h-[40px] ' src='/Exercices/YLock.svg'/>
                    </>
                      }

                </div>
                {tableOfex.map((exo,index)=>(
                  <div key={exo.id} className= {`absolute ${exo.class}`}  >
                  {(exo.id<=Max) ?
                  <Link to={`../exercice/${exo.id}/${exo.stars}/${Max}`}>
                  <Box language="arabe" numExo={`${exo.id}` } stars={exo.stars} />
                  </Link>
                    :
                    <BoxBloquee language="arabe" numExoPrecedent={exo.id-1} stars={exo.stars} numExoBloque={exo.id} />
                }
                </div>
              
              ))}
                
               
          </div>

      </div>
      
    </div>
  )
}

export default ExercicesAr2