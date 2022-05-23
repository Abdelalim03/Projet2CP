import React, {useState} from 'react'

export default function FileInAr(props) {
    const [etatSel, setEtatSel] = useState(`لم يتم اختيار أي ${props.fileType} `);
    const [textColor, setTextColor] = useState("text-orange-400");
    const OnUploadFile = (e) => props.onUploadFunction(e);
    const handleFileInput = (e) => {
        // handle validations
        if(e.target.files.length ===0){
            setTextColor("text-orange-400");
            setEtatSel(`لم يتم اختيار أي ${props.fileType} `);
        }
        else{
            setTextColor("text-green-700");
            const file = e.target.files[0];
            setEtatSel(`${file.name}`);
        }
        OnUploadFile(e);
    };

    return (
        <div className="file-uploader flex flex-row">
            <label htmlFor={`${props.fileName}`} className='h-fit w-fit p-1 border-2 bg-white border-blue-400 text-sm lg:text-lg font-semibold rounded-md cursor-pointer'>اختر {props.fileType}</label>
            <input required type="file" onChange={handleFileInput} accept={`${props.accept}`} id={`${props.fileName}`} name={`${props.fileName}`} className='hidden'/>
            <p className={`h-fit w-fit p-[6px] ml-3 text-sm lg:text-lg font-medium ${textColor}`}>{etatSel}</p>
        </div>
    );
}