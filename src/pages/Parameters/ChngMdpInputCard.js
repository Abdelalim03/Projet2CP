import React, { useState, useEffect } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import bcrypt from 'bcryptjs'




function ChngMdpInputCard() {
    const [enteredMdp, setEnteredMdp] = useState("");
    const [direction, setDirection] = useState("ltr");
    const [mdp, setMdp] = useState("");
    const [showMdp, setShowMdp] = useState("password");

    const [msg, setMsg] = useState("");

    

      useEffect(() => {
        
        axios
      .get(`http://localhost:5000/users/-1`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setMdp(data.mdp);
      })
      .catch((err) => {
        console.log(err);
      });
        
      }, [])
      
    function changeHandler(e) {
      if (e.target.value===""){
        setDirection("ltr")
     }
     else if (e.target.value.charCodeAt(0)<200){
         setDirection("ltr")
     }else{
         setDirection("rtl")
     }
     setEnteredMdp(e.target.value);
    }
    
     function handlName(e) {
      let isAuthorized = false;
      if (enteredMdp.trim()!==""){
        if (e.type==="keyup"){
          if (e.keyCode===13) isAuthorized=true;
        }else{
          isAuthorized=true;
        }
      }

      
        if (isAuthorized){
          bcrypt.compare(enteredMdp, mdp, function(err, result) {
            if (!err){
             if (result){
              setMsg("Ceci est le mot de passe courant");
                 
             }else{
              bcrypt.hash(enteredMdp, 10, function(err, hash) {
                if (!err){
                  axios
                  .patch("http://localhost:5000/users/-1", { mdp: hash })
                  .catch((error) => {
                    console.log(error);
                  });
                  setMsg("Changement avec succés");
                }
            });
              
     
             isAuthorized=false;
             }
            }else{
                console.log(err);
            }
      });
    }
  }
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center lg:-mt-4 h-52 lg:h-72 w-[73%] bg-[url('./grid.png')] bg-[#80aaff12] border-4 border-[#0083CB] rounded-3xl ">
                <img className='select-none absolute left-[55%] bottom-[10%] ' src= './nom/Rectangle 74.svg' alt='rect'/>
                <img className='select-none absolute top-0 left-[60%]' src= './nom/Polygon 10.svg' alt='poly'/>
                <img className='select-none absolute left-[30%] top-[10%] ' src= './nom/Group 70.svg' alt='Group 70'/>
                <div className='h-12 lg:h-16 pl-7 rounded-2xl w-[75%] flex flex-row'>
                <input dir={direction} name="userName" onKeyUp={handlName} onChange={changeHandler} value={enteredMdp} type={showMdp} className='rounded-l-2xl h-full m-0  pl-5 lg:pl-9 pr-2 text-base lg:text-xl w-[63%] focus:outline-none' placeholder="Le mot de passe" />
                    <div className='h-full w-7 lg:w-9 bg-white flex justify-center items-center'>
                      <img onClick={() => {setShowMdp("text");}} className={`w-[70%] h-[50%] mr-2 cursor-pointer ${(showMdp === "text") && "hidden"} hover:scale-110`} src= './etesvous/open_eye.svg' alt='eye'/>
                      <img onClick={() => {setShowMdp("password");}} className={`w-[70%] h-[50%] mr-2 cursor-pointer ${(showMdp === "password") && "hidden"} hover:scale-110`} src= './etesvous/closed_eye.svg' alt='eye'/>
                    </div>
                    <button onClick={handlName} className="select-none w-[120px] lg:w-[190px] px-3 h-full m-0 suivant rounded-r-2xl bg-[#0083CBB2] hover:bg-[#194084F2] text-base lg:text-2xl text-white font-bold lg:px-4 focus:outline-none transition ease-in-out delay-150 duration-300" type="button">
                      Changer <FontAwesomeIcon icon={faArrowRightToBracket} className='text-white lg:w-5 -mb-[1px] lg:-mb-[2px]' />
                    </button>
                </div>
                <div className='h-fit w-[75%]'>
                  <p className='flex flex-row gap-1 lg:gap-3 ml-7 lg:ml-14 mt-3 lg:mt-5 text-xs lg:text-sm font-semibold'>
                        <img src= './Parameters/exclamation.png' className={`${(msg === "")&&"hidden"} ${(msg === "Changement avec succés")&&"hidden"} h-3 lg:h-4 w-3 lg:w-4`} />
                        <img src= './Parameters/validation.png'  className={`${(msg === "")&&"hidden"} ${(msg === "Ceci est le mot de passe courant")&&"hidden"} h-3 lg:h-4 w-3 lg:w-4`}/>
                        {msg}
                  </p>
                </div>
      </div>
  )
  }

export default ChngMdpInputCard