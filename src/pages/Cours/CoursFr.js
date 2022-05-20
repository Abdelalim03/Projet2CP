import React, { useEffect, useState } from "react";
import Chapitre from "./Chapitre";
import UserTitle from "../../Components/UserTitle";
function CoursFr({ userName, userAvatar }) {
  const [Courses, SetCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses?_sort=position")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCourses(data);
        
      });
  }, [Courses]);
  return (
    <div className="symapp-container">
      <div className="w-[80%] h-32 mb-0 lg:mb-10">
        <UserTitle message="Salut" userName={userName} userImage={userAvatar} />

        <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-semibold md:text-sm lg:text-xl">
          Apprenons quelque chose de nouveau aujourd'hui !
        </p>
      </div>
      <div className="shadow-lg p-3 pt-6 rounded-md h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto font-['Kodchasan'] ">
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <Chapitre
                  position ={course.position}
                  nomChapitre={`Chapitre ${course.position}`}
                  titreChapitre={`${course.titre}`}
                  nomQuiz={` Quiz ${course.position}`}
                  numExp={`${course.QuizExp}`}
                  image={`${course.ImageCours}`}
                  courseId={course.id}
                  image2="/Cours/Icons/flicha.svg"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CoursFr;
