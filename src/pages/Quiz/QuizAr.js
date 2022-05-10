import React from "react";
import { Link } from "react-router-dom";

function QuizAr() {
  return (
    <div className="flex flex-col lg:gap-10 md:gap-2 lg:rounded-l-[50px] md:rounded-l-[30px] bg-white h-screen  font-['Tajawal'] w-screen">
      <div className=" flex flex-col justify-start gap-5">
        <div dir='rtl' className="bg-symapp-blue lg:h-40 md:h-20 lg:rounded-tl-[50px] md:rounded-tl-[30px] flex justify-between pl-4 pr-4">
          <div dir='rtl' className="flex items-center gap-10">
            <Link to="../cours">
              <div className="flex justify-center items-center w-14 h-14 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 hover:shadow-sm">
                <img className="scale-x-flip w-fit" src="/quiz/return.svg" alt="" />
              </div>
            </Link>
            <div dir='rtl' className="flex flex-col gap-1 items-start">
              <h1 className="text-white font-bold text-3xl">السؤال 1</h1>
              <p className="text-white text-base w-40 font-bold">وصف السؤال</p>
            </div>
          </div>
          <img
            className="w-12 scale-x-flip hover:scale-x-flip hover:cursor-pointer hover:scale-110 hover:shadow-sm"
            src="/quiz/reload.svg"
            alt=""
          />
        </div>

        <div className="flex flex-row gap-10 justify-center">



          <div className="flex flex-col justify-around items-center">
            <div className="flex justify-between bg-[#C7DBFE] rounded-md w-96 h-12 p-1 px-4">
              <img
                className="w-fit cursor-pointer hover:scale-110"
                src="/quiz/left.svg"
                alt=""
              />
              <div className="flex flex-row ">
                <div className="flex justify-center items-center w-10 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 border-r-2 border-[#283D93]"></div>
                <div className="flex justify-center items-center w-10 border-r-2 border-[#283D93]"></div>
              </div>
              <img
                className="w-fit cursor-pointer hover:scale-110"
                src="/quiz/right.svg"
                alt=""
              />
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-end gap-5">

                <div className="form-check flex flex-row-reverse items-center gap-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label text-3xl text-right font-bold text-gray-800"
                    htmlFor="flexRadioDefault1"
                  >
                    الخيار 1
                  </label>
                </div>
                <div className="form-check flex flex-row-reverse items-center gap-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label inline-block text-3xl font-bold text-gray-800"
                    htmlFor="flexRadioDefault2"
                  >
                    الخيار 2
                  </label>
                </div>
                <div className="form-check flex flex-row-reverse items-center gap-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label
                    className="form-check-label inline-block text-3xl font-bold text-gray-800"
                    htmlFor="flexRadioDefault3"
                  >
                    الخيار 3
                  </label>
                </div>

              </div>
            </div>




            <div className="flex flex-col justify-center items-end">
              <p className="text-4xl font-bold">🎉✨ ! ممتـاز</p>
              <p className="text-base font-bold text-gray-400">
                ! جيد، واصل على هذا المنوال
              </p>
              <div className="flex flex-col justify-center items-center">

              <button className="container bg-[#4ED964] rounded-2xl px-7 py-3 h-fit w-fit mt-4 text-3xl font-bold text-black text-center shadow-sm hover:scale-110 hover:shadow-md">
                المواصلة
              </button>
              <button className="container bg-[#FAE0B2] rounded-2xl px-7 py-3 h-fit w-fit mt-4 text-xl font-bold text-black text-center shadow-sm hover:scale-110 hover:shadow-md">
                الحـل
              </button>
              </div>

            </div>
          </div>
          <div className="p-5 flex flex-col gap-5 justify-around bg-[#FAE0B2] rounded-3xl">
            <div className="flex justify-center">
              <img className="h-60 lg:h-96 bg-white rounded-3xl" src="/quiz/grille.png" alt="" />
            </div>

            <p dir='rtl' className="text-3xl font-bold">هذا سؤال</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuizAr;
