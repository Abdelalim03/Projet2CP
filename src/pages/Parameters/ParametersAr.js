import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import GetMode from '../../Components/GetMode';
import FormNom from './FormNom';

function ParametersAr() {
    const [estOuvert, SetEstOuvert] = useState(false);
    const showDiv = () => {SetEstOuvert(!estOuvert)};
    
    const [nomestOuvert, SetNomEstOuvert] = useState(false);
    const showNom = () => {SetNomEstOuvert(!nomestOuvert)};

    const navigate = useNavigate(); 

    const [language, setlanguage] = useOutletContext();

    const {id} = useParams();
    const changerAv = ()=>{navigate(`/avatar/${id}`)}

    const mode = GetMode();

  return (
    <div className='symapp-container-Ar'>
       <button onClick={async ()=>{await axios.patch("http://localhost:5000/parametres", { currentUser: 0 }).then(
           navigate("/langue")
         );}}
            className='h-fit w-[100%] flex flex-row-reverse justify-end'>
           <div className='ml-4 w-[90px] lg:w-[120px] h-[100px] lg:h-[130px] flex flex-col gap-2 justify-start items-center'>
                <img className='w-[50%] h-[50%] rotate-180' src="./Parameters/exit.svg"/>
                <div className="font-bold text-lg font-['Tajawal']">خروج</div>
           </div>
       </button>  
       <div className={`absolute left-0 top-0 h-screen w-screen z-10 bg-slate-300/30 flex flex-col justify-center items-center ${!nomestOuvert && 'hidden'}`}>
            <div className='h-8 lg:h-12 w-3/4 lg:w-2/3 flex flex-row justify-end bg-blue-200'>
                <button onClick={showNom} className='h-8 lg:h-12 w-8 lg:w-12 text-lg lg:text-2xl font-semibold text-center hover:bg-[#FAE0B2] bg-white/0' >x</button>
            </div>
            <FormNom />
        </div>

        <div className='rounded-l-2xl lg:rounded-l-3xl w-[92%] '>
           <div className='flex flex-col gap-10 justify-center items-end -mr-5'>
                <div dir="rtl" className='h-20 w-[400px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                    <img className='w-[70px] h-[70px] pr-8 ' src="./Parameters/account.svg" />
                    {(mode === "eleve") && <div className="w-[65%] font-bold text-xl mr-10 font-['Tajawal']"> تغيير الاسم </div>}
                    {(mode === "prof") && <div className="w-[65%] font-bold text-xl mr-10 font-['Tajawal']"> تغيير كلمة السر </div>}
                    <button onClick={showNom} className='ml-4 lg:ml-0 rounded-[7px] bg-[#FAE0B2] flex justify-center items-center w-7 lg:w-9 h-7 hover:w-8 hover:h-8 lg:h-9 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac]  '>
                        <img className='w-7 h-5' src="./Parameters/flecheG.svg"/> 
                    </button>
                </div>

                {(mode!=="prof")&& <div dir="rtl" className='h-20 w-[400px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                    <img className='w-[70px] h-[70px] pr-8 ' src="./Parameters/pen.svg"/>
                    <div className="w-[65%] font-bold text-xl mr-10 font-['Tajawal']"> تغيير الشخصية </div>
                    <button onClick={changerAv} className='ml-4 lg:ml-0 rounded-[7px] bg-[#FAE0B2] flex justify-center items-center w-7 lg:w-9 h-7 hover:w-8 hover:h-8 lg:h-9 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                        <img className='w-7 h-5' src="./Parameters/flecheG.svg"/> 
                    </button>
                </div>}
                <div className='flex flex-row-reverse gap-10'>
                    <div dir="rtl" className='h-20 w-[400px] lg:w-[500px] rounded-[15px] bg-[#FFC5C1] flex flex-row items-center'>
                        <img className='w-[70px]  h-[70px] pr-8 ' src="./Parameters/langue.svg"/>
                        <div className="w-[65%] font-bold text-xl mr-10 font-['Tajawal']"> تغيير اللغة </div>
                        <button onClick={showDiv} className='ml-4 lg:ml-0 rounded-[7px] bg-[#FAE0B2] flex justify-center items-center w-7 lg:w-9 h-7 hover:w-8 hover:h-8 lg:h-9 hover:lg:w-10 hover:lg:h-10 hover:bg-[#faddac] '>
                            {(estOuvert)&&<img className='w-7 h-5' src="./Parameters/flecheD.svg"/> }
                            {(!estOuvert)&&<img className='w-7 h-5' src="./Parameters/flecheG.svg"/> }

                        </button>
                     </div>
                    
                    <button onClick={async ()=>{await axios.patch("http://localhost:5000/parametres", { langue: "français" }).then(async res=>{setlanguage("français");navigate("/home/"+id)})}}
                        
                        className ={`w-[60px] h-[60px] hover:scale-125 ${!estOuvert && 'hidden'} `} > 
                      <img className='h-[100%] w-[100%] ' src ="./Parameters/frenchIcon.svg"/>
                    </button>

                </div>
                
            </div>
  
        </div>
    </div>
  )
}

export default ParametersAr