import axios from 'axios';
import React, { useState } from 'react'
import FileIn from './FileIn';

function Form(props) {
  
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
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
      "propCorrecte": "",
      "ImageQuiz": "",
      "DesCours": "",
      "CheminCours": ""});
  }

  return (
        <div className='h-3/4 w-4/5 bg-white overflow-auto'>
          <p className='ml-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              Veuillez entrer les information nécessaires pour ajouter le cours
          </p>
          <div className='h-[55%] w-2/3 pl-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around ml-32 rounded-xl'>
            <label for="nomCours" className='block ml-5 font-semibold'>Le titre de cours : </label>
            <input  
                   className='block border-2 rounded-[5px] w-[600px] pl-3' 
                   type="text" id="nomCours" name="titreCours"
                   value={inputs.titreCours || ""}
                   onChange={handleChange}
                   placeholder="Entrer le titre de cours:"
            />
            <label for="pdf" className='block ml-5 font-semibold'>Insérer une image descriptive du cours:</label>
            <FileIn genre="une" fileType="Image"/>
            <label for="pdf" className='block ml-5 font-semibold'>Insérer le fichier du cours :</label>
            <FileIn genre="un" fileType="fichier"/>
          </div>
          <p className='ml-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              Veuillez entrer les information nécessaires pour ajouter le quiz
          </p>
          <div className='h-2/3 w-2/3 pl-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around ml-32 rounded-xl'>
            <label for="Proposition1" className='block ml-5 font-semibold'>Première proposition: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop1 || ""}
                    className='block border-2 rounded-[5px] w-[600px] pl-3'
                    type="text" id="proposition1" name="prop1"
                    placeholder="entrer la proposition: "
            />
            <label for="Proposition2" className='block ml-5 font-semibold'>Deuxième proposition: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop2 || ""}
                    className='block border-2 rounded-[5px] w-[600px] pl-3'
                    type="text" id="proposition2" name="prop2"
                    placeholder="entrer la proposition: "
            />
            <label for="Proposition3" className='block ml-5 font-semibold'>Troisième proposition: </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop3 || ""}
                    className='block border-2 rounded-[5px] w-[600px] pl-3'
                    type="text" id="proposition3" name="prop3"
                    placeholder="entrer la proposition: "
            />
            <label for="select" className='block ml-5 font-semibold'>Selectionner la proposition correcte: </label>
            <select className='block h-fit w-fit p-1 border-2 bg-white border-blue-400 font-semibold rounded-md text-center border-black/50'>
              <option value="1">La première</option>
              <option value="2">La deuxième</option>
              <option value="3">La troisième</option>
            </select>
            <label for="pdf" className='block ml-5 font-semibold'>Insérer l'image de quiz:</label>
            <FileIn genre="une" fileType="Image"/>
          </div>
          <div onClick={handleSubmit} className='flex flex-row justify-end w-[100%] h-fit'>
            <div className='w-fit h-14 p-3 mr-10 mt-4 mb-6 rounded-lg cursor-pointer bg-[#FFDFD9] hover:scale-110 hover:bg-[#FFC5C1] flex flex-row gap-3'>
              <img className='my-auto' src="/Cours/Icons/Submit.svg" alt="icon"/>
              <div className='my-auto font-semibold text-[#202253]'>
                Terminer
              </div>
            </div>
          </div>
        </div>
        

  )
}

export default Form