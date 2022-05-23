import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import GetCurrentUser from '../../Components/GetCurrentUser';
import { data } from 'autoprefixer';





function InputCard() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [direction, setDirection] = useState("ltr");
    const [curUserName, setCurUserName] = useState("");

    const [msg, setMsg] = useState("");
    const {id} = useParams();

    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCurUserName(data.nom);
      })
      .catch((err) => {
        console.log(err);
      });

    function changeHandler(e) {
      if (e.target.value===""){
        setDirection("ltr")
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
          if(username === curUserName) setMsg("Entrer un nouveau nom");
          else{
            await axios.get("http://localhost:5000/users?nom="+username.trim())
           .then(async resp=>{
             if (resp.data.length){
               setMsg("Ce nom est déja utilisé, veuiller entrer un autre");
           }else{
                setMsg("Changement avec succés");
                axios.patch(`http://localhost:5000/users/${id}`, { nom: username.trim() });
            }
           })
   
           isAuthorized=false;

          }
          
      }
    }
  return (
    <div className="relative flex mx-auto justify-center items-center lg:-mt-4 h-52 lg:h-72 w-[73%] bg-[url('./grid.png')] bg-[#80aaff12] border-4 border-[#0083CB] rounded-3xl ">
                <img className='select-none absolute -left-7 -bottom-[6px] lg:-bottom-[7px] h-[72%] lg:-left-10' src='./nom/kateb.png'  alt='kateb'/>
                <img className='select-none absolute left-[55%] bottom-[10%] ' src='./nom/Rectangle 74.svg' alt='rect'/>
                <img className='select-none absolute top-0 left-[60%]' src='./nom/Polygon 10.svg' alt='poly'/>
                <img className='select-none absolute left-[30%] top-[10%] ' src='./nom/Group 70.svg' alt='Group 70'/>
                <div className='h-12 lg:h-16 pl-7 rounded-2xl w-[75%]'>
                <input dir={direction} name="userName" onKeyUp={handlName} onChange={changeHandler} value={username} type="text" className='rounded-l-2xl h-full m-0  pl-5 lg:pl-9 pr-2 text-base lg:text-xl w-[63%] focus:outline-none' placeholder="Nom d'utilisateur" />
                    <button onClick={handlName} className="select-none w-fit px-3 h-full m-0 suivant rounded-r-2xl bg-[#0083CBB2] hover:bg-[#194084F2] text-base lg:text-2xl text-white font-bold lg:px-4 focus:outline-none transition ease-in-out delay-150 duration-300" type="button">
                      changer <FontAwesomeIcon icon={faArrowRightToBracket} className='text-white lg:w-5 -mb-[1px] lg:-mb-[2px]' />
                    </button>
                    <p className='flex flex-row gap-1 lg:gap-3 ml-7 lg:ml-14 mt-3 lg:mt-5 text-xs lg:text-sm font-semibold'>
                      <img src='./Parameters/exclamation.png' className={`${(msg === "")&&"hidden"} ${(msg === "Changement avec succés")&&"hidden"} h-3 lg:h-4 w-3 lg:w-4`} />
                      <img src='./Parameters/validation.png'  className={`${(msg === "")&&"hidden"} ${(msg === "Entrer un nouveau nom")&&"hidden"} ${(msg === "Ce nom est déja utilisé, veuiller entrer un autre")&&"hidden"} h-3 lg:h-4 w-3 lg:w-4`}/>
                      {msg}
                    </p>
                </div>
      </div>
  )
}

export default InputCard