import axios from "axios";
import { useEffect, useState } from "react";

function GetLanguage() {
  const [langue, setLangue] = useState("");

  useEffect( async () => {
   
    await axios
      .get("http://localhost:5000/parametres")
      .then((resp) => {
        setLangue(resp.data.langue);
      }) 
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return langue;
}

export default GetLanguage;
