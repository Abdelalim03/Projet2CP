import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTitleAr from "../../Components/UserTitleAr";
import CustomCardAr from "./CustomCardAr";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";

export default function MenuAr({userName, userAvatar, Max, score}) {
  const [Score, setScore] = useState(parseInt((score/149)*100))
  const [Maxx, setMaxx] = useState(parseInt((Max/48)*100))

  setTimeout(() => {
    setScore(parseInt((score/149)*100));
    setMaxx(parseInt(((Max-1)/47)*100));
  }, 100);
  return (
    // <div className=" bg-symapp-blue-light-second">

    <div className=" symapp-container-Ar items-end  ">
      <div dir="rtl" > 
      <UserTitleAr message=" اهلا" userName={userName} userImage={userAvatar}  />

      </div>

      <div className="flex flex-col lg:gap-8 md:gap-3  ">
        <div className="flex flex-row-reverse lg:gap-10 md:gap-4  ">
          <div className="flex flex-col gap-3 items-end  ">
            <p className="font-semibold text-black lg:text-2xl ml-4 text-lg ">
              !تعلم
            </p>
            <div className="container flex bg-symapp-purple lg:rounded-[40px] md:rounded-[30px] lg:h-[210px] md:h-40 lg:w-[595px] md:w-[400px] items-center justify-between flex-row-reverse ">
              <div className="flex flex-col justify-evenly items-center lg:ml-10 lg:gap-2 md:gap-2 md:ml-2 ">
                <h1 className="text-white font-bold lg:text-[43px] md:text-2xl ">
                  دروس
                </h1>
                <p className="text-white lg:text-base md:text-xs text-right pr-8  font-bold  md:ml-5   ">
                  تناظر محوري و مركزي
                </p>
                <Link to="./cours">
                  <button className="container bg-white lg:rounded-2xl md:rounded-xl lg:h-14 lg:w-36 md:h-10 md:w-28 mr-3 lg:mt-4 md:mt-2 md:ml-2 lg:text-xl font-bold text-black text-center hover:bg-slate-200 shadow-2xl  ">
                    هيا لننطلق
                  </button>
                </Link>
              </div>
              <img
                className="lg:h-72 lg:w-96 lg:mb-20 md:w-72  md:mb-14 "
                src="/menu/FlippedImageCours.svg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end ">
            <p className="font-semibold text-black lg:text-2xl md:text-lg lg:ml-4">
            مسارك 
            </p>
            <div
              className={`container flex bg-symapp-pink-light lg:rounded-[40px] md:rounded-[30px] lg:h-[210px] lg:w-[380px] md:h-40 md:w-[270px] items-center justify-around  `}
            >
            <div className="relative w-[40%] h-[60%] flex justify-center">
              {Maxx && <ProgressProvider valueStart={0} valueEnd={Maxx}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
                </ProgressProvider>}
              <span className="absolute -bottom-7 font-semibold">التمارين</span>
            </div>
            <div className="relative w-[40%] h-[60%] flex justify-center">
            
              {Score && <ProgressProvider valueStart={0} valueEnd={Score}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
                </ProgressProvider>}
              <span className="absolute -bottom-7 font-semibold ">مجموع النقاط</span>
            </div>
            </div>
          </div>
        </div>

        <div className="flex  lg:gap-10 md:gap-2 flex-row-reverse">
          <CustomCardAr
            path="./exercices"
            bgcolor="bg-symapp-orange"
            messageMotivant="!تمرن "
            mainContent="تمارين"
            contentDescription="اختبر معارفك "
            Image="/menu/FlippedImageExos.svg"
            imageProps="lg:h-40 lg:w-72  lg:mt-14 md:h-36 md:w-48 md:mt-10 "
          />
          <CustomCardAr
            path={"./dessiner/"+Max}
            bgcolor="bg-symapp-blue-light-second "
            messageMotivant="! استمتع"
            mainContent="مود ليبر"
            contentDescription="طبق افكارك"
            Image="/menu/ImageDessiner.svg"
            imageProps=" ml-16 mt-3 mr-8 lg:h-48 md:h-32 "
          />
        </div>
      </div>
    </div>
    // </div>
  );
}
