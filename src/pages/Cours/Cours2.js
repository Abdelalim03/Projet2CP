import React from 'react'
import SideBar from '../../Components/SideBar'
import Chapitre from './Chapitre'

function Cours2() {
  return (
    <div className='relative h-screen w-screen bg-[#98BCFF] flex flex-row-reverse selection:bg-fuchsia-300 overflow-y-auto '>
        <SideBar/>
        <div className='bg-white rounded-l-2xl lg:rounded-l-3xl py-5 lg:py-6 px-16 lg:px-36 w-[92%] '>
            <div className='w-[80%] h-32 mb-0 lg:mb-10'>
                <div className='flex'>
                    <div className='select-none h-16 lg:h-20 w-16 lg:w-20  p-2 rounded-[50%] border-2 border-[#C7DBFE] bg-white'>
                        <div className='h-[100%] w-[100%] rounded-[50%] overflow-hidden bg-[#C7DBFE]'>
                            <img className='h-[80%] w-[100%] mt-[20%] ' src='/avatar/Group-1.svg' alt='avatrar'/>
                        </div>
                    </div>
                    <p className='h-16 lg:h-20 w-28 lg:w-36 ml-3 py-4 lg:py-6 font-semibold text-lg lg:text-2xl'>Salut Wail !</p>
                </div>
                <p className='ml-2 lg:ml-3 font-semibold text-sm lg:text-base'>Apprenons quelque chose de nouveau aujourd'hui !</p>
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
    </div>
  )
}

export default Cours2