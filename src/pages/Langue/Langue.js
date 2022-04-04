import React, { useState } from "react";
import { Link } from "react-router-dom";
import Absolute from "./Absolute";

function Langue() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <Absolute />
        <div
          className="flex flex-col justify-center items-center gap-7 h-[56%] w-1/3 px-5 py-10 rounded-3xl bg-gradient-to-b from-[#eaf1ff] to-[#fce3de]">
          <div
            className="flex items-center justify-center h-1/3 w-5/6 rounded-lg bg-[#7EABFF] pb-2 transform hover:scale-110 shadow-sm transition ease-out cursor-pointer">
            <Link to="welcome/francais" ><span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Français</span></Link>
            
          </div>
          <div
            className="flex items-center justify-center h-1/3 w-5/6 rounded-lg bg-[#F47458] pb-2 transform hover:scale-110 transition ease-out cursor-pointer">
            <Link to="welcome/arabe" >
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">العربية</span>
            </Link>
            
          </div>
        </div>
    </div>
  );
}

export default Langue;
