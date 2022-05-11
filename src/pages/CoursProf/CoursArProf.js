import React from 'react'
import UserTitleAr from '../../Components/UserTitleAr'
import Chapitre from './Chapitre'
function CoursArProf() {
  return (
    <div dir="rtl" className='md:pr-[70px] lg:pr-[90px] pt-4 flex flex-col lg:gap-10 md:gap-2 lg:rounded-l-[50px] md:rounded-l-[30px] bg-white h-screen w-screen '>
            <div className='w-[80%] h-32 mb-0 lg:mb-10'>
                <UserTitleAr userName = 'أمين' userImage='PersonPic'/>
                <p className="ml-2 lg:ml-3 lg:mt-5 md:mt-3 font-['Tajawal'] font-semibold md:text-sm lg:text-xl">لنتعلم شيئا اليوم !</p>
            </div>
            <div className='h-[325px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto '>
                <Chapitre nomChapitre = "الدرس 01" titreChapitre = "التناظر بالنسبة لنقطة"
                nomQuiz = "الاستجواب 01" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" image2="/Cours/ArChanges/flicha.svg"/>
                <Chapitre nomChapitre = "الدرس 02" titreChapitre = "التناظر بالنسبة لنقطة"
                nomQuiz = "الاستجواب 02" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" image2="/Cours/ArChanges/flicha.svg"/>
                <Chapitre nomChapitre = "الدرس 03" titreChapitre = "التناظر بالنسبة لنقطة"
                nomQuiz = "الاستجواب 03" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" image2="/Cours/ArChanges/flicha.svg"/>
                <Chapitre nomChapitre = "الدرس 04" titreChapitre = "التناظر بالنسبة لنقطة"
                nomQuiz = "الاستجواب 04" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" image2="/Cours/ArChanges/flicha.svg"/>

            </div>
    </div>
  )
}

export default CoursArProf