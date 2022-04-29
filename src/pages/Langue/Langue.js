import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Absolute from "./Absolute";
const axios = require('axios');

function Langue() {
  const navigate = useNavigate();
  const [langue, setLangue] = useState("");
  const handleClick = (lang)=>{
       setLangue(lang);
       navigate("welcome");
      // let doc = {type:lang}
    // axios.post('http://localhost:3001/langue',JSON.stringify(doc) ).then(resp => {
    //     console.log(resp.data);
    //     Navigate("welcome")
    // }).catch(error => {
    //     console.log(error);
    // });
    }
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <Absolute />
        <div className="flex flex-col justify-center items-center gap-7 h-[56%] w-1/3 px-5 py-10 rounded-3xl bg-gradient-to-b from-[#eaf1ff] to-[#fce3de]">
          <div className="flex items-center justify-center h-1/3 w-5/6 rounded-lg bg-[#7EABFF] pb-2 transform hover:scale-110 shadow-sm transition ease-out cursor-pointer" onClick={()=>handleClick("français")} >
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Français</span>
          </div>
          <div className="flex items-center justify-center h-1/3 w-5/6 rounded-lg bg-[#F47458] pb-2 transform hover:scale-110 transition ease-out cursor-pointer" onClick={()=>handleClick("arabe")} > 
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">العربية</span>  
          </div>
        </div>
    </div>
  );
}

export default Langue;
