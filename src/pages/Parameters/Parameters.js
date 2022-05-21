import React from 'react'
import { useOutletContext } from 'react-router-dom';
import ParametersAr from './ParametersAr';
import ParametersFr from './ParametersFr';

function Parameters() {

  const [language, setlanguage] = useOutletContext();
    return (    
      <>
        { (language==="français")&& <ParametersFr />  }
        { (language==="arabe")&&  <ParametersAr /> }
      </>
            
   )
}

export default Parameters