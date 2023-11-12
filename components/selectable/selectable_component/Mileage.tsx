"use client";

import { useRef } from "react";
import useStore from "../../../app/store";

import "./styles.css";

export default function Mileage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const store = useStore();

  const handleInputChange = () => {
    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.slice(0, 6);
    }
  };

  return (
    <div className="w-[350px]">
      <input
        ref={inputRef}
        placeholder="Mileage"
        type="number"
        className="h-full w-full rounded-lg border border-gray-200 px-2 text-sm focus:outline-none"
        onInput={handleInputChange}
        onChange={(e) => store.addMileage(e.target.value)}
      />
    </div>
  );
}
