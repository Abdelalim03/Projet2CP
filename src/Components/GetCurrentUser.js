import axios from "axios";
import { useEffect, useState } from "react";

function GetCurrentUser() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/parametres")
      .then((resp) => {
        setCurrentUser(resp.data.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);
  return currentUser;
}

export default GetCurrentUser;
