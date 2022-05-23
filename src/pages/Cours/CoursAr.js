import React from "react";
import { useEffect, useState } from "react";
import UserTitleAr from "../../Components/UserTitleAr";
import Chapitre from "./Chapitre";
function CoursAr({userName, userAvatar, Courses}) {
 
  return (
    <div dir="rtl" className="symapp-container-Ar">
      <div className="w-[80%] h-32 mb-0 lg:mb-10">
        <UserTitleAr
          message=" اهلا"
          userName={userName}
          userImage={userAvatar}
        />
        <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-['Tajawal'] font-semibold md:text-sm lg:text-xl">
          لنتعلم شيئا اليوم !
        </p>
      </div>
      <div className="shadow-lg p-3 pt-6 rounded-md font-['Tajawal'] h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto  ">
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <Chapitre
                  position={course.position}
                  nomChapitre={` الدرس ${course.position}  `}
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

export default CoursAr;
