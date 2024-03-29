import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTitle from "../../Components/UserTitle";
import CustomCard from "./CustomCard";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";

export default function MenuFr({userName, userAvatar, Max, score}) {
  const [Score, setScore] = useState(parseInt((score/149)*100))
  const [Maxx, setMaxx] = useState(parseInt((Max/48)*100))

  setTimeout(() => {
    setScore(parseInt((score/149)*100));
    setMaxx(parseInt(((Max-1)/47)*100));
  }, 100);
  return (
    // <div className=" bg-symapp-blue-light-second">
    <div className=" symapp-container  ">
      <UserTitle message="Salut" userName={userName} userImage={userAvatar} />

      <div className="flex flex-col lg:gap-8 md:gap-3">
        <div className="flex flex-row lg:gap-10 md:gap-4  ">
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold text-black lg:text-2xl ml-4 text-lg ">
              Apprenez !
            </p>
            <div className="container flex bg-symapp-purple lg:rounded-[40px] md:rounded-[30px] lg:h-[210px] md:h-40 lg:w-[595px] md:w-[400px] items-center justify-between  ">
              <div className="flex flex-col justify-evenly items-center lg:ml-10 lg:gap-2 md:gap-2 md:ml-2 ">
                <h1 className="text-white font-bold lg:text-[43px] md:text-2xl ">
                  Cours
                </h1>
                <p className="text-white lg:text-base md:text-xs text-left lg:w-32  font-bold lg:ml-1 md:ml-5">
                  Symétrie axiale et centrale
                </p>
                <Link to="./cours">
                  <button className="container bg-white lg:rounded-2xl md:rounded-xl lg:h-14 lg:w-36 md:h-10 md:w-28  lg:mt-4 md:mt-2 md:ml-2 lg:text-xl font-bold text-black text-center hover:bg-slate-200 shadow-2xl  ">
                    Allons-y
                  </button>
                </Link>
              </div>
              <img
                className="lg:h-72 lg:w-96 lg:mb-20 md:w-72 md:mb-14"
                src="./menu/ImageCours.svg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3  ">
            <p className="font-semibold text-black lg:text-2xl md:text-lg lg:ml-4">
              Progrès
            </p>
            <div
              className={`container flex bg-symapp-pink-light lg:rounded-[40px] md:rounded-[30px] lg:h-[210px] lg:w-[380px] md:h-40 md:w-[270px] items-center justify-around  `}
            >
            <div className="relative w-[40%] h-[60%] flex justify-center">
              <ProgressProvider valueStart={0} valueEnd={Maxx}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
                </ProgressProvider>
              <span className="absolute -bottom-7 font-semibold">Exercices</span>
            </div>
            <div className="relative w-[40%] h-[60%] flex justify-center">
            
              <ProgressProvider valueStart={0} valueEnd={Score}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
                </ProgressProvider>
              <span className="absolute -bottom-7 font-semibold ">Score</span>
            </div>
            
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:gap-10 md:gap-2">
          <CustomCard
            path="./exercices"
            bgcolor="bg-symapp-orange"
            messageMotivant="Entrainez vous!"
            mainContent="Exercices"
            contentDescription="Tester vos connaissances"
            Image="./menu/ImageExos.svg"
            imageProps="lg:h-40 lg:w-72 lg:mr-9 lg:mt-14 md:h-36 md:w-48 md:mr-12 md:mt-10 "
          />
          <CustomCard
            path={"./dessiner/"+Max}
            bgcolor="bg-symapp-blue-light-second "
            messageMotivant="Amusez vous!"
            mainContent="Mode libre"
            contentDescription="Appliquez vos idées"
            Image="./menu/ImageDessiner.svg"
            imageProps=" mt-3 mr-3 lg:h-48 md:h-32 "
          />
        </div>
      </div>
    </div>
    // </div>
  );
}
