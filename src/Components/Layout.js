import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import GetLanguage from "../Components/GetLanguage";

function Layout() {
  
  const language = GetLanguage();
  const Languefr = language === "français";
  return (
    <div
      className={`flex bg-symapp-blue-light-second ${
        !Languefr ? "flex-row-reverse" : ""
      } `}
    >
      <SideBar Language={Languefr} />
      <Outlet />
    </div>
  );
}

export default Layout;
