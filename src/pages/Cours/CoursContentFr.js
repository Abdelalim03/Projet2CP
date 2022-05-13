import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Viewer, LocalizationMap, TextDirection } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

import SamplePdf from "./SymétrieCours.pdf";
import { Worker } from "@react-pdf-viewer/core";

import fr_FR from "@react-pdf-viewer/locales/lib/fr_FR.json";

export default function CoursContent() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [PdfFile, setpdfFile] = useState(SamplePdf);
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
        console.log(Course);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className=" flex flex-col  lg:rounded-l-[50px] md:rounded-l-[30px] bg-white h-screen w-screen pb-10  ">
      <div className="bg-symapp-blue lg:h-32 md:h-20 lg:rounded-tl-[50px] md:rounded-tl-[30px] flex items-center justify-between  ">
        <div className="flex items-center lg:gap-10 md:gap-2 pl-6">
          <Link to="../cours">
            <div className="flex justify-center items-center lg:w-14 lg:h-14 md:h-9 md:w-9 bg-[#FAE0B2] rounded-lg hover:cursor-pointer hover:scale-110 hover:shadow-sm">
              <img className="w-fit" src="/quiz/return.svg" alt="" />
            </div>
          </Link>
          <div className="flex flex-col gap-1 items-start">
            <h1 className=" ml-3 lg:text-3xl md:text-lg text-white font-bold ">
              Chapitre {`${ChaptreId}`}
            </h1>
            {Course && (
              <p className=" ml-3 lg:text-lg md:text-sm text-white ">
                {`${Course.titre}`}
              </p>
            )}
            {isLoading && (
              <p className=" ml-3 lg:text-lg md:text-sm text-white ">
                Veuillez patientez Svp !
              </p>
            )}
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="h-[100%] w-[100%] bg-slate-500 flex items-center justify-center">
          Veuillez patientez Svp !
        </div>
      )}

      {Course && (
        <div className="h-[85%]  w-[100%]">
          {PdfFile && (
            <>
              <Worker workerUrl={`${pdfjsWorker}`}>
                <Viewer
                  fileUrl={PdfFile}
                  localization={fr_FR}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}

          {!PdfFile && (
            <div className="h-[100%] w-[100%] bg-symapp-blue-light flex items-center justify-center text-2xl">
              Cours indisponible
            </div>
          )}
        </div>
      )}
    </div>
  );
}
