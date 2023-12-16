import ListIcon from "@mui/icons-material/List";
import CarsData from "./CarsData";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Listings() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-lg bg-white p-5">
      <div className="flex items-center gap-2">
        <span>
          <ListIcon />
        </span>
        <h2 className="text-base font-medium">Your Listings</h2>
      </div>
      <Suspense fallback={<Loading />}>
        <CarsData />
      </Suspense>
    </div>
  );
}
