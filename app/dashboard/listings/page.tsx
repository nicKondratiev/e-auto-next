import CarsList from "../../../components/CarsList";
import { InputFields } from "../../store";

import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export type ListingType = InputFields;

async function getCarListngs() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?._id;

  const res = await fetch(`http://localhost:3000/api/cars/${userId}`);

  if (!res.ok) {
    throw new Error("failed to fetch car listings");
  }

  return await res.json();
}

export default async function Listings() {
  const res = await getCarListngs();
  const carListings = res.data;

  return (
    <div className="flex w-[800px] flex-col gap-4">
      {carListings.map((listing: ListingType, index: number) => (
        <CarsList key={index} carListing={listing} />
      ))}
    </div>
  );
}
