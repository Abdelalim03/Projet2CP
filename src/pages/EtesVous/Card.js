import React from "react";

export default function Card({ path, scale, name }) {
  return (
    <div class="group transform hover:scale-105 transition duration-500 ease-out cursor-pointer">
    <div class="inline-flex h-64 w-48 lg:h-72 lg:w-52">
        <div class="flex flex-1 h-full group-hover:rotate-0 -rotate-3 transform rounded-2xl bg-[#C7DBFE] group-hover:bg-[#7EABFF] p-5">
          <div class="h-full flex-1 rotate-3 group-hover:rotate-0 rounded-2xl border-2 border-[#194084] bg-[#FFC5C1]">
              <img
              className={"w-24 lg:w-32 absolute bottom-10 left-3 "+(scale)}
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
