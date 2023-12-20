import CarsList from "../../../components/CarsList";
import { InputFields } from "../../store";

export type ListingType = InputFields & { _id: string };

async function handleDelete(carId: string) {
  "use server";
  await fetch(`http://localhost:3000/api/cars?carId=${carId}`, {
    method: "DELETE",
  });
}

export default async function CarsData({
  carListings,
}: {
  carListings: ListingType[];
}) {
  return (
    <div className="grid h-full w-[800px] grid-cols-1 grid-rows-3 flex-col items-center gap-4">
      {carListings.map((listing: ListingType, index: number) => (
        <CarsList
          handleDelete={handleDelete}
          key={index}
          carListing={listing}
        />
      ))}
    </div>
  );
}
