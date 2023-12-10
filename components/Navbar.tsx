import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Logout from "./navbar-components/Logout";
import Login from "./navbar-components/Login";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex w-full items-center justify-end gap-5 rounded-lg border border-gray-100 bg-white px-5 py-3 text-sm text-gray-800">
      <Link href={"/dashboard/listings"}>Your Listings</Link>
      <Link
        className="rounded-lg bg-blue-400 px-2 py-1 duration-200 hover:bg-blue-500"
        href={"/dashboard/add"}
      >
        Add Listing
      </Link>
      {session ? <Logout /> : <Login />}
    </nav>
  );
}
