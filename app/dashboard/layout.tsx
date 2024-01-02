import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-full flex-col items-center gap-5 bg-gray-100 px-10 py-5">
      <nav className="w-full">
        <Navbar />
      </nav>
      {children}
    </section>
  );
}
