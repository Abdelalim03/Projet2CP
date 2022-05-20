import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import GetLanguage from "../Components/GetLanguage";

function Layout() {
  
  const langue =  GetLanguage();
  const [language, setlanguage] = useState(null);
  useEffect(() => {
    setlanguage(langue);
  }, [langue])
  
  return (
    <div
      className={`flex bg-symapp-blue-light-second ${
        (language!=="français") ? "flex-row-reverse" : ""
      } `}
    >
      <SideBar Language={language==="français"} />
      <Outlet context={[language, setlanguage]}  />
    </div>
  );
}

export default Layout;
