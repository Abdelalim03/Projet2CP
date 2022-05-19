import axios from "axios";
import { useEffect, useState } from "react";

function GetCurrentUser() {
  const [currentUser, setCurrentUser] = useState(0);
  // const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    let isSubscribed = true;
    axios
      .get("http://localhost:5000/parametres")
      .then((resp) => {
        setCurrentUser(resp.data.currentUser);
      })
      .catch((error) => {
        if (isSubscribed) {
          setCurrentUser((prevState) => ({
            ...prevState,
            error,
          }));
        }
      });
    return () => (isSubscribed = false);
  }, [currentUser]);
  return currentUser;
}

export default GetCurrentUser;
