import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Logout from "./navbar-components/Logout";
import Login from "./navbar-components/Login";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  const navItemStyle = "text-sm hover:text-blue-500";

  return (
    <nav className="flex h-20 w-full items-center justify-end gap-5 border border-gray-100 bg-white px-10 text-sm text-gray-800">
      <div className="w-1/3">
        <div className="flex w-fit cursor-pointer items-center gap-1 rounded-lg bg-blue-500 p-2">
          <DirectionsCarFilledIcon className="text-white" />
          <span className="font-semibold text-white">eauto.ge</span>
        </div>
      </div>

      <div className="flex w-1/3 justify-center gap-4 rounded-lg text-gray-700">
        <Link className={navItemStyle} href={"/dashboard/listings"}>
          Your Listings
        </Link>
        <Link className={navItemStyle} href={"/dashboard/add"}>
          Add Listing
        </Link>
        <Link className={navItemStyle} href={"/dashboard/admin"}>
          Admin
        </Link>
      </div>

      <div className="flex w-1/3 justify-end">
        {session ? <Logout /> : <Login />}
      </div>
    </nav>
  );
}
