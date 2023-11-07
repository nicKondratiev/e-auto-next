import Image from "next/image";
import Link from "next/link";

import EditIcon from "@mui/icons-material/Edit";
import RemoveBtn from "./RemoveBtn";

export default function CarsList() {
  return (
    <>
      <div className="flex h-48 gap-4 rounded-lg bg-white p-4">
        <div className="w-2/6 rounded-lg bg-gray-500">
          <Image src={""} alt="carImage" />
        </div>

        <div className="flex w-3/6 flex-col justify-between gap-2">
          <div className="flex gap-2">
            <h2 className="font-bold">Manufacturer Model</h2>
            <h2 className="font-medium text-gray-400">Year</h2>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-y-2">
            <h3>Fuel Type</h3>
            <h3>Transmition</h3>
            <h3>Miles</h3>
            <h3>Steering</h3>
          </div>

          <div>
            <h2>Priority</h2>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between gap-2">
          <div className="flex gap-3">
            <h3>Location</h3>
            <h3>Clearence</h3>
          </div>
          <h1>Price $</h1>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={"/editListing/1"}>
              <EditIcon fontSize="medium" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
