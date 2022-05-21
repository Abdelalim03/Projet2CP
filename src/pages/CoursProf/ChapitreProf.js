import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirModal from "./DeleteConfirModalFr";
import DropdownRender from "./DropDown";

function ChapitreProf(props) {
  return (
    <div className="w-[550px] lg:w-[840px] h-[80px] lg:h-[115px] flex flex-row justify-between mb-6 lg:mb-8">
      <div className="bg-[#FFC5C1] w-[420px] lg:w-[660px] py-4 lg:py-5 rounded-2xl lg:rounded-3xl flex flex-row">
        <div className="w-[15%] flex flex-row justify-center items-center">
          <img
            className="w-11 lg:w-16 h-11 lg:h-16 rounded-full"
            src={props.image}
            alt="img1"
          />
        </div>
        <div className="w-[70%]">
          <div>
            <h1 className="font-semibold font-['Tajawal'] text-base lg:text-2xl">
              {props.nomChapitre}
            </h1>
            <h2 className="font-normal font-['Tajawal'] text-xs lg:text-xl">
              {props.titreChapitre}
            </h2>
          </div>
        </div>
        <div className="w-[20%] mr-5 flex flex-row gap-5 justify-center items-center">
          <DeleteConfirModal CourseId={props.courseId} Courses={props.Courses} SetCourses={props.SetCourses} />
          <Link to={`../courscontent/${props.courseId}/${props.position}`}>
            <button className="bg-[#FAE0B2] flex justify-center lg:rounded-md md:rounded-sm items-center w-6 lg:w-9 h-6 lg:h-9">
              <img
                className="w-4 lg:w-7 h-4 lg:h-7 "
                src={`${props.image2}`}
                alt="icon"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-2 pt-4 lg:pt-5 w-[100px] lg:w-[140px] rounded-2xl lg:rounded-3xl bg-[#98BCFF]">
        <h1 className="font-semibold font-['Tajawal'] text-base lg:text-xl mb-3 lg:mb-6">
          {props.nomQuiz}
        </h1>
        <Link to={`../quiz/${props.courseId}/${props.position}`}>
          <button className="w-[59px] lg:w-fit font-normal text-xs lg:text-base text-center border-2 border-[#283D93] p-1 rounded-lg">
            {props.numExp} Exp
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChapitreProf;
