import Image from "next/image";

import RemoveBtn from "./RemoveBtn";
import { ListingType } from "../app/dashboard/listings/CarsData";
import DeleteButton from "./button/button_components/ListingDelete_Button";

export default function CarsList({ carListing }: { carListing: ListingType }) {
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

      <div className="flex flex-col items-end justify-between gap-2">
        <div className="flex gap-3">
          <h3>{carListing.location}</h3>
          <h3>{carListing.custom}</h3>
        </div>
        <h1>{carListing.price} $</h1>
        <div className="flex gap-2">
          <DeleteButton carId={carListing._id} />
        </div>
      </div>
    </div>
  );
}
