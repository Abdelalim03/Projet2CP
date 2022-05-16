import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CompParametersFr from './CompParametersFr';

function ParametersFr() {
    const [estOuvert, SetEstOuvert] = useState(false);
    const showDiv = () => {SetEstOuvert(!estOuvert)};
    const navigate = useNavigate(); 
  return (
    <div className='symapp-container'>
       <button onClick={()=>{axios.patch("http://localhost:5000/parametres", { currentUser: 0 }).then(
           navigate("/")
       );}}
       
       className='h-fit w-[100%] flex flex-row justify-end'>
           <div className='mr-4 w-[120px] h-[130px] flex flex-col gap-2 justify-start items-center'>
                <img className='w-[50%] h-[50%]' src="/Parameters/exit.svg"/>
                <div className='font-bold text-lg'>Deconnexion</div>
           </div>
       </button>  

        <div className='rounded-l-2xl lg:rounded-l-3xl w-[92%] '>
           <div className='flex flex-col gap-10 justify-center items-start ml-10 '>
                <CompParametersFr
                    icon = "/Parameters/account.svg"    
                    titre = "Changez votre nom"
                    fleche = "/Parameters/flecheD.svg"      
                />

                <CompParametersFr 
                    icon = "/Parameters/pen.svg"    
                    titre = "Changez votre avatar"
                    fleche = "/Parameters/flecheD.svg"      
                />
                <div className='flex flex-row gap-10'>
                    <div className='h-20 w-[400px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                        <img className='w-[70px] h-[70px] pl-8 ' src="/Parameters/langue.svg"/>
                        <div className='w-[65%] font-bold text-xl ml-10'> Changez la langue</div>
                        <button onClick={showDiv} className='mr-4 lg:mr-0 rounded-[7px] bg-[#FAE0B2] flex justify-center items-center h-6 lg:w-9 lg:h-9 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                            {(estOuvert)&&<img className='w-7 h-5' src="/Parameters/flecheG.svg"/> }
                            {(!estOuvert)&&<img className='w-7 h-5' src="/Parameters/flecheD.svg"/> }

                        </button>
                     </div>
                    
                    <button onClick={()=>{axios.patch("http://localhost:5000/parametres", { langue: "arabe" });}}
                        
                        className ={` w-[60px] h-[60px] hover:scale-125 ${!estOuvert && 'hidden'} `} > 
                      <img className='h-[100%] w-[100%]' src ="/Parameters/arabeIcon.svg"/>
                    </button>

                </div>
                
            </div>
  
        </div>
    </div>
  )
}

export default ParametersFr