import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function InputCardAr() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [direction, setDirection] = useState("rtl")
  
    function changeHandler(e) {
      if (e.target.value===""){
        setDirection("rtl")
     }
     else if (e.target.value.charCodeAt(0)<200){
         setDirection("ltr")
     }else{
         setDirection("rtl")
     }
     setUsername(e.target.value);
    }

   async function handlName(e) {
      let isAuthorized = false;
      if (username.trim()!==""){
        if (e.type==="keyup"){
          if (e.keyCode===13) isAuthorized=true;
        }else{
          isAuthorized=true;
        }
      }

      if (isAuthorized){
       await axios.get("http://localhost:5000/users?nom="+username.trim())
        .then(async resp=>{
          if (resp.data.length){
         await axios.patch('http://localhost:5000/parametres',{"currentUser":resp.data[0].id} ).then(async resp2 => {
             navigate(`/home/${resp.data[0].id}`);
          }).catch(errorr => {
              console.log(errorr);
          });
        }else{
          axios.post('http://localhost:5000/users',{
          "nom": username.trim(),
          "avatar": "",
          "maxExo": 1,
          })
          .then( async res => {
             axios.patch('http://localhost:5000/parametres',{"currentUser":res.data.id} ).then( async res2 => {
              navigate(`/avatar/${res.data.id}`);
          })
            
          }).catch(error => {
              console.log(error);
          });
          }
        })

        isAuthorized=false;
      }
    }

  return (
        <div className="relative flex  justify-center items-center lg:-mt-4 h-52 lg:h-72 w-[55%] lg:w-[43%] bg-[url('./grid.png')] bg-[#80aaff12] border-4 border-[#0083CB] rounded-3xl ">
                <img className='select-none absolute -right-7 -bottom-[6px] lg:-bottom-[7px] h-[72%] lg:-right-10' src='/nom/katebAr.png'  alt='kateb'/>
                <img className='select-none absolute left-[55%] bottom-[10%] ' src='/nom/Rectangle 74.svg' alt='rect'/>
                <img className='select-none absolute top-0 left-[60%]' src='/nom/Polygon 10.svg' alt='poly'/>
                <img className='select-none absolute left-[30%] top-[10%] ' src='/nom/Group 70.svg' alt='Group 70'/>
                <div dir='rtl' className='flex  justify-center h-12 lg:h-16 pl-7 rounded-2xl w-[75%]'>
                <input dir={direction} name="userName" onKeyUp={handlName} onChange={changeHandler} value={username} type="text" className='rounded-r-2xl h-full m-0  pr-8 lg:pr-9 pl-2 text-base lg:text-xl w-[63%] focus:outline-none' placeholder="اسم المستخدم" />
                    <button  onClick={handlName} className="select-none w-fit px-4 h-full m-0 suivant rounded-l-2xl bg-[#0083CBB2] hover:bg-[#194084F2] text-base lg:text-2xl text-white font-bold lg:px-5 focus:outline-none transition ease-in-out delay-150 duration-300" type="button">
                      التالي <FontAwesomeIcon  icon={faArrowRightToBracket} className='text-white rotate-180 lg:w-5 -mb-[1px] lg:-mb-[2px]' />
                    </button>
                </div>
            </div>
  )
}

export default InputCardAr