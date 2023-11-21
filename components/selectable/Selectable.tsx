"use client";

import useStore, { InputFields } from "../../app/store";

type SelectableProps = {
  header: string;
  item: string;
  name: keyof InputFields;
  data: string[];
};

export default function Selectable({
  header,
  item,
  name,
  data,
}: SelectableProps) {
  const { isFormSubmitted, updateField } = useStore();

  return (
    <div className="flex flex-col gap-3">
      <h1 className={`${isFormSubmitted && !item ? "text-red-400" : ""}`}>
        {header}
      </h1>
      <div className="flex  gap-2">
        {data.map((val, index) => (
          <span
            onClick={() => updateField(name, val)}
            key={index}
            className={`${
              item === val ? "border-green-400 bg-green-100" : ""
            } w-fit cursor-pointer rounded-lg border border-gray-200 px-3 py-2 text-sm duration-200`}
          >
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}
