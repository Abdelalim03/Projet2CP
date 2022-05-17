import axios from 'axios';
import React, { useState } from 'react'
import FileInFr from './FileInFr';


function Form(props) {

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

  const handleSubmit = (event) => {
    axios.post('http://localhost:5000/courses',{
      "titre": inputs.titreCours,
      "titreAr": "التناظر بالنسبة لنقطة",
      "ImageCours": "/Cours/imgCours/CoursPic.svg",
      "Quiz": "Quiz 01",
      "QuizAr": "استجواب 01",
      "QuizExp": 20,
      "Prop1": inputs.prop1,
      "Prop2": inputs.prop2,
      "Prop3": inputs.prop3,
      "propCorrecte": propCorrecte,
      "ImageQuiz": "",
      "DesCours": "",
      "CheminCours": "",
      "CourseBase64":`${file}`
    });
  }

  const [ file, setFile ] = useState(null)
  const [ fileName, setFileName ] = useState(null)

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
        setFileName(target.files[0])
      }
    })
  }

  return (
        <form onSubmit={handleSubmit} className='h-3/4 w-4/5 bg-white overflow-auto'>
          <img className='fixed h-10 w-6 lg:h-14 lg:w-10 right-[132px] lg:right-[230px] top-36 lg:top-52' src='/Cours/Icons/Form.svg' alt='form' />
          <p className='ml-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              Veuillez entrer les information nécessaires pour ajouter le cours
          </p>
          <div className='h-[50%] lg:h-[55%] w-2/3 pl-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around ml-32 rounded-xl'>
            <label for="nomCours" className='block ml-5 text-sm lg:text-lg font-semibold'>Le titre de cours : </label>
            <input  
                   className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3' 
                   type="text" id="nomCours" name="titreCours" maxLength="59"
                   value={inputs.titreCours || ""}
                   onChange={handleChange}
                   placeholder="Entrer le titre de cours:"
                   required
                   onInvalid={handleInvalide}
            />

            <p className='block ml-5 text-sm lg:text-lg font-semibold'>Insérer une image descriptive du cours:</p>
            <FileInFr accept=".png" fileName="imgCours" genre="une" fileType="Image"/>
            <p for="pdfCours" className='block ml-5 text-sm lg:text-lg font-semibold'>Insérer le fichier du cours :</p>
            <FileInFr accept=".pdf" fileName="pdfCours" genre="un" fileType="fichier" onUploadFunction={onUploadFileChange} />

            {/* <div>
            <label for="pdf" className='block ml-5 font-semibold'>Insérer une image descriptive du cours:</label>
            <FileIn genre="une" fileType="image"/>
            </div> */}
            {/* <div>
            
            <FileIn genre="un" fileType="fichier" />
            </div> */}
            {/* <label for="pdf" className='block ml-5 font-semibold'>Insérer le fichier du cours :</label>
              <input type="file" name="filetobase64" onChange={onUploadFileChange} accept="application/pdf" /> */}

          </div>
          <p className='ml-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              Veuillez entrer les information nécessaires pour ajouter le quiz
          </p>
          <div className=' h-3/4 lg:h-2/3 w-2/3 pl-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around ml-32 rounded-xl'>
            <label for="Proposition1" className='block ml-5 text-sm lg:text-lg font-semibold'>Première proposition: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop1 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition1" name="prop1"
                    required
                    placeholder="entrer la proposition: "
                    onInvalid={handleInvalide}
            />
            <label for="Proposition2" className='block ml-5 text-sm lg:text-lg font-semibold'>Deuxième proposition: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop2 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition2" name="prop2"
                    placeholder="entrer la proposition: "
                    required
                    onInvalid={handleInvalide}
            />
            <label for="Proposition3" className='block ml-5 text-sm lg:text-lg font-semibold'>Troisième proposition: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop3 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pl-3'
                    type="text" id="proposition3" name="prop3"
                    placeholder="entrer la proposition: "
                    required
                    onInvalid={handleInvalide}
            />
            <label className='block ml-5 text-sm lg:text-lg font-semibold'>Selectionner la proposition correcte: </label>
            <select onChange={handleChange2} value={propCorrecte} required className='block cursor-pointer h-fit w-fit p-1 border-2 bg-white border-blue-400 text-sm lg:text-lg font-semibold rounded-md text-center border-black/50'>
              <option value="1">La première</option>
              <option value="2">La deuxième</option>
              <option value="3">La troisième</option>
            </select>
            <p className='block ml-5 text-sm lg:text-lg font-semibold'>Insérer l'image de quiz:</p>
            <FileInFr accept=".png" fileName="imgQuiz" genre="une" fileType="Image"/>
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