"use client";

/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect, useRef } from "react";

import { SetStateAction, Dispatch } from "react";

import "./styles.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

type DropDownProps = {
  header: string;
  item: string | number;
  inputVal: string;
  setInputVal: Dispatch<SetStateAction<string>>;
  canOpen: boolean;
  setItem: (val: string) => void;
  Child: React.ReactNode;
};

const DropDown = ({
  header,
  Child,
  item,
  inputVal,
  setInputVal,
  setItem,
  canOpen,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [inputVal, setInputVal] = useState<string | number>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        closeDropdown();
      }
    };

    // add the event listener
    window.addEventListener("mousedown", handleClickOutside);

    // cleanup the event listener on unmount
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setInputVal("");
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setInputVal("");
  };

  return (
    <div ref={dropdownRef} className="relative flex w-full lg:w-fit">
      {isOpen && (
        <div className="overlay md:hidden" onClick={closeDropdown}></div>
      )}
      <div
        onClick={(event) =>
          canOpen && !inputRef.current?.contains(event.target as HTMLElement) // we don't want to close dropdown if click occured on input element
            ? toggleDropdown()
            : () => null
        } // we have to check data truthiness because we don't want to open models dropdown before we have manu selected
        className={`${
          !canOpen ? "border-1 bg-gray-100 text-gray-300" : ""
        } dropdown-outter flex w-full overflow-hidden lg:w-[250px]`}
      >
        <div className="relative flex h-auto flex-col justify-center">
          <span
            className={`${
              isOpen || item
                ? "absolute -translate-y-4 py-1 text-xs text-gray-400"
                : ""
            } duration-200 ease-in`}
          >
            {header}
          </span>

          <span className="relative flex w-full translate-y-1 items-center">
            {isOpen && (
              <span ref={inputRef} className="">
                <input
                  type="text"
                  className="dropdown-input"
                  autoFocus
                  onChange={(e) => setInputVal(e.target.value)}
                />
              </span>
            )}
            {!inputVal && (
              <span className="absolute w-max cursor-auto">{item}</span>
            )}
          </span>
        </div>
        <div className="rounded-full p-1.5 hover:bg-gray-100">
          {!item ? (
            <KeyboardArrowDownIcon
              className={`${
                isOpen
                  ? "open-animation rotate-180"
                  : "close-animation rotate-0"
              }`}
              fontSize="small"
            />
          ) : (
            <button onClick={() => setItem("")}>
              <CloseIcon className="scale-75" fontSize="small" />
            </button>
          )}
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? "fixed bottom-[0px] lg:absolute"
            : "fixed bottom-[-1000px] lg:hidden"
        } z-50 flex h-2/3 w-full flex-col overflow-hidden rounded-t-xl border bg-white duration-300 ease-in lg:left-0 lg:top-16 lg:h-[270px] lg:w-[300px] lg:rounded-xl lg:duration-0`}
      >
        <div
          onClick={closeDropdown}
          className={`scrollbar grow overflow-y-auto`}
        >
          {Child}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
