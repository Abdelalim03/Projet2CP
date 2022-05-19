import React from "react";
import { Link } from "react-router-dom";
import UserTitleAr from "../../Components/UserTitleAr";
export default function ContinueAsAr({ Modal, nom, avatar, currentuserId }) {
  return (
    <>
      {Modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl px-10 py-1">
              <div className="rounded-lg px-10 py-5 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col items-center gap-5 justify-center p-5 rounded-t">
                  <div dir="rtl">
                    <UserTitleAr
                      message="أهلا"
                      userName={nom}
                      userImage={avatar}
                    />
                  </div>
                  <div className="h-0 w-full my-2 border border-solid border-t-0 border-slate-800 opacity-25" />

                  <h3 dir="rtl" className="text-3xl text-center font-semibold">
                    هل تريد المواصلة بهذا الحساب؟
                  </h3>
                  <p
                    dir="rtl"
                    className="my-4 text-slate-500 text-center text-lg leading-relaxed"
                  >
                    إذا لم يكن هذا الحساب لك، انشئ حساب جديد.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-10 p-6 rounded-b">
                  <Link to={`/home/${currentuserId}`}>
                    <button
                      className="bg-green-600 text-white active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      المواصلة
                    </button>
                  </Link>
                  <Link to="/nom">
                    <button
                      className="text-red-600 hover:text-white hover:bg-red-600 active:bg-red-500 border-2 border-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      تغيير الحساب
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
