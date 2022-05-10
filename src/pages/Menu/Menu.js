import React from 'react'
import GetLanguage from '../../Components/GetLanguage';


import MenuAr from './MenuAr';
import MenuFr from './MenuFr';

function Menu() {
  const language = GetLanguage();
    return (    
      <>
 { (language==="français")&& <MenuFr />  }
 { (language==="arabe")&&  <MenuAr /> }
      </>
    
   )
    }
  


export default Menu