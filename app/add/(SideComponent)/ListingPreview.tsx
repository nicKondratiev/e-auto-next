"use client";

import DriveEtaIcon from "@mui/icons-material/DriveEta";

import useStore from "../../store";

export default function ListingPreview() {
  const { inputFields } = useStore();

  const previewDetails = [
    {
      text: inputFields.fuelType,
    },
    {
      text: inputFields.mileage + "km",
    },
    {
      text: inputFields.transmission,
    },
    {
      text: inputFields.wheel,
    },
  ];

  return (
    <div className="flex h-[280px] flex-col items-center justify-between rounded-lg bg-white p-4 text-xs font-semibold">
      <div className="flex h-[140px] w-full items-center justify-center rounded-lg bg-gray-200">
        <DriveEtaIcon fontSize="large" className="scale-125 text-gray-500" />
      </div>

      <div className="flex h-fit w-full justify-between">
        <span
          className={`${
            !inputFields.manu ? `w-1/2 rounded-lg bg-gray-200` : "bg-white"
          } h-[12px]`}
        >
          {inputFields.manu &&
            `${inputFields.manu} ${inputFields.model} ${inputFields.year}`}
        </span>

        <span
          className={`${
            !inputFields.price ? `w-1/3 rounded-lg bg-gray-200` : "bg-white"
          } h-[12px]`}
        >
          {inputFields.price && `${inputFields.price} $`}
        </span>
      </div>

      <div className="h-[75px] w-full rounded-lg border border-gray-100 p-4 font-light">
        <div className="grid grid-cols-2 grid-rows-2 gap-y-2">
          {previewDetails.map((item, index) => (
            <span
              key={index}
              className={`${
                !item.text ? "w-10/12 rounded-lg bg-gray-200" : "bg-white"
              }`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
