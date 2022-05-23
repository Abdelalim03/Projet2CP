import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetLanguage from "../../Components/GetLanguage";
import Absolute from "./Absolute";

function Avatar() {
  let { id } = useParams();

  const paths = [
    { name: "./avatar/Group-1.svg", id: 1 },
    { name: "./avatar/Group-2.svg", id: 2 },
    { name: "./avatar/Group-3.svg", id: 3 },
    { name: "./avatar/Group-4.svg", id: 4 },
    { name: "./avatar/Group-5.svg", id: 5 },
    { name: "./avatar/Group-6.svg", id: 6 },
    { name: "./avatar/Group-7.svg", id: 7 },
    { name: "./avatar/Group-8.svg", id: 8 },
    { name: "./avatar/Group-9.svg", id: 9 },
    { name: "./avatar/Group.svg", id: 10 },
  ];

  const language = GetLanguage();
  const navigate = useNavigate();

  const [image, setImage] = useState(
    "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
  );
  const [animate, setanimate] = useState("");

  const url = "http://localhost:5000/users/" + id;
  return (
    <div className="relative h-screen w-screen selection:bg-fuchsia-300">
      <Absolute />

      <div className="h-[52%] w-[100%] flex justify-center">
        <img
          className="absolute h-4 lg:h-6 w-4 lg:w-6 left-[20%] top-[42%] select-none"
          src="/avatar/Vector.svg"
          alt="vector"
        />
        <div className="pt-10">
          {language === "français" && (
            <h1 className="text-[#194084] font-semibold text-2xl lg:text-4xl">
              Choisissez votre personnage
            </h1>
          )}
          {language === "arabe" && (
            <h1 className="text-[#194084] font-['Tajawal'] font-semibold text-2xl lg:text-4xl">
              إختر احدى الشخصيات
            </h1>
          )}
          <div className="flex justify-center p-10 lg:pt-16">
            <div className="bg-[#F47458] bg-opacity-20 h-28 lg:h-36 w-28 lg:w-36 transition-all duration-500 rounded-[50%]">
              <div className="h-[100%] w-[100%] rounded-[50%] overflow-hidden  bg-[#C7DBFE]">
                <img
                  className={"h-[80%] w-[100%] mt-[20%] " + animate}
                  src={image}
                  alt="aa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="select-none h-[48%] w-[100%] flex justify-center bg-[#F47458] bg-opacity-20 rounded-t-[100px]">
        <div className="grid grid-cols-5 gap-2 lg:gap-5 mt-2">
          {paths.map((path) => (
            <button
              key={path.id}
              className="h-28 lg:h-36 w-28 lg:w-36  p-3 hover:p-0 transition-all duration-500 rounded-[50%] flex justify-center items-center bg-white"
            >
              <div className="h-[100%] w-[100%] rounded-[50%] overflow-hidden hover:bg-sky-600 bg-[#C7DBFE]">
                <img
                  className="h-[80%] w-[100%] mt-[20%] "
                  onClick={async () => {
                    setImage(path.name);
                    setanimate("animate-[avatar_2s_ease-in-out_1]");
                    setTimeout(async () => {
                     await axios.patch(url, { avatar: path.name }).then(res=>navigate(`/home/${id}`));
                      
                    }, 1500);
                  }}
                  src={path.name}
                  alt="avatrar"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Avatar;
