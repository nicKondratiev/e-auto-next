"use client";

import "./styles.css";

import { useEffect, useState, useRef, ChangeEvent } from "react";

import useStore, { InputFields } from "../../app/store";

type InputProps = {
  name: keyof InputFields;
  value: string;
  placeholder: string;
};

export default function Input({ name, value, placeholder }: InputProps) {
  const { isFormSubmitted, updateField } = useStore();

  const [isActive, setIsActive] = useState(false);

  const inputDivRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const valueSetter = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.substring(0, 6);

    const sanitizedValue = inputValue.startsWith("0")
      ? inputValue.substring(1)
      : inputValue;

    updateField(name, sanitizedValue);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputDivRef.current &&
        !inputDivRef.current.contains(e.target as HTMLElement)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLabelClick = () => {
    setIsActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      ref={inputDivRef}
      onClick={() => handleLabelClick()}
      className={`${
        isFormSubmitted && !value ? "border-red-300" : ""
      } relative flex h-full w-full items-center overflow-hidden rounded-lg border`}
    >
      <input
        type="number"
        ref={inputRef}
        value={value}
        onChange={(e) => valueSetter(e)}
        onWheel={(e) => (e.target as HTMLInputElement).blur()}
        className={`h-full w-full px-2 text-sm focus:outline-none`}
      />
      <label
        className={`${
          isActive || value ? "top-[2px] text-xs" : "top-1/2 -translate-y-1/2"
        } absolute cursor-text px-2 text-sm text-gray-400 duration-200`}
      >
        {placeholder}
      </label>
    </div>
  );
}
