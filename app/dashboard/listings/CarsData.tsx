import CarsList from "../../../components/CarsList";
import { InputFields } from "../../store";

export type ListingType = InputFields & { _id: string };

export default async function CarsData({
  carListings,
}: {
  carListings: ListingType[];
}) {
  return (
    <div className="grid h-full w-[800px] grid-cols-1 grid-rows-3 flex-col items-center gap-4">
      {carListings.map((listing: ListingType, index: number) => (
        <CarsList key={index} carListing={listing} />
      ))}
    </div>
  );
}
