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
           <div className='mr-7 lg:mr-4 w-[90px] lg:w-[120px] h-[100px] lg:h-[130px] flex flex-col gap-2 justify-start items-center'>
                <img className='w-[50%] h-[50%]' src="/Parameters/exit.svg"/>
                <div className='font-bold text-base lg:text-lg'>Déconnexion</div>
           </div>
       </button>  

        <div className='rounded-l-2xl lg:rounded-l-3xl w-[92%] '>
           <div className='flex flex-col gap-10 justify-center ml-24 lg:ml-48'>
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
                    <div className='h-14 lg:h-20 w-[350px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                        <img className='w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] pl-5 lg:pl-8 ' src="/Parameters/langue.svg"/>
                        <div className='w-[65%] font-bold text-lg lg:text-xl ml-6 lg:ml-10'> Changez la langue</div>
                        <button onClick={showDiv} className='rounded-[7px] bg-[#FAE0B2] flex justify-center items-center h-7 lg:h-9 w-7 lg:w-9 hover:w-8 hover:h-8 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                            {(estOuvert)&&<img className='w-4 lg:w-7 h-4 lg:h-4' src="/Parameters/flecheG.svg"/> }
                            {(!estOuvert)&&<img className='w-4 lg:w-7 h-4 lg:h-4' src="/Parameters/flecheD.svg"/> }

                        </button>
                     </div>
                    
                    <button onClick={()=>{axios.patch("http://localhost:5000/parametres", { langue: "arabe" });}}
                        
                        className ={`w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] hover:scale-125 ${!estOuvert && 'hidden'} `} > 
                      <img className='h-[100%] w-[100%]' src ="/Parameters/arabeIcon.svg"/>
                    </button>

                </div>
                
            </div>
  
        </div>
    </div>
  )
}

export default ParametersFr