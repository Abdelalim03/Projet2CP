import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Viewer, LocalizationMap, TextDirection } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// import SamplePdf from "./SymétrieCours.pdf";
import { Worker } from "@react-pdf-viewer/core";
import ar_AE from "@react-pdf-viewer/locales/lib/ar_AE.json";


const pdfContentType = "application/pdf";

export default function CoursContent() {
  
  const base64toBlob = (data) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
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

    return new Blob([out], { type: pdfContentType });
  };

  // const url = URL.createObjectURL(base64toBlob(base64));
  // console.log(url);

  //  const b64 = getBase64(SamplePdf);

  //  console.log(b64);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [PdfFile, setpdfFile] = useState(null);
  const [Course, SetCourse] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const { coursId } = useParams();
  const ChaptreId = "0" + coursId;

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${coursId}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch from this res !!");
        }
        console.log(res);
        return res.json();
      })
      .then((Course) => {
        SetCourse(Course);
        setisLoading(false);
        const base64 = Course.CourseBase64;
        const url = URL.createObjectURL(base64toBlob(base64));
        console.log(url);
        setpdfFile(url);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <div className=" flex flex-col lg:rounded-r-[50px] md:rounded-r-[30px] bg-white h-screen font-['Tajawal'] w-screen  ">
      <div className="bg-symapp-blue lg:h-32 md:h-20 lg:rounded-tr-[50px] md:rounded-tr-[30px] flex items-center justify-between flex-row-reverse    ">
        <div className="flex items-center flex-row-reverse lg:gap-10 md:gap-2 pr-6 ">
          <Link to="../cours">
            <div className="flex justify-center items-center lg:w-14 lg:h-14 md:h-9 md:w-9 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 rotate-180 hover:shadow-sm">
              <img className="w-fit" src="/quiz/return.svg" alt="" />
            </div>
          </Link>
          <div className="flex flex-col gap-1 items-end">
            <h1 className=" mr-3 lg:text-3xl md:text-lg text-white font-bold ">
              {`${ChaptreId}`} الدرس
            </h1>
            {isLoading && (
              <p className=" mr-3 lg:text-lg md:text-sm text-white ">
                Veuillez patientez Svp !
              </p>
            )}
            {Course && (
              <p className=" mr-3 lg:text-lg md:text-sm text-white ">
                {`${Course.titreAr}`}
              </p>
            )}
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="h-[100%] w-[100%] bg-symapp-pink-light flex items-center justify-center">
          الرجاء الانتظار من فضلكم !
        </div>
      )}

      {Course && (
        <div className="h-[78%]  w-[100%]">
          {PdfFile && (
            <>
              <Worker workerUrl={`${pdfjsWorker}`}>
                <Viewer
                  fileUrl={PdfFile}
                  localization={ar_AE}
                  plugins={[defaultLayoutPluginInstance]}
                  theme={{
                    direction: TextDirection.RightToLeft,
                  }}
                />
              </Worker>
            </>
          )}

          {!PdfFile && (
            <div className="h-[100%] w-[100%] bg-symapp-blue-light flex items-center justify-center text-2xl">
              الدرس غير متوفر حاليا, نعتذر منكم
            </div>
          )}
        </div>
      )}
    </div>
  );
}
