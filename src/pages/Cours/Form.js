import axios from 'axios';
import React, { useState } from 'react'
import FileInFr from './FileInFr';


function Form({SetCourses, Courses}) {

  const [inputs, setInputs] = useState({});
  const [propCorrecte, setPropCorrecte] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleChange2 = (e) =>{setPropCorrecte(e.target.value)}

  const handleInvalide = (e) =>{
    e.target.setCustomValidity("Champs manquant");
  }

  const handleInput = (e) =>{
    e.target.setCustomValidity("");
  }

  const handleSubmit = (event) => {
    axios.post('http://localhost:5000/courses',{
      "position":parseInt(inputs.positionCours),
      "titre": inputs.titreCours,
      "titreAr": inputs.titreCoursAr,
      "QuizExp": 20,
      "QuestQuizFr": inputs.QuestQuizFr,
      "QuestQuizAr": inputs.QuestQuizAr,
      "Prop1": inputs.prop1,
      "Prop1Ar": inputs.prop1Ar,
      "Prop2": inputs.prop2,
      "Prop2Ar": inputs.prop2Ar,
      "Prop3": inputs.prop3,
      "Prop3Ar": inputs.prop3Ar,
      "propCorrecte": propCorrecte,
      "DesCours": inputs.desCours,
      "DesCoursAr": inputs.desCoursAr,
      "ImageCours": `${CoursImageEncoded}`,
      "CourseBase64":`${file}`,
      "CourseArBase64":`${fileAr}`,
      "QuizImageBase64":`${QuizImageEncoded}`
    }).then(res=>{
      SetCourses([...Courses,{
        "position":parseInt(inputs.positionCours),
        "titre": inputs.titreCours,
        "titreAr": inputs.titreCoursAr,
        "QuizExp": 20,
        "Prop1": inputs.prop1,
        "Prop1Ar": inputs.prop1Ar,
        "Prop2": inputs.prop2,
        "Prop2Ar": inputs.prop2Ar,
        "Prop3": inputs.prop3,
        "Prop3Ar": inputs.prop3Ar,
        "propCorrecte": propCorrecte,
        "DesCours": inputs.desCours,
        "DesCoursAr": inputs.desCoursAr,
        "ImageCours": `${CoursImageEncoded}`,
        "CourseBase64":`${file}`,
        "CourseArBase64":`${fileAr}`,
        "QuizImageBase64":`${QuizImageEncoded}`
      }])
    });
  }

  const [ file, setFile ] = useState(null)
  const [ fileAr, setFileAr ] = useState(null)
  const [QuizImageEncoded,setImageEncoded]=useState(null)
  const [CoursImageEncoded,setCoursImageEncoded]=useState(null)
  const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }

  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result)
        // console.log(result);
      }
    })
  }
  const onUploadFileArChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFileAr(result)
        // console.log(result);
      }
    })
  }
  const onUploadQuizImageChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setImageEncoded(result)
        console.log(result);
      }
    })
  }
  const onUploadCoursImageChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setCoursImageEncoded(result)
        console.log(result);
      }
    })
  }


  return (
        <form onSubmit={handleSubmit} className='h-3/4 w-4/5 bg-white overflow-auto'>
          <img className='fixed h-10 w-6 lg:h-14 lg:w-10 right-[132px] lg:right-[230px] top-36 lg:top-52' src='/Cours/Icons/Form.svg' alt='form' />
          <p className='ml-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              Veuillez entrer les informations nécessaires pour ajouter le cours
          </p>
          <div className='h-[100%] w-2/3 pl-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around ml-32 rounded-xl'>
            <label for="nomCours" className='block ml-5 text-sm lg:text-lg font-semibold'>Le titre du cours : </label>
            <input  
                   className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3' 
                   type="text" id="nomCours" name="titreCours" maxLength="59"
                   value={inputs.titreCours || ""}
                   onChange={handleChange}
                   placeholder="Entrez le titre du cours"
                   required
                   onInput={handleInput}
                   onInvalid={handleInvalide}
                   
            />
            <label for="nomCoursAr" className='block ml-5 text-sm lg:text-lg font-semibold'>Le titre du cours en arabe : </label>
            <input  
                   className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3' 
                   type="text" id="nomCoursAr" name="titreCoursAr" maxLength="59"
                   value={inputs.titreCoursAr || ""}
                   onChange={handleChange}
                   placeholder="Re-entrez le titre du cours"
                   required
                   onInput={handleInput}
                   onInvalid={handleInvalide}
                   
            />

            <label for="posCours" className='block ml-5 text-sm lg:text-lg font-semibold'>Le numero du cours : </label>
            <input  
                   className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3' 
                   type="text" id="posCours" name="positionCours" maxLength="59"
                   value={inputs.positionCours || ""}
                   onChange={handleChange}
                   placeholder="Entrez le numero du cours"
                   required
                   onInput={handleInput}
                   onInvalid={handleInvalide}
                   
            />
            <p className='block ml-5 text-sm lg:text-lg font-semibold'>Insérez une image descriptive du cours:</p>
            <FileInFr accept=".png" fileName="imgCours" genre="une" fileType="Image" onUploadFunction={onUploadCoursImageChange}/>
            <label for="pdfCours" className='block ml-5 text-sm lg:text-lg font-semibold'>Insérez le fichier du cours :</label>
            <FileInFr accept=".pdf" fileName="pdfCours" genre="un" fileType="fichier" onUploadFunction={onUploadFileChange} />
            <label for="pdfCoursAr" className='block ml-5 text-sm lg:text-lg font-semibold'>Insérez la version arabe  du cours :</label>
            <FileInFr accept=".pdf" fileName="pdfCours1" genre="un" fileType="fichier" onUploadFunction={onUploadFileArChange} />
          </div>
          <p className='ml-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              Veuillez entrer les informations nécessaires pour ajouter le quiz
          </p>
          
          <div className=' h-[130%] w-2/3 pl-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around ml-32 rounded-xl'>
          <label className='block ml-5 text-sm lg:text-lg font-semibold'> Veuillez Insérer les propositions du quiz </label>
            <label for="QuestQuizFr" className='block ml-5 text-sm lg:text-lg font-semibold'>La question du quiz : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.QuestQuizFr || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="QuestQuizFr" name="QuestQuizFr"
                    required
                    placeholder="Entrez la question du quiz  "
                    onInput={handleInput}
                    onInvalid={handleInvalide}
                    // pattern=""
            />
            <label for="QuestQuizAr" className='block ml-5 text-sm lg:text-lg font-semibold'>La question du quiz en arabe : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.QuestQuizAr || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="QuestQuizAr" name="QuestQuizAr"
                    required
                    placeholder="Rentrez la question du quiz ( arabe )  "
                    onInput={handleInput}
                    onInvalid={handleInvalide}
                    // pattern="\S+"
            />
            <label for="Proposition1" className='block ml-5 text-sm lg:text-lg font-semibold'>Première proposition : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop1 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition1" name="prop1"
                    required
                    placeholder="Entrez la proposition 01  "
                    onInput={handleInput}
                    onInvalid={handleInvalide}
                    // pattern="\S+"
            />
            <label for="Proposition1Ar" className='block ml-5 text-sm lg:text-lg font-semibold'>Rentrez la première proposition en arabe : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop1Ar || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition1Ar" name="prop1Ar"
                    required
                    placeholder="Rentrez la proposition 01 ( arabe ) "
                    onInput={handleInput}
                    onInvalid={handleInvalide}
                    // pattern="\S+"
            />
            <label for="Proposition2" className='block ml-5 text-sm lg:text-lg font-semibold'>Deuxième proposition : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop2 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition2" name="prop2"
                    placeholder="Entrez la proposition 02 "
                    required
                    onInput={handleInput}
                    onInvalid={handleInvalide}
                    
            />
            <label for="Proposition2Ar" className='block ml-5 text-sm lg:text-lg font-semibold'>Rentrer la euxième proposition en arabe : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop2Ar || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition2" name="prop2Ar"
                    placeholder="Rentrez la proposition 02 ( arabe )"
                    required
                    onInput={handleInput}
                    onInvalid={handleInvalide}
                    
            />
            <label for="Proposition3" className='block ml-5 text-sm lg:text-lg font-semibold'>Troisième proposition : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop3 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition3" name="prop3"
                    placeholder="Entrez la proposition 03"
                    required
                    onInput={handleInput}
                    onInvalid={handleInvalide}
            />
            <label for="Proposition3Ar" className='block ml-5 text-sm lg:text-lg font-semibold'>Rentrer la troisième proposition en arabe: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop3Ar || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition3Ar" name="prop3Ar"
                    placeholder="Rentrez la proposition 03 ( arabe ) "
                    required
                    onInput={handleInput}
                    onInvalid={handleInvalide}
            />
            <label className='block ml-5 text-sm lg:text-lg font-semibold'>Selectionner la proposition correcte: </label>
            <select onChange={handleChange2} value={propCorrecte} required className='block cursor-pointer h-fit w-fit p-1 border-2 bg-white border-blue-400 text-sm lg:text-lg font-semibold rounded-md text-center border-black/50'>
              <option value="1">La première</option>
              <option value="2">La deuxième</option>
              <option value="3">La troisième</option>
            </select>
            <p className='block ml-5 text-sm lg:text-lg font-semibold'>Insérer l'image de quiz:</p>
            <FileInFr accept=".png" fileName="imgQuiz" genre="une" fileType="Image"  onUploadFunction={onUploadQuizImageChange}  />
          </div>
          <div className='flex flex-row justify-end w-[100%] h-fit'>
            <label for="sub" className='w-fit h-10 lg:h-14 p-2 lg:p-3 mr-6 lg:mr-10 mt-2 lg:mt-4 mb-6 rounded-lg cursor-pointer bg-[#FFDFD9] hover:scale-110 hover:bg-[#FFC5C1] flex flex-row gap-3'>
              <img className='h-[80%] lg:h-[80%] w-[90%] lg:w-[70%] my-auto' src="/Cours/Icons/Submit.svg" alt="icon"/>
              <div className='text-xs lg:text-lg my-auto font-semibold text-[#202253]'>
                Terminer
              </div>
            </label>
            <input id="sub" name="sub" type="submit" className='hidden' />
          </div>
          
        </form>
        

  )
}

export default Form