import axios from "axios";
import React, { useEffect, useState } from "react";
import GetLanguage from "../../Components/GetLanguage";

import MenuAr from "./MenuAr";
import MenuFr from "./MenuFr";
import { useParams } from "react-router-dom";

function Menu() {
  const [User, setUser] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const language = GetLanguage();
  return (
    <>
      {language === "français" && (
        <MenuFr userAvatar={User.avatar} userName={User.nom} />
      )}
      {language === "arabe" && (
        <MenuAr userAvatar={User.avatar} userName={User.nom} />
      )}
    </>
  );
}

export default Menu;
