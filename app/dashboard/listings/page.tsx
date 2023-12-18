import ListIcon from "@mui/icons-material/List";
import CarsData from "./CarsData";
import { Suspense } from "react";
// import Loading from "./loading";

import Pagination from "./Pagination";

export default async function Listings({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  return (
    <div className="flex h-full flex-col gap-5 rounded-lg bg-white p-5">
      <div className="flex items-center gap-2">
        <span>
          <ListIcon />
        </span>
        <h2 className="text-base font-medium">Your Listings</h2>
      </div>
      {/* <Suspense fallback={<Loading />}> */}
      <CarsData page={page} />
      {/* </Suspense> */}

      <Pagination page={page} />
    </div>
  );
}
