import ListIcon from "@mui/icons-material/List";
import CarsData from "./CarsData";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import Pagination from "./Pagination";
import { Suspense } from "react";
import LoadingSkeleton from "./skeleton";

import { v4 as uuid } from "uuid";

async function getCarListngs(page: number) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?._id;

  const res = await fetch(
    `http://localhost:3000/api/cars?userId=${userId}&page=${page}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch car listings");
  }

  return await res.json();
}

export default async function Listings({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) > 0 ? Number(searchParams.page) : 1;

  const res = await getCarListngs(page);
  const carListings = res.data;
  const totalPages = res.totalPages;

  return (
    <div
      key={uuid()}
      className="flex h-[800px] w-[840px] flex-col gap-5 rounded-lg bg-white p-5"
    >
      <div className="flex items-center gap-2">
        <span>
          <ListIcon />
        </span>
        <h2 className="text-base font-medium">Your Listings</h2>
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <CarsData carListings={carListings} />
      </Suspense>

      <Pagination page={page} totalPages={totalPages} />
    </div>
  );
}
