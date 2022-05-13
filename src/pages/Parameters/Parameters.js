import React from 'react'
import GetLanguage from '../../Components/GetLanguage';
import ParametersAr from './ParametersAr';
import ParametersFr from './ParametersFr';

function Parameters() {

    const language = GetLanguage();

    return (    
      <>
        { (language==="français")&& <ParametersFr />  }
        { (language==="arabe")&&  <ParametersAr /> }
      </>
            
   )
}

export default Parameters