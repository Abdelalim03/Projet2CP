import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuAr from "./MenuAr";
import MenuFr from "./MenuFr";
import { useOutletContext, useParams } from "react-router-dom";

function Menu() {
  const [User, setUser] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [language, setlanguage] = useOutletContext();
  return (
    <>
      {language === "français" && (
        <MenuFr userAvatar={User.avatar} userName={User.nom} Max={User.maxExo} score={User.score} />
      )}
      {language === "arabe" && (
        <MenuAr userAvatar={User.avatar} userName={User.nom} Max={User.maxExo} score={User.score} />
      )}
    </>
  );
}

export default Menu;
