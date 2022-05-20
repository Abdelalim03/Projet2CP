import React, { useState } from 'react'
import GetLanguage from '../../Components/GetLanguage';

import QuizFr from './QuizFr';
import QuizAr from './QuizAr';
import { useOutletContext, useParams } from 'react-router-dom';
import axios from 'axios';
import { data } from 'autoprefixer';

function Quiz() {
  const [language, setlanguage] = useOutletContext();
  let { id,coursPos } = useParams();
  const [prop1, setProp1] = useState("");
  const [prop2, setProp2] = useState("");
  const [prop3, setProp3] = useState("");
  const [propCorrecte, setPropCorrecte] = useState("")

  axios.get(`http://localhost:5000/courses/${id}`).then(
    (resp) =>{
      console.log(resp.data);
      return resp.data;
    }).then(
      (data) =>{
        setProp1(`${data.Prop1}`);
        setProp2(`${data.Prop2}`);
        setProp3(`${data.Prop3}`);
        setPropCorrecte(`${data.propCorrecte}`);
      }
    ).catch((err) => {
      console.log(err);
    });
    return (    
      <>
 { (language==="français")&& <QuizFr propoCor={propCorrecte} propo1={prop1} propo2={prop2} propo3={prop3} position={coursPos} />  }
 { (language==="arabe")&&  <QuizAr propoCor={propCorrecte} propo1={prop1} propo2={prop2} propo3={prop3} position={coursPos}/> }
      </>
    
   )
    }
  


export default Quiz