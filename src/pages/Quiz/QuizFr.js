import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function QuizFr(props) {
  const [hide, setHide] = useState(true);
  const [correcte, SetCorrect] = useState(false);
  const [evaluer, setEvaluer] = useState("");
  const [desact, SetDesact] = useState(false);

  const [check1, SetCheck1] = useState(false);
  const [check2, SetCheck2] = useState(false);
  const [check3, SetCheck3] = useState(false);

  const voirSolution = () => {
    if (props.propoCor === "1") SetCheck1(true);
    if (props.propoCor === "2") SetCheck2(true);
    if (props.propoCor === "3") SetCheck3(true);
  };

  const handleSubmit = (e) => {
    SetDesact(true);
    if (e.target.value === props.propoCor) {
      SetCorrect(true);
      setHide(false);
      setEvaluer("Bravo 🎉✨");
    } else {
      SetCorrect(false);
      setHide(false);
      setEvaluer("Faux 🤯");
    }
  };

  const handleReset = () => {
    SetCheck1(false);
    SetCheck2(false);
    SetCheck3(false);
    setEvaluer("");
    SetDesact(false);
    setHide(true);
    SetCorrect(false);
    console.log("Reset triggered");
  };
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
              <h1 className="text-white font-bold md:text-2xl lg:text-3xl">
                Quiz {props.position}
              </h1>
            </div>
          </div>
          <button onClick={handleReset}>
            <img
              className="md:w-10 lg:w-12 hover:cursor-pointer hover:scale-110 hover:shadow-sm"
              src="/quiz/reload.svg"
              alt=""
            />
          </button>
        </div>

        <div className="flex flex-row md:gap-20 lg:gap-28 justify-center">
          <div className=" p-5 flex flex-col gap-5 bg-[#FAE0B2] rounded-3xl">
            <div className="flex justify-center">
              <img
                className="h-72 lg:h-96 bg-white rounded-3xl"
                src={props.QuizImage}
                alt=""
              />
            </div>

            <p className="md:text-lg lg:text-xl font-bold">
              cocher la proposition correcte :
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-around items-start">
            <div className="flex flex-col justify-center items-start mt-10 gap-10">
              <div className="form-check flex items-center gap-5">
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
                  className={`form-check-label ${
                    check1 && "text-green-400"
                  } inline-block md:text-xl lg:text-2xl font-bold ${
                    !check1 && "text-gray-800"
                  }`}
                  htmlFor="flexRadioDefault1"
                >
                  {props.propo1}
                </label>
              </div>
              <div className="form-check flex items-center gap-5">
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
                  className={`form-check-label ${
                    check2 && "text-green-400"
                  } inline-block md:text-xl lg:text-2xl font-bold ${
                    !check2 && "text-gray-800"
                  }`}
                  htmlFor="flexRadioDefault2"
                >
                  {props.propo2}
                </label>
              </div>
              <div className="form-check flex items-center gap-5">
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
                  className={`form-check-label ${
                    check3 && "text-green-400"
                  } inline-block md:text-xl lg:text-2xl font-bold ${
                    !check3 && "text-gray-800"
                  }`}
                  htmlFor="flexRadioDefault3"
                >
                  {props.propo3}
                </label>
              </div>
            </div>

            <div
              className={`${hide && "hidden"} ${
                !hide && "flex"
              } flex-col mt-5 lg:mt-10 gap-1 justify-center items-start`}
            >
              <p className="md:text-2xl lg:text-3xl font-bold">{evaluer}</p>
              <Link to="../cours">
                <button className="container bg-[#4ED964] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-lg lg:text-xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md">
                  Continuer
                </button>
              </Link>
              <button
                onClick={voirSolution}
                className={`container ${
                  correcte && "hidden"
                } bg-[#FAE0B2] rounded-2xl px-7 py-3 h-fit w-fit mt-4 md:text-lg lg:text-xl font-bold text-black text-center shadow-sm hover:scale-105 hover:shadow-md`}
              >
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
