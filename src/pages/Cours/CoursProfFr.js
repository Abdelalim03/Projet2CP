import React, { useState } from "react";
import UserTitle from "../../Components/UserTitle";
import Form from "./Form";
import ChapitreProf from "../CoursProf/ChapitreProf";

function CoursProfFr(props) {
  const [estOuvert, SetEstOuvert] = useState(false);
  const showDiv = () => {
    SetEstOuvert(!estOuvert);
  };

  return (
    <div className="symapp-container">
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
        <Form Courses={props.Courses} SetCourses={props.SetCourses} />
      </div>
      <div className="w-[80%] h-32">
        <UserTitle
          message="Salut"
          userName={props.userName}
          userImage={props.userAvatar}
        />
        <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-semibold md:text-sm lg:text-xl">
          Gérez vos cours pour vos élèves!
        </p>
        <div className="w-[87%] h-14 flex flex-row justify-end">
          <button
            onClick={showDiv}
            className="h-8 lg:h-10 w-8 lg:w-10 rounded-md text-lg lg:text-2xl font-semibold flex justify-center items-center bg-[#FAE0B2] hover:bg-[#fde8c4]"
          >
            <img className=" h-4 w-4" src="./Cours/Icons/plus.png" />
          </button>
        </div>
      </div>
      <div className="shadow-lg p-3 pt-6 rounded-md h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto ">
        {props.Courses &&
          props.Courses.map((course) => {
            return (
              <div key={course.id}>
                <ChapitreProf
                  Courses={props.Courses}
                  SetCourses={props.SetCourses}
                  position={course.position}
                  nomChapitre={`Chapitre ${course.position}`}
                  titreChapitre={`${course.titre}`}
                  nomQuiz={` Quiz ${course.position}`}
                  numExp={`${course.QuizExp}`}
                  image={`${course.ImageCours}`}
                  courseId={course.id}
                  image2="./Cours/Icons/flicha.svg"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CoursProfFr;
