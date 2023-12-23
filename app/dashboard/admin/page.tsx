import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (session.user.role !== "ADMIN") return notFound();

  return <div>AdminPage</div>;
}
