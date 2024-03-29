import axios from "axios";
import React from "react";
export default function DeleteConfirModal({ CourseId, Courses, SetCourses }) {
  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/courses/${CourseId}`)
      .then((resp) => {
        SetCourses(Courses.filter((course) => course.id !== CourseId));
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <img className="w-10" src="./Prof/delete.png" alt="icon" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl px-10 py-1">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full px-20 py-10 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col items-center gap-5 justify-center rounded-t">
                  <img className="w-24" src="./Prof/Trash.svg" alt="icon" />

                  <h3 className="mt-5 text-3xl text-center font-semibold">
                    Voulez vous vraiment <br></br>
                    supprimer ce cours ?
                  </h3>
                  <p className="my-3 text-slate-500 text-center text-lg leading-relaxed">
                    Le quiz va etre supprimer <br></br>
                    eventuellemet!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-10 p-6 rounded-b">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Annuler
                  </button>
                  <button
                    className="bg-red-600 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDelete}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
