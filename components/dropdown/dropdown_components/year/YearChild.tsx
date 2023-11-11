"use client";

import useStore from "../../../../app/store";

import data from "./years.json";

const YearChild = ({ item }: { item: string }) => {
  const store = useStore();

  return (
    <div className="flex h-full flex-col">
      {data.years.map((year, index) => (
        <div
          onClick={() => store.addYear(year)}
          className={`${
            item === year ? "bg-gray-100" : "bg-white"
          } flex cursor-pointer items-center px-5 py-2 text-black duration-150 ease-in hover:bg-gray-100`}
          key={index}
        >
          <p className="text-sm">{year}</p>
        </div>
      ))}
    </div>
  );
};
export default YearChild;
