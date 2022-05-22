import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../Components/SideBar'
import Box from './Box'
import BoxBloquee from './BoxBloquee'

function ExercicesAr({Max}) {

  let tableOfex=[
  {class:"lg:top-[110px] top-[80px] right-0",stars:1,id:1},
  {class:" lg:top-[218px] top-[158px] right-0",stars:1,id:2 },
  {class:" lg:top-[326px] top-[236px] right-0",stars:1,id:3 },
  {class:" lg:top-[434px] top-[314px] right-0",stars:1,id:4}, 
  {class:" lg:right-[108px] lg:top-[434px] right-[78px] top-[314px]",stars:1,id:5 }, 
  {class:" lg:right-[216px] lg:top-[434px] right-[156px] top-[314px]",stars:2,id:6},       
  {class:" lg:right-[216px] lg:top-[326px] right-[156px] top-[236px]",stars:2,id:7},         
  {class:" lg:right-[216px] lg:top-[218px] right-[156px] top-[158px]",stars:2,id:8},     
  {class:" lg:right-[216px] lg:top-[110px] right-[156px] top-[80px]",stars:2,id:9 },     
  {class:" lg:right-[216px] lg:top-1 right-[156px] top-[2px]",stars:2,id:10 },
  {class:" lg:right-[324px] lg:top-1 right-[234px] top-[2px]",stars:2,id:11  },
  {class:" lg:right-[432px] lg:top-1 right-[312px] top-[2px]",stars:3,id:12  },
  {class:" lg:right-[540px] lg:top-1 right-[390px] top-[2px]",stars:3,id:13},
  {class:" lg:right-[648px] lg:top-1 right-[468px] top-[2px]",stars:3,id:14   },
  {class:" lg:right-[756px] lg:top-1 right-[546px] top-[2px]",stars:3,id:15 },  
  {class:" lg:right-[756px] lg:top-[110px] right-[546px] top-[80px]",stars:3,id:16  },
  {class:" lg:right-[756px] lg:top-[218px] right-[546px] top-[158px]",stars:3,id:17 },     
  {class:" lg:right-[648px] lg:top-[218px] right-[468px] top-[158px]",stars:3,id:18}, 
  {class:" lg:right-[540px] lg:top-[218px] right-[390px] top-[158px]" ,stars:3,id:19  },
  {class:" lg:right-[432px] lg:top-[218px] right-[312px] top-[158px]",stars:3,id:20   },
  {class:" lg:right-[432px] lg:top-[326px] right-[312px] top-[236px]",stars:4,id:21 },
  {class:" lg:right-[432px] lg:top-[434px] right-[312px] top-[314px]",stars:4,id:22},
  {class:" lg:right-[540px] lg:top-[434px] right-[390px] top-[314px]",stars:4,id:23},
  {class:" lg:right-[648px] lg:top-[434px] right-[468px] top-[314px]",stars:4,id:24},
  
  
  
];


  return (
    <div className='symapp-container-Ar'>
      <div className='rounded-l-2xl lg:rounded-l-3xl w-[92%] flex justify-center items-center flex-col '>
          <div className='relative left-14 lg:left-7 flex flex-row'>
            <img className=' lg:h-[80px] h-[60px]' src='/Exercices/GiftGif.gif' alt='Gift'/>
            <p className="mt-6 pl-3 mx-14 lg:mx-20 font-semibold font-['Tajawal'] text-[#194084] lg:text-[18px] text-[14px]"> أحصل على المفاتيح بحل التمارين للوصول الى الهدية </p>
            <img className='mt-5  lg:w-[120px] lg:h-[145px] w-[90px] h-[110px]' src='/Exercices/FlecheButtRight.gif' alt='FlecheB'/>
          </div>
          

          <div className='relative -top-20 left-5 lg:left-0 lg:w-[940px] w-[710px]'>
            <div className='relative'> 
            {tableOfex.map((exo,index)=>(
                  <div key={exo.id} className= {`absolute ${exo.class}`}  >
                  {(exo.id <=Max) ?
                  <Link to={`../exercice/${exo.id}/${exo.stars}/${Max}`}>
                  <Box language="arabe" numExo={(exo.id<=9)?`0${exo.id}`:`${exo.id}`  } stars={exo.stars} />
                  </Link>
                    :
                    <BoxBloquee language="arabe" numExoPrecedent={(exo.id-1<=9)?`0${exo.id-1}`:`${exo.id-1}` } stars={exo.stars} numExoBloque={(exo.id<=9)?`0${exo.id}`:`${exo.id}` } />
                }
                </div>
              
              ))}
                <Link to={"../ExercicesAr2/"+Max}>
                <button className='Fleche'>
                   <img className='absolute lg:h-[85px] lg:w-[150px] h-[45px] w-[110px] lg:right-[850px] lg:top-[485px] right-[590px] top-[360px]' src='/Exercices/FlecheG.svg' alt='FlecheB'/>
                   <img className='FlechePleine absolute lg:h-[85px] lg:w-[150px] h-[45px] w-[110px] lg:right-[850px] lg:top-[485px] right-[590px] top-[360px]' src='/Exercices/FlecheGpleine.svg' alt='FlecheB'/>
                </button>
                </Link>
            </div>
          </div>

          

      </div>
      
    </div>
  )
}

export default ExercicesAr