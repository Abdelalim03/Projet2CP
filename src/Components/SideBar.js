import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!isOpen);
  return (
    <div>
      <div
        className={`${
          isOpen ? "w-[150px] lg:w-64 " : "w-[66px] lg:w-24 "
        }  h-screen  bg-symapp-blue-light-second ease-out duration-700 `}
      >
        <button onClick={showSidebar}>
          <div className="absolute lg:ml-4 lg:mt-10 md:ml-2 md:mt-4">
            <>
              {isOpen ? (
                <img
                  className=" lg:h-5 lg:w-[37px] md:h-4 md:w-7 lg:mr-2"
                  src="/SideBar/Xicon.svg"
                />
              ) : (
                <img
                  className=" lg:h-[37px] lg:w-[37px] md:h-7 md:w-7 "
                  src="/SideBar/ToggleIcon.svg"
                />
              )}
            </>
          </div>
        </button>

        <div className=" flex flex-col  md:gap-4 md:mt-16 lg:mt-28  ">
          <nav>
            <ul className={`flex flex-col  gap-6  `}>
              <li>
                <Link
                  to="../home"
                  className="flex items-center hover:bg-symapp-pink  "
                >
                  <img
                    className="lg:h-20 lg:w-[75px] md:h-16 md:w-16 lg:ml-2"
                    src="/SideBar/MenuIcon.svg"
                  />
                  <>
                    {!isOpen ? (
                      <> </>
                    ) : (
                      <span
                        className=" md:text-[13px] lg:text-[18px] text-white tracking-wide lg:ml-9 md:ml-1"
                        onClick={showSidebar}
                      >
                        Menu
                      </span>
                    )}
                  </>
                </Link>
              </li>

              <li>
                <Link
                  to="../home/cours"
                  className="flex items-center hover:bg-symapp-pink  "
                >
                  <img
                    className="lg:h-20 lg:w-[65px] md:h-16 md:w-14 lg:ml-3 md:pl-3"
                    src="/SideBar/CoursIcon.svg"
                  />
                  <>
                    {!isOpen ? (
                      <> </>
                    ) : (
                      <span
                        className=" md:text-[13px] lg:text-[18px] text-white tracking-wide lg:ml-11 md:ml-3"
                        onClick={showSidebar}
                      >
                        Cours
                      </span>
                    )}
                  </>
                </Link>
              </li>

              <li>
                <Link
                  to="../home/exercices"
                  className="flex items-center hover:bg-symapp-pink    "
                >
                  <img
                    className="lg:h-20 lg:w-20 md:h-16 md:w-16 lg:ml-2"
                    src="/SideBar/ExoIcon.svg"
                  />
                  <>
                    {!isOpen ? (
                      <> </>
                    ) : (
                      <span
                        className=" md:text-[13px] lg:text-[18px] text-white tracking-wide lg:ml-8 md:ml-1"
                        onClick={showSidebar}
                      >
                        Exercices
                      </span>
                    )}
                  </>
                </Link>
              </li>
              <li>
                <Link
                  to="../home/dessiner"
                  className="flex items-center hover:bg-symapp-pink   "
                >
                  <img
                    className="lg:h-20 lg:w-20 md:h-16 md:w-16 lg:ml-2 "
                    src="/SideBar/OutilLibreIcon.svg"
                  />
                  <>
                    {!isOpen ? (
                      <> </>
                    ) : (
                      <span
                        className=" md:text-[13px] lg:text-[18px] relative mt-6 text-white tracking-wide lg:ml-8 md:ml-1 whitespace-nowrap"
                        onClick={showSidebar}
                      >
                        Mode libre
                      </span>
                    )}
                  </>
                </Link>
              </li>
              <li className="lg:mt-20">
                <Link
                  to="../home/parametres"
                  className="flex items-center hover:bg-symapp-pink   "
                >
                  <img
                    className=" lg:h-[80px] lg:w-20 md:h-16 md:w-16 lg:ml-2"
                    src="/SideBar/ParametreIcon.svg"
                  />
                  <>
                    {!isOpen ? (
                      <> </>
                    ) : (
                      <span
                        className=" md:text-[13px] lg:text-[18px] text-white tracking-wide lg:ml-8 mt-3 md:ml-1"
                        onClick={showSidebar}
                      >
                        Parametres
                      </span>
                    )}
                  </>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
