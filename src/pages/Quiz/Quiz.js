import React, { useState } from 'react'
import GetLanguage from '../../Components/GetLanguage';

import QuizFr from './QuizFr';
import QuizAr from './QuizAr';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { data } from 'autoprefixer';

function Quiz() {
  const language = GetLanguage();
  let { id,coursPos } = useParams();
  const [prop1, setProp1] = useState("");
  const [prop2, setProp2] = useState("");
  const [prop3, setProp3] = useState("");
  const [prop1Ar, setProp1Ar] = useState("");
  const [prop2Ar, setProp2Ar] = useState("");
  const [prop3Ar, setProp3Ar] = useState("");
  const [propCorrecte, setPropCorrecte] = useState("")
  const [QuizImage,setQuizImage] = useState("")
  axios.get(`http://localhost:5000/courses/${id}`).then(
    (resp) =>{
      console.log(resp.data);
      return resp.data;
    }).then(
      (data) =>{
        setProp1(`${data.Prop1}`);
        setProp2(`${data.Prop2}`);
        setProp3(`${data.Prop3}`);
        setProp1Ar(`${data.Prop1Ar}`);
        setProp2Ar(`${data.Prop2Ar}`);
        setProp3Ar(`${data.Prop3Ar}`);
       
        setPropCorrecte(`${data.propCorrecte}`);
        setQuizImage(`${data.QuizImageBase64}`);
      }
    ).catch((err) => {
      console.log(err);
    });
    return (    
      <>
 { (language==="français")&& <QuizFr propoCor={propCorrecte} propo1={prop1} propo2={prop2} propo3={prop3} position={coursPos} QuizImage={QuizImage} />  }
 { (language==="arabe")&&  <QuizAr propoCor={propCorrecte} propo1={prop1Ar} propo2={prop2Ar} propo3={prop3Ar} position={coursPos} QuizImage={QuizImage} /> }
      </>
    
   )
    }
  


export default Quiz