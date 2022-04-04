import React, { useState } from "react";
import Absolute from "./Absolute";

function Langue() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <Absolute />
        <div
          className="flex flex-col justify-center items-center gap-7 h-[56%] w-1/3 px-5 py-10 rounded-3xl bg-gradient-to-b from-[#eaf1ff] to-[#fce3de]">
          <div
            className="flex items-center justify-center h-1/3 w-5/6 rounded-lg bg-[#7EABFF] pb-2 transform hover:scale-110 shadow-sm transition ease-out cursor-pointer">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Français</span>
          </div>
          <div
            className="flex items-center justify-center h-1/3 w-5/6 rounded-lg bg-[#F47458] pb-2 transform hover:scale-110 transition ease-out cursor-pointer">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">العربية</span>
          </div>
        </div>
    </div>
  );
}

export default Langue;
