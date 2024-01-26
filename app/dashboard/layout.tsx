import Navbar from "../../components/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-full flex-col items-center gap-10 bg-gray-100">
      <nav className="w-full">
        <Navbar />
      </nav>
      {children}
    </section>
  );
}
