import React from 'react'
import { useOutletContext } from 'react-router-dom';



function Help({language}) {
    let tableOfgifs=[
    {titre:"Pour déplacer les formes :",titreAr:"لتحريك الأشكال :",gif:"./Editeur/1.gif",id:1},
    {titre:"Pour dessiner des lignes/multilignes :",titreAr:"لرسم الخطوط ",gif:"./Editeur/2.gif",id:2},
    {titre:"Pour insérer des points :",titreAr:"لرسم النقاط :",gif:"./Editeur/3.gif",id:3},
    {titre:"Pour insérer des polygones :",titreAr:"لرسم متعددي الأضلاع  :",gif:"./Editeur/4.gif",id:4},
    {titre:"Pour insérer des polygones agrandis :",titreAr:"لتكبير متعددي الأضلاع :",gif:"./Editeur/5.gif",id:5},
    {titre:"Pour colorer les formes fermées :",titreAr:"لتلوين الأشكال المغلقة  :",gif:"./Editeur/6.gif",id:6},
    {titre:"Pour dessiner des lignes/multiligne colorées :",titreAr:"لرسم خطوط ملونة :",gif:"./Editeur/7.gif",id:7},
    {titre:"Pour effacer des figures : ",titreAr:"لاٍزالة الأشكال :",gif:"./Editeur/8.gif",id:8},
    {titre:"Pour appliquer des rotations au figures :",titreAr:"لتدوير الأشكال :",gif:"./Editeur/9.gif",id:9},
    {titre:"Pour réinitialiser toute la grille:",titreAr:"لاٍعادة تهيئة محرر الرسم :",gif:"./Editeur/10.gif",id:10},
    ]
  return (
    <div className='h-full w-[80%] bg-white overflow-auto flex flex-col gap-3'>
        {tableOfgifs.map((comp,index)=>(
               <div className={`w-[500px] h-[400px] ml-24 ${language === "arabe" && 'mr-24'} my-4`}>
                  {language === "français" && <p className="font-bold text-xl">{comp.id} - {comp.titre}</p>}
                  {language === "arabe" && <p className="font-bold text-xl">{comp.id} - {comp.titreAr}</p>}
                  <img className="mt-5" src={`${comp.gif}`}/>
               </div>
                  
              
              ))}
       
    </div>
  )
}

export default Help