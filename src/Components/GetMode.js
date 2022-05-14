import axios from "axios";
import { useEffect, useState } from "react";

function GetMode() {
  const [mode, setMode] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/parametres")
      .then((resp) => {
        setMode(resp.data.mode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return mode;
}

export default GetMode;
