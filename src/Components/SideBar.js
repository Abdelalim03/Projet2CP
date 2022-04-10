import React from "react";

export default function SideBar() {
  return (
    <div className="  fixed h-screen w-72 bg-symapp-blue-light-second -z-10">
      <img
        className="lg:h-10 lg:w-10 md:h-7 md:w-7"
        src="/SideBar/ToggleIcon.svg"
      />
      <div className="flex flex-col lg:gap- md:gap-4 md:mt-14 lg:mt-24">
        <img
          className="lg:h-20 lg:w-[75px] md:h-16 md:w-16"
          src="/SideBar/MenuIcon.svg"
        />
        <img
          className="lg:h-[70px] lg:w-[75px] md:h-14 md:w-16"
          src="/SideBar/CoursIcon.svg"
        />
        <img
          className="lg:h-20 lg:w-20 md:h-16 md:w-16"
          src="/SideBar/ExoIcon.svg"
        />
        <img
          className="lg:h-16 lg:w-20 md:h-16 md:w-16"
          src="/SideBar/OutilLibreIcon.svg"
        />
        <img
          className=" relative md:mt-10 lg:mt-28 lg:h-20 lg:w-20 md:h-16 md:w-16"
          src="/SideBar/ParametreIcon.svg"
        />
      </div>
    </div>
  );
}
