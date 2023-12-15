import CarsList from "../../../components/CarsList";
import { InputFields } from "../../store";

import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { Suspense } from "react";
import Loading from "./loading";

export type ListingType = InputFields & { _id: string };

async function getCarListngs() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?._id;

  const res = await fetch(`http://localhost:3000/api/cars/${userId}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("failed to fetch car listings");
  }

  return await res.json();
}

async function handleDelete(carId: string) {
  "use server";
  await fetch(`http://localhost:3000/api/cars/${carId}`, {
    method: "DELETE",
  });
}

export default async function Listings() {
  const res = await getCarListngs();
  const carListings = res.data;

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex w-[800px] flex-col gap-4">
        {carListings.map((listing: ListingType, index: number) => (
          <CarsList
            handleDelete={handleDelete}
            key={index}
            carListing={listing}
          />
        ))}
      </div>
    </Suspense>
  );
}
