import React from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
          <div className="relative inline-flex align-middle w-full">

            <button
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <img
                className="w-4 lg:w-7 h-4 lg:h-7"
                src="/Prof/3dots.svg"
                alt="icon"
              />

            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#link"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-7">
              <img className="w-5" src="/Prof/3dots.svg" alt="icon" />
                <span>Action</span>
                </div>
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
            </div>
          </div>
        </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="slate" />
    </>
  );
}
