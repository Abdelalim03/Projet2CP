import React, { useEffect, useState } from "react";
import Chapitre from "./Chapitre";
import UserTitle from "../../Components/UserTitle";
function Cours2() {
  const [Courses, SetCourses] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCourses(data);
      });
  }, []);

  return (
    <div className="symapp-container ">
      <div className="w-[80%] h-32 mb-0 lg:mb-10">
        <UserTitle message="Salut" userName="Amine" userImage="PersonPic" />
        <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-semibold md:text-sm lg:text-xl">
          Apprenons quelque chose de nouveau aujourd'hui !
        </p>
      </div>
      <div className="h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto ">
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <Chapitre
                  nomChapitre={`Chapitre ${course.id}`}
                  titreChapitre={`${course.titre}`}
                  nomQuiz={` Quiz ${course.id}`}
                  numExp={`${course.QuizExp}`}
                  image={`${course.ImageCours}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cours2;
