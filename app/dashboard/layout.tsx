import { Suspense } from "react";
import Navbar from "../../components/Navbar";
// import Loading from "./listings/Loading";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-full flex-col items-center gap-5 bg-gray-100 px-10 py-5">
      <nav className="w-full">
        <Navbar />
      </nav>
      {children}
    </section>
  );
}
