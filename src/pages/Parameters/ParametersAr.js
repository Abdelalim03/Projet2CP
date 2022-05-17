import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CompParametersAr from './CompParametersAr';

function ParametersAr() {
    const [estOuvert, SetEstOuvert] = useState(false);
    const showDiv = () => {SetEstOuvert(!estOuvert)};
    const navigate = useNavigate();
  return (
    <div className='symapp-container-Ar'>
       <button onClick={()=>{axios.patch("http://localhost:5000/parametres", { currentUser: 0 }).then(
           navigate("/")
         );}}
            className='h-fit w-[100%] flex flex-row-reverse justify-end'>
           <div className='ml-4 w-[90px] lg:w-[120px] h-[100px] lg:h-[130px] flex flex-col gap-2 justify-start items-center'>
                <img className='w-[50%] h-[50%] rotate-180' src="/Parameters/exit.svg"/>
                <div className="font-bold text-lg font-['Tajawal']">خروج</div>
           </div>
       </button>  

        <div className='rounded-l-2xl lg:rounded-l-3xl w-[92%] '>
           <div className='flex flex-col gap-10 justify-center items-end mr-24 lg:mr-48'>
                <CompParametersAr 
                    icon = "/Parameters/account.svg"    
                    titre = "تغيير الاسم"
                    fleche = "/Parameters/flecheG.svg"      
                />

                <CompParametersAr
                    icon = "/Parameters/pen.svg"    
                    titre = "تغيير الشخصية"
                    fleche = "/Parameters/flecheG.svg"      
                />
                <div className='flex flex-row-reverse gap-10'>
                    <div dir="rtl" className='h-14 lg:h-20 w-[350px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                        <img className='w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] pr-5 lg:pr-8 ' src="/Parameters/langue.svg"/>
                        <div className="w-[65%] font-bold text-lg lg:text-xl mr-6 lg:mr-10 font-['Tajawal']"> تغيير اللغة </div>
                        <button onClick={showDiv} className='rounded-[7px] bg-[#FAE0B2] flex justify-center items-center w-7 lg:w-9 h-7 hover:w-8 hover:h-8 lg:h-9 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                            {(estOuvert)&&<img className='w-4 lg:w-7 h-4 lg:h-4' src="/Parameters/flecheD.svg"/> }
                            {(!estOuvert)&&<img className='w-4 lg:w-7 h-4 lg:h-4' src="/Parameters/flecheG.svg"/> }

                        </button>
                     </div>
                    
                    <button onClick={()=>{axios.patch("http://localhost:5000/parametres", { langue: "français" });}}
                        
                        className ={`w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] hover:scale-125 ${!estOuvert && 'hidden'} `} > 
                      <img className='h-[100%] w-[100%] ' src ="/Parameters/frenchIcon.svg"/>
                    </button>

                </div>
                
            </div>
  
        </div>
    </div>
  )
}

export default ParametersAr