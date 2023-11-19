"use client";

// styles
import "./styles.css";

// useStore from zustand
import useStore from "../../../../app/store";

import ClearanceButton from "./ClearanceButton";

export default function Clearance() {
  const store = useStore();

  // custom clearance setter function [1 === customs cleared, 0 === not cleared]
  const setCustom = (val: "1" | "0") => {
    // if search custom value equals to already setted custom value then it will be removed
    if (val === store.inputFields.custom) {
      store.addCustom("");
    } else {
      store.addCustom(val);
    }
  };

  return (
    <div
      className={`${
        store.isFormSubmitted && !store.inputFields.custom
          ? "border-red-300"
          : ""
      } flex w-full items-center justify-center rounded-lg border`}
    >
      <ClearanceButton
        value="Cleared"
        onClick={() => setCustom("0")}
        selected={store.inputFields.custom === "0"}
        side="left"
      />
      <div className="absolute z-20 h-8 w-[1px] rounded-full bg-gray-200"></div>
      <ClearanceButton
        value="Duty Free"
        onClick={() => setCustom("1")}
        selected={store.inputFields.custom === "1"}
        side="right"
      />
    </div>
  );
}
