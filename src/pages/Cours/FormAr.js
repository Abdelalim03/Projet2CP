import axios from 'axios';
import React, { useState } from 'react'
import FileInAr from './FileInAr';
import FileIn from './FileInFr';


function FormAr(props) {

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
          <img className='fixed h-10 w-6 lg:h-14 lg:w-10 left-[132px] lg:left-[230px] top-36 lg:top-52' src='/Cours/Icons/FormInv.svg' alt='form' />
          <p className='mr-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
              يرجى إدخال المعلومات اللازمة لإضافة الدرس
          </p>
          <div className='h-[50%] lg:h-[55%] w-2/3 pr-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around mr-32 rounded-xl'>
            <label for="nomCours" className='block mr-5 text-sm lg:text-lg font-semibold'>عنوان الدرس :</label>
            <input  
                   className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pr-3' 
                   type="text" id="nomCours" name="titreCours" maxLength="59"
                   value={inputs.titreCours || ""}
                   onChange={handleChange}
                   placeholder="أدخل عنوان الدرس"
                   required
            />
            <p className='block mr-5 text-sm lg:text-lg font-semibold'>صورة مرتبطة بالدرس :</p>
            <FileInAr accept=".png" fileName="imgCours" fileType="صورة"/>
            <p for="pdfCours" className='block mr-5 text-sm lg:text-lg font-semibold'>أدخل ملف الدرس :</p>
            <FileInAr accept=".pdf" fileName="pdfCours" fileType="ملف" onUploadFunction={onUploadFileChange}/>
            

          </div>
          <p className='mr-20 mb-5 mt-3 text-base lg:text-xl font-semibold text-[#283D93]'>
            يرجى إدخال المعلومات اللازمة لإضافة الإستجواب
          </p>
          <div className=' h-3/4 lg:h-2/3 w-2/3 pr-4 mb-8 flex flex-col bg-[#90E0EF]/40 justify-around mr-32 rounded-xl'>
            <label for="Proposition1" className='block mr-5 text-sm lg:text-lg font-semibold'>الإقتراح الأول : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop1 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pr-3'
                    type="text" id="proposition1" name="prop1"
                    required
                    placeholder="أدخل الإقتراح : "
            />
            <label for="Proposition2" className='block mr-5 text-sm lg:text-lg font-semibold'>الإقتراح الثاني : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop2 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pr-3'
                    type="text" id="proposition2" name="prop2"
                    placeholder="أدخل الإقتراح : "
                    required
            />
            <label for="Proposition3" className='block mr-5 text-sm lg:text-lg font-semibold'>الإقتراح الثالث : </label>
            <input 
                    onChange={handleChange}
                    value={inputs.prop3 || ""}
                    className='block border-2 rounded-[5px] text-sm lg:text-lg w-[300px] lg:w-[600px] pr-3'
                    type="text" id="proposition3" name="prop3"
                    placeholder="أدخل الإقتراح : "
                    required
            />
            <label className='block mr-5 text-sm lg:text-lg font-semibold'>عين الإجابة الصحيحة : </label>
            <select required className='block cursor-pointer h-fit w-fit p-1 border-2 bg-white border-blue-400 text-sm lg:text-lg font-semibold rounded-md text-center border-black/50'>
              <option value="1">الأولى</option>
              <option value="2">الثانية</option>
              <option value="3">الثالثة</option>
            </select>
            <p className='block ml-5 text-sm lg:text-lg font-semibold'>أدخل صورة الاستجواب :</p>
            <FileInAr accept=".png" fileName="imgQuiz" fileType="صورة"/>
          </div>
          <div className='flex flex-row justify-end w-[100%] h-fit'>
            <label for="sub" className='w-fit h-10 lg:h-14 p-2 lg:p-3 ml-6 lg:ml-10 mt-2 lg:mt-4 mb-6 rounded-lg cursor-pointer bg-[#FFDFD9] hover:scale-110 hover:bg-[#FFC5C1] flex flex-row-reverse gap-3'>
              <img className='h-[80%] lg:h-[80%] w-[90%] lg:w-[70%] my-auto' src="/Cours/Icons/Submit.svg" alt="icon"/>
              <div className='text-xs lg:text-lg my-auto font-semibold text-[#202253]'>
                إدخال
              </div>
            </label>
            <input id="sub" name="sub" type="submit" className='hidden' />
          </div>
          
        </form>
        

  )
}

export default FormAr