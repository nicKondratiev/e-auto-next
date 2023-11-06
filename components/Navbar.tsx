import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-[800px] items-center gap-5 rounded-lg bg-slate-600 px-5 py-3 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/listings"}>Listings</Link>
      <Link
        className="rounded-lg bg-red-500 px-2 py-1 duration-200 hover:bg-red-600"
        href={"/addListing"}
      >
        Add Listing
      </Link>
    </nav>
  );
}
