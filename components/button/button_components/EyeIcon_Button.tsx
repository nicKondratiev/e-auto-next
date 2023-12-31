"use client";

import { EyeIcon } from "../../icons";

export default function EyeButton() {
  return (
    <span
      onClick={() => console.log("hey")}
      className="cursor-pointer text-lg active:opacity-50"
    >
      <EyeIcon />
    </span>
  );
}
