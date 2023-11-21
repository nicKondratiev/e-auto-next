"use client";

import useStore from "../../app/store";

import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function ImgInput() {
  const { updateField, inputFields, isFormSubmitted } = useStore();

  return (
    <div
      className={`${
        isFormSubmitted && !inputFields.img
          ? "border-red-300"
          : "border-blue-500"
      } flex h-[60px] w-full items-center gap-2 rounded-lg border border-dashed border-blue-500 px-2`}
    >
      <span className="rounded-lg bg-blue-50 p-1.5">
        <InsertLinkIcon className="text-blue-500" fontSize="medium" />
      </span>
      <input
        type="text"
        onChange={(e) => updateField("img", e.target.value)}
        placeholder="e.g. https://car-image/manufacturer"
        className="w-full text-sm font-medium text-gray-700 placeholder:font-normal focus:outline-none"
      />
    </div>
  );
}
