import React from "react";
import UserTitle from "../../Components/UserTitle";
export default function ContinueAs() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
       className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
       type="button"
        onClick={() => setShowModal(true)}
      >
        Etudiant (Click me!)
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl px-10 py-1">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col items-center gap-5 justify-center p-5 rounded-t">
                <UserTitle message="Salut" userName="Amine" userImage="/avatar/Group-1.svg" />
              <div className="h-0 w-full my-2 border border-solid border-t-0 border-slate-800 opacity-25" />

                  <h3 className="text-3xl text-center font-semibold">
                    Voulez vous continuer <br></br>
                    avec ce profil?
                  </h3>
                  <p className="my-4 text-slate-500 text-center text-lg leading-relaxed">
                    Si ce profil n'est pas le votre,<br></br>
                    Créez un nouveau profil.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-10 p-6 rounded-b">
                  <button
                    className="text-red-600 hover:text-white hover:bg-red-600 active:bg-red-500 border-2 border-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Changer le profil
                  </button>
                  <button
                    className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Continuer
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
