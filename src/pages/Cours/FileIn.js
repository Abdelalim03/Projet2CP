import React, {useRef, useState} from 'react'

export default function FileIn(props) {
    const [etatSel, setEtatSel] = useState(`Auc${props.genre} ${props.fileType} n'est choisi`);
    const [textColor, setTextColor] = useState("text-orange-400");

    const handleFileInput = (e) => {
        // handle validations
        if(e.target.files.length ===0){
            setTextColor("text-orange-400");
            setEtatSel(`Auc${props.genre} ${props.fileType} n'est choisi`);
        }
        else{
            setTextColor("text-green-700");
            const file = e.target.files[0];
            setEtatSel(`${file.name}`);
        }
    };
    return (
        <div className="file-uploader flex flex-row">
            <label for="inputFile" className='h-fit w-fit p-1 border-2 bg-white border-blue-400 font-semibold rounded-md'>Choisissez {`${props.genre}`} {`${props.fileType}`}</label>
            <input type="file" onChange={handleFileInput} accept={ (props.fileType == "fichier") ? `application/pdf` : `./png`} id="inputFile" name="inputFile" className='hidden'/>
            <p className={`h-fit w-fit p-[6px] ml-3 font-medium ${textColor}`}>{etatSel}</p>
        </div>
    );
}