import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-max flex-col items-center gap-5 bg-gray-50 px-10 py-5">
      <nav className="w-full">
        <Navbar />
      </nav>
      {children}
    </section>
  );
}