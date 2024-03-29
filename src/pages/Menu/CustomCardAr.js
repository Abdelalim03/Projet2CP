import React from "react";
import { Link } from "react-router-dom";

export default function CustomCard(props) {
  return (
    <div className="flex flex-col gap-3 items-end">
      <p className="font-semibold text-black lg:text-2xl md:text-lg ml-4">
        {props.messageMotivant}
      </p>
      <div
        className={`container flex ${props.bgcolor} lg:rounded-[40px] md:rounded-[30px] lg:h-[210px] md:h-36 lg:w-[490px] md:w-[340px] items-center  flex-row-reverse justify-evenly  `}
      >
        <div className="flex flex-col justify- items-center lg:ml-10 md:ml-5 lg:gap-2 md:gap-1">
          <h1 className="text-white font-bold lg:text-3xl md:text-2xl ">
            {props.mainContent}
          </h1>
          <p className="text-white lg:text-base md:text-xs text-left pl-5 lg:w-32 md:w-28 font-bold  ">
            {props.contentDescription}
          </p>
          <Link to={`${props.path}`}>
            <button className="container bg-white lg:rounded-2xl md:rounded-xl lg:h-12 lg:w-36 md:h-9 md:w-28  mt-4 lg:text-xl md: font-bold text-black text-center hover:bg-slate-200 shadow-2xl mr-2">
               لننطلق
            </button>
          </Link>
        </div>
        <img className={`${props.imageProps}`} src={props.Image} />
      </div>
    </div>
  );
}
