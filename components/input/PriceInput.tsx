"use client";

import { useEffect, useState, useRef, ChangeEvent } from "react";

import useStore from "../../app/store";

export default function PriceInput() {
  const store = useStore();

  const [isActive, setIsActive] = useState(false);

  const inputDivRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // we need this price setter function so we won't have invalid prices like $000123
  const priceSetter = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const sanitizedValue = inputValue.startsWith("0")
      ? inputValue.substring(1)
      : inputValue;

    store.addPrice(sanitizedValue);
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
      className="relative flex h-[60px] w-full items-center overflow-hidden rounded-lg border"
    >
      <input
        type="number"
        ref={inputRef}
        value={store.searchParams.price}
        onChange={(e) => priceSetter(e)}
        onWheel={(e) => (e.target as HTMLInputElement).blur()}
        className={`h-full w-full px-2 text-sm focus:outline-none`}
      />
      <label
        className={`${
          isActive || store.searchParams.price ? "-translate-y-5 text-xs" : ""
        } absolute cursor-text px-2 text-sm text-gray-400 duration-200`}
      >
        Enter the price
      </label>
    </div>
  );
}
