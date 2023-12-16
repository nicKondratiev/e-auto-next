import { getServerSession } from "next-auth";
import CarsList from "../../../components/CarsList";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { InputFields } from "../../store";

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

export default async function CarsData() {
  const res = await getCarListngs();
  const carListings = res.data;

  return (
    <div className="flex h-full w-[800px] flex-col gap-4">
      {carListings.reverse().map((listing: ListingType, index: number) => (
        <CarsList
          handleDelete={handleDelete}
          key={index}
          carListing={listing}
        />
      ))}
    </div>
  );
}
