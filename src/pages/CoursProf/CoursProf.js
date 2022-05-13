import React, { useEffect, useState } from "react";
import UserTitle from "../../Components/UserTitle";
import ChapitreProf from "./ChapitreProf";
function CoursProf({ userName, userAvatar }) {
  const [Courses, SetCourses] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCourses(data);
      });
  }, []);

  return (
    <div className="symapp-container">
      <div className="w-[80%] h-32 mb-0 lg:mb-10">
        <UserTitle
          message="Salut"
          userName="Monsieur / Madame"
          userImage="/Prof/EnseignantIcon.svg"
        />

        <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-semibold md:text-sm lg:text-xl">
          Créeons un cours idéal pour nos étudiants !
        </p>
      </div>
      <div className="shadow-lg p-3 pt-6 rounded-md h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto font-['Kodchasan'] ">
        {Courses &&
          Courses.map((course) => {
            return (
              <div key={course.id}>
                <ChapitreProf
                  nomChapitre={`Chapitre ${course.id}`}
                  titreChapitre={`${course.titre}`}
                  nomQuiz={` Quiz ${course.id}`}
                  numExp={`${course.QuizExp}`}
                  image={`${course.ImageCours}`}
                  courseId={course.id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CoursProf;
