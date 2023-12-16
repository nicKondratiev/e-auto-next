"use client";

import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

import RemoveBtn from "./RemoveBtn";
import { ListingType } from "../app/dashboard/listings/page";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CarsList({
  carListing,
  handleDelete,
}: {
  carListing: ListingType;
  handleDelete: (carId: string) => Promise<void>;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      await handleDelete(carListing._id).then(() => {
        router.refresh();
      });
    } catch (err) {
      console.log("something went wrong");
    }
  };

  return (
    <div className="flex h-48 gap-4 rounded-lg border bg-white p-4 shadow-sm">
      <div className="w-2/6 overflow-hidden rounded-lg bg-gray-500">
        <Image
          className="h-full w-full"
          src={carListing.img}
          alt="carImage"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex w-3/6 flex-col justify-between gap-2">
        <div className="flex gap-2">
          <h2 className="font-bold">
            {carListing.manu} {carListing.model}
          </h2>
          <h2 className="font-medium text-gray-400">{carListing.year}</h2>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-y-2">
          <h3>{carListing.fuelType}</h3>
          <h3>{carListing.transmission}</h3>
          <h3>{carListing.mileage}</h3>
          <h3>{carListing.wheel}</h3>
        </div>

        <div>
          <h2>Priority</h2>
        </div>
      </div>

      {isModalOpen && (
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <div className="absolute left-1/2 top-1/2 z-50 h-[200px] w-[450px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white text-white shadow-lg">
            <div className="flex h-1/4 items-center justify-between bg-blue-600 px-4">
              <p>Message</p>
              <span
                className="cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon fontSize="small" />
              </span>
            </div>
            <div className="flex h-2/4 items-center justify-center bg-gray-50 text-center">
              <p className="text-black">
                Are you sure that you want to delete?
              </p>
            </div>
            <div className="flex h-1/4 w-full items-center justify-center gap-2 bg-gray-200 py-2 text-sm">
              <button
                onClick={() => {
                  handleClick(), setIsModalOpen(false);
                }}
                className="w-[70px] rounded-sm bg-blue-600"
              >
                OK
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-[70px] rounded-sm bg-blue-600"
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-60"
          ></div>
        </div>
      )}

      <div className="flex flex-col items-end justify-between gap-2">
        <div className="flex gap-3">
          <h3>{carListing.location}</h3>
          <h3>{carListing.custom}</h3>
        </div>
        <h1>{carListing.price} $</h1>
        <div className="flex gap-2">
          <div onClick={() => setIsModalOpen(true)}>
            <RemoveBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
