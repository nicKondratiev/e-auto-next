"use client";

type SelectableProps = {
  header: string;
  item: string;
  setItem: (val: string) => void;
  data: string[];
};

export default function Selectable({
  header,
  item,
  setItem,
  data,
}: SelectableProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1>{header}</h1>
      <div className="flex  gap-2">
        {data.map((val, index) => (
          <span
            onClick={() => setItem(val)}
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
