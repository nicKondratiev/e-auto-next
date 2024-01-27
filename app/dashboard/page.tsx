import Link from "next/link";

export default function Dashboard() {
  const linkStyling =
    "rounded-lg bg-blue-500 px-3 py-2 text-white duration-300 hover:bg-blue-600";

  return (
    <div className="flex h-screen flex-col gap-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-semibold">
          This page does not serve any purpose
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-2 text-center">
        <h2 className="text-xl">Navigate to any of those pages:</h2>
        <div className="flex items-center justify-center gap-6">
          <Link className={linkStyling} href="dashboard/listings">
            Your Listings
          </Link>
          /
          <Link className={linkStyling} href="dashboard/add">
            Add Listing
          </Link>
          /
          <Link className={linkStyling} href="dashboard/admin">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
