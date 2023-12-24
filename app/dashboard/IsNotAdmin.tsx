"use client";

import ErrorIcon from "@mui/icons-material/Error";
import Link from "next/link";

export default function IsNotAdmin() {
  return (
    <div>
      <div className="flex h-[300px] w-[500px] flex-col items-center justify-between rounded-lg bg-white py-14">
        <h1 className="text-2xl font-semibold">Something went wrong!</h1>
        <ErrorIcon
          className="text-blue-600 hover:text-blue-500"
          fontSize="large"
        />
        <Link
          href={"/"}
          className="rounded-lg bg-blue-600 px-2 py-1 text-white  duration-300 hover:scale-105 hover:bg-blue-500"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
