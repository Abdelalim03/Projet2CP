import React from "react";
import {  useState } from "react";
import UserTitleAr from "../../Components/UserTitleAr";
import ChapitreProfAr from "../CoursProf/ChapitreProfAr";
import FormAr from "./FormAr";

function CoursProfAr(props) {
  const [estOuvert, SetEstOuvert] = useState(false);
  const showDiv = () => {SetEstOuvert(!estOuvert)};
  
  return (
    <div dir="rtl" className="symapp-container-Ar">
      <div
        className={`absolute left-0 top-0 h-screen w-screen z-10 bg-slate-300/30 flex flex-col justify-center items-center ${
          !estOuvert && "hidden"
        }`}
      >
        <div className="h-8 lg:h-12 w-4/5 flex flex-row justify-end bg-blue-200">
          <button
            onClick={showDiv}
            className="h-8 lg:h-12 w-8 lg:w-12 text-lg lg:text-2xl font-semibold text-center hover:bg-[#FAE0B2] bg-white/0"
          >
            x
          </button>
        </div>
        <FormAr Courses={props.Courses}
                SetCourses={props.SetCourses} />
      </div>
      <div className="w-[80%] h-32 mb-0 lg:mb-10">
        <UserTitleAr
          message=" أهلا"
          userName={props.userName}
          userImage={props.userAvatar}
        />
        <p dir="rtl" className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-['Tajawal'] font-semibold md:text-sm lg:text-xl">
        تحكم في نظام الدروس!
        </p>
        <div className="w-[89%] lg:w-[88%] h-14 flex flex-row justify-end">
          <button
            onClick={showDiv}
            className="h-8 lg:h-10 w-8 lg:w-10 rounded-md text-lg lg:text-2xl font-semibold flex justify-center items-center bg-[#FAE0B2] hover:bg-[#fde8c4]"
          >
            <img className=" h-4 w-4" src="./Cours/Icons/plus.png" />
          </button>
        </div>
      </div>
      <div className="shadow-lg p-3 pt-6 rounded-md font-['Tajawal'] h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto  ">
        {props.Courses &&
          props.Courses.map((course) => {
            return (
              <div key={course.id}>
                <ChapitreProfAr
                Courses={props.Courses}
                SetCourses={props.SetCourses}
                position = {course.position}
                  nomChapitre={ ` الدرس ${course.position}  `}
                  titreChapitre={`${course.titreAr}`}
                  nomQuiz={` استجواب ${course.position} `}
                  numExp={`${course.QuizExp}`}
                  image={`${course.ImageCours}`}
                  courseId={course.id}
                  image2="./Cours/ArChanges/flicha.svg"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CoursProfAr;
