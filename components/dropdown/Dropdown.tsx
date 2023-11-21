"use client";

/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect, useRef } from "react";

import { InputFields } from "../../app/store";

import useStore from "../../app/store";

import "./styles.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

type DropDownProps = {
  header: string;
  name: keyof InputFields;
  canOpen: boolean;
  Child: React.ReactNode;
};

const DropDown = ({ header, Child, name, canOpen }: DropDownProps) => {
  const { isFormSubmitted, inputFields, updateField } = useStore();

  const item = String(inputFields[name]);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLSpanElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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

  console.log(inputFields[name]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (
      canOpen &&
      !inputRef.current?.contains(event.target as HTMLElement) &&
      !closeButtonRef.current?.contains(event.target as HTMLElement)
    ) {
      toggleDropdown();
    }
  };

  return (
    <div ref={dropdownRef} className="relative flex w-full">
      {isOpen && (
        <div className="overlay md:hidden" onClick={closeDropdown}></div>
      )}
      <div
        onClick={handleClickOutside}
        className={`${!canOpen ? "border-1 bg-gray-100 text-gray-300" : ""} ${
          isFormSubmitted && !item ? "border-red-300" : ""
        } dropdown-outter flex w-full overflow-hidden lg:w-full`}
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
                  onChange={(e) => updateField(name, e.target.value)}
                />
              </span>
            )}
            {item && <span className="absolute w-max cursor-auto">{item}</span>}
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
            <button
              ref={closeButtonRef}
              onClick={() => {
                updateField(name, "");
              }}
            >
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
        } z-50 flex h-2/3 w-full flex-col overflow-hidden rounded-t-xl border bg-white duration-300 ease-in lg:left-0 lg:top-16 lg:h-[270px] lg:w-[350px] lg:rounded-xl lg:duration-0`}
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
