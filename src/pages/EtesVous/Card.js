import React from "react";

export default function Card({path,name}) {
  return (
    <div class="group inline-flex h-64 w-48">
      <div class=" flex h-full flex-1 group-hover:rotate-0 -rotate-3 transform rounded-2xl bg-[#C7DBFE] p-5">
        <div class="group-hover:rotate-0 h-full flex-1 rotate-3 rounded-2xl border-2 border-[#194084] bg-[#FFC5C1]" >
        <img
              className="w-24 lg:w-36 absolute bottom-6"
              src={path}
              alt="Enseignant"
            />
        </div>
        
      </div>
    </div>
  );
}
