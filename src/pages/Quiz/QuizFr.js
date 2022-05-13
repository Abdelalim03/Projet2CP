import React from "react";
import { Link } from "react-router-dom";

function QuizFr() {
  return (
    <div className="flex flex-col lg:gap-10 md:gap-2 lg:rounded-l-[50px] md:rounded-l-[30px] bg-white h-screen w-screen">
      <div className=" flex flex-col justify-start gap-5">
        <div className="bg-symapp-blue lg:h-36 md:h-20 lg:rounded-tl-[50px] md:rounded-tl-[30px] flex justify-between px-4">
          <div className="flex items-center gap-10">
            <Link to="../cours">
              <div className="flex justify-center items-center md:w-10 md:h-10 lg:w-14 lg:h-14 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 hover:shadow-sm">
                <img className="w-fit" src="/quiz/return.svg" alt="" />
              </div>
            </Link>
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-white font-bold md:text-2xl lg:text-3xl">Quiz 01</h1>
              <p className="text-white text-base text-left w-40 font-bold md:text-lg lg:text-xl">
                Quiz Description
              </p>
            </div>
          </div>

          <img
            className="md:w-10 lg:w-12 hover:cursor-pointer hover:scale-110 hover:shadow-sm"
            src="/quiz/reload.svg"
            alt=""
          />
        </div>

        <div className="flex flex-row md:gap-20 lg:gap-28 justify-center">
          <div className=" p-5 flex flex-col gap-5 bg-[#FAE0B2] rounded-3xl">
            <div className="flex justify-center">
              <img
                className="h-72 lg:h-96 bg-white rounded-3xl"
                src="/quiz/grille.png"
                alt=""
              />
            </div>

            <p className="md:text-lg lg:text-xl font-bold">This is a question</p>
          </div>

          <div className="flex flex-col gap-5 justify-around items-start">
            {/*Progress bar*/}
            {/*
            <div className="flex justify-between bg-[#C7DBFE] rounded-md md:w-80 lg:w-96 md:h-9 lg:h-11 p-1 px-4">
              <img
                className="w-fit cursor-pointer hover:scale-110"
                src="/quiz/left.svg"
                alt=""
              />
              <div className="flex flex-row">
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14"></div>

              </div>
              <img
                className="w-fit cursor-pointer hover:scale-110"
                src="/quiz/right.svg"
                alt=""
              />
            </div>
  */}

            <div className="flex flex-col justify-center items-start mt-10 gap-10">
              <div className="form-check flex items-center gap-5">
                <input
                  className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block md:text-xl lg:text-2xl font-bold text-gray-800"
                  htmlFor="flexRadioDefault1"
                >
                  Prop01
                </label>
              </div>
              <div className="form-check flex items-center gap-5">
                <input
                  className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label inline-block md:text-xl lg:text-2xl font-bold text-gray-800"
                  htmlFor="flexRadioDefault2"
                >
                  Prop02
                </label>
              </div>
              <div className="form-check flex items-center gap-5">
                <input
                  className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label
                  className="form-check-label inline-block md:text-xl lg:text-2xl font-bold text-gray-800"
                  htmlFor="flexRadioDefault3"
                >
                  Prop03
                </label>
              </div>
            </div>

            <div className="flex flex-col mt-5 lg:mt-10 gap-1 justify-center items-start">
              <p className="md:text-2xl lg:text-3xl font-bold">Bravo! 🎉✨</p>
              <p className="text-base font-bold text-gray-400">
                Tres bien, continuez comme ca !
              </p>
              <button className="container bg-[#4ED964] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-lg lg:text-xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md">
                Continuer
              </button>
              <button className="container bg-[#FAE0B2] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-lg lg:text-xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md">
                Voir la sollution
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizFr;
