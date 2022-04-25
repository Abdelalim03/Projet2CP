import React from 'react'
import Chapitre from './Chapitre'
import UserTitle from '../../Components/UserTitle'
function Cours2() {
  return (
    <div className='symapp-container '>

            <div className='w-[80%] h-32 mb-0 lg:mb-10'>
            <UserTitle userName = 'Amine' userImage='PersonPic'/>
                <p className='ml-2 lg:ml-3 lg:mt-5 font-semibold md:text-sm lg:text-xl'>Apprenons quelque chose de nouveau aujourd'hui !</p>
            </div>
            <div className='h-[315px] lg:h-[450px] w-[600px] lg:w-[930px] overflow-auto '>
                <Chapitre nomChapitre = "Chapitre 01" titreChapitre = "la symmetrie d’un point par rapport a un point"
                nomQuiz = "Quiz 01" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" />
                <Chapitre nomChapitre = "Chapitre 02" titreChapitre = "la symmetrie d’un point par rapport a un point"
                nomQuiz = "Quiz 02" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" />
                <Chapitre nomChapitre = "Chapitre 03" titreChapitre = "la symmetrie d’un point par rapport a un point"
                nomQuiz = "Quiz 03" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" />
                <Chapitre nomChapitre = "Chapitre 04" titreChapitre = "la symmetrie d’un point par rapport a un point"
                nomQuiz = "Quiz 04" numExp = "xx" image = "/Cours/imgCours/CoursPic.svg" />
            </div>
    </div>
  )
}

export default Cours2