import React from "react";

export default function Card({ path, scale, name }) {
  return (
    <div class="transform hover:scale-105 transition ease-out cursor-pointer">
    <div class="inline-flex h-64 w-48 lg:h-72 lg:w-52">
        <div class="flex flex-1 h-full -rotate-3 transform rounded-2xl bg-[#C7DBFE] hover:bg-[#7EABFF] p-5">
          <div class="h-full flex-1 rotate-3 rounded-2xl border-2 border-[#194084] bg-[#FFC5C1]">
              <img
              className="w-24 lg:w-32 absolute bottom-6 left-6"
              src={path}
              alt="CardImage"
              />
          </div>
        </div>
      </div>
      <div class="mt-3 text-center font-semibold text-xl">
        <span>{name}</span>
      </div>
    </div>
  );
}
