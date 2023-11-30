import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center gap-5 rounded-lg bg-white px-5 py-3 text-sm text-gray-800">
      <Link href={"/"}>Home</Link>
      <Link href={"/listings"}>Your Listings</Link>
      <Link
        className="rounded-lg bg-blue-400 px-2 py-1 duration-200 hover:bg-blue-500"
        href={"/add"}
      >
        Add Listing
      </Link>
      <Link href={"/user/login"}>Log in</Link>
    </nav>
  );
}
