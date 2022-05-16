// function getBase64(file) {
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       console.log(reader.result);
//       return reader.result;
//     };
//     reader.onerror = function (error) {
//       console.log('Error: ', error);
//     };
//  } 


// function base64toBlob (data) {
//   // Cut the prefix `data:application/pdf;base64` from the raw base 64
 
//   const base64WithoutPrefix = data.substr(
//     `data:${pdfContentType};base64,`.length
//   );

//   const bytes = window.atob(base64WithoutPrefix);
//   // const bytes = Buffer.from(base64WithoutPrefix, "str");
//   // const bytes = new Buffer(str, 'base64').toString('binary')
//   let length = bytes.length;
//   let out = new Uint8Array(length);

//   while (length--) {
//     out[length] = bytes.charCodeAt(length);
//   }
//   console.log( new Blob([out], { type: pdfContentType }));
//   return new Blob([out], { type: pdfContentType });
// };

import { useEffect, useState } from 'react'
const pdfContentType = "application/pdf";

function GetBase64toBlob(data) {
    const [blob, setBlob] = useState(null);
    useEffect(() => {
    
  const base64WithoutPrefix = data.substr(
    `data:${pdfContentType};base64,`.length
  );

  const bytes = window.atob(base64WithoutPrefix);
  // const bytes = Buffer.from(base64WithoutPrefix, "str");
  // const bytes = new Buffer(str, 'base64').toString('binary')
  let length = bytes.length;
  let out = new Uint8Array(length);

  while (length--) {
    out[length] = bytes.charCodeAt(length);
   } 
   setBlob(new Blob([out], { type: pdfContentType })) ;}, [])
   return blob;
}
export default GetBase64toBlob;


