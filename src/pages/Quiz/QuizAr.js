import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuizAr(props) {
  const [hide, setHide] = useState(true);
  const [correcte, SetCorrect] = useState(false);
  const [evaluer, setEvaluer] = useState("");
  const [desact, SetDesact] = useState(false);

  const [check1, SetCheck1] = useState(false);
  const [check2, SetCheck2] = useState(false);
  const [check3, SetCheck3] = useState(false);

  const voirSolution = () =>{
    if(props.propoCor === "1") SetCheck1(true);
    if(props.propoCor === "2") SetCheck2(true);
    if(props.propoCor === "3") SetCheck3(true);
  }

  const handleSubmit = (e) =>{
    SetDesact(true);
    if(e.target.value === props.propoCor) {
        SetCorrect(true);
        setHide(false);
        setEvaluer("Bravo 🎉✨");
    }
    else{
      SetCorrect(false);
      setHide(false);
      setEvaluer("Faux :(");
    }
  }
  return (
    <div className="flex flex-col lg:gap-10 md:gap-2 lg:rounded-r-[50px] md:rounded-r-[30px] bg-white h-screen  font-['Tajawal'] w-screen">
      <div className=" flex flex-col justify-start gap-5">
        <div dir='rtl' className="bg-symapp-blue lg:h-40 md:h-20 lg:rounded-tr-[50px] md:rounded-tr-[30px] flex justify-between pl-4 pr-4">
          <div dir='rtl' className="flex items-center gap-10">
            <Link to="../cours">
              <div className="flex justify-center items-center md:w-10 lg:w-14 md:h-10 lg:h-14 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 hover:shadow-sm">
                <img className="scale-x-flip w-fit" src="/quiz/return.svg" alt="" />
              </div>
            </Link>
            <div dir='rtl' className="flex flex-col gap-1 items-start">
              <h1 className="text-white font-bold md:text-2xl lg:text-3xl">السؤال 1</h1>
              <p className="text-white text-base w-40 font-bold">وصف السؤال</p>
            </div>
          </div>
          <img
            className="md:w-10 lg:w-12 scale-x-flip hover:scale-x-flip hover:cursor-pointer hover:scale-110 hover:shadow-sm"
            src="/quiz/reload.svg"
            alt=""
          />
        </div>

        <div className="flex flex-row gap-20 lg:gap-28 justify-center">

        <div className="flex flex-col mt-10 gap-5 justify-around items-end">
                      {/*Progress bar*/}
{/*
            <div className="flex justify-between bg-[#C7DBFE] rounded-md md:w-80 lg:w-96 md:h-9 lg:h-11 p-1 px-4">
              <img
                className="w-fit cursor-pointer hover:scale-110"
                src="/quiz/left.svg"
                alt=""
              />
              <div className="flex flex-row ">
              <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 lg:w-14">
                </div>
              </div>
              <img
                className="w-fit cursor-pointer hover:scale-110"
                src="/quiz/right.svg"
                alt=""
              />
            </div>
  */}

            <div className="flex flex-col justify-center items-center gap-10">

                <div className="form-check flex flex-row-reverse items-center gap-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="1"
                    onChange={handleSubmit}
                    disabled={desact}
                  />
                  <label
                    className={`form-check-label ${check1 && "text-green-400"} md:text-xl lg:text-2xl text-right font-bold text-gray-800`}
                    htmlFor="flexRadioDefault1"
                  >
                    {props.propo1}
                  </label>
                </div>
                <div className="form-check flex flex-row-reverse items-center gap-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="2"
                    onChange={handleSubmit}
                    disabled={desact}
                  />
                  <label
                    className={`form-check-label ${check2 && "text-green-400"} inline-block md:text-xl lg:text-2xl font-bold text-gray-800`}
                    htmlFor="flexRadioDefault2"
                  >
                    {props.propo2}
                  </label>
                </div>
                <div className="form-check flex flex-row-reverse items-center gap-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    value="3"
                    onChange={handleSubmit}
                    disabled={desact}
                  />
                  <label
                    className={`form-check-label ${check3 && "text-green-400"} inline-block md:text-xl lg:text-2xl font-bold text-gray-800`}
                    htmlFor="flexRadioDefault3"
                  >
                    {props.propo3}
                  </label>
                </div>
            </div>




            <div className={`${hide && "hidden"} ${(!hide && "flex")} mt-5 lg:mt-10 flex gap-1 flex-col justify-center items-end`}>
              <p className="md:text-2xl lg:text-3xl font-bold">{evaluer}</p>
              <div className="flex flex-col justify-center items-end">
              <Link to="../cours">
                  <button className="container bg-[#4ED964] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-xl lg:text-2xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md">
                    المواصلة
                  </button>
              </Link>
              <button onClick={voirSolution} className={`container ${correcte && "hidden"} bg-[#FAE0B2] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-xl lg:text-2xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md`}>
                الحـل
              </button>
              </div>

            </div>
          </div>
          <div className=" p-5 flex flex-col gap-5 bg-[#FAE0B2] rounded-3xl">
            <div className="flex justify-center">
              <img className="h-72 lg:h-96 bg-white rounded-3xl" src="/quiz/grille.png" alt="" />
            </div>

            <p dir='rtl' className="md:text-lg lg:text-xl font-bold">إختر الجواب الصحيح</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizAr;
