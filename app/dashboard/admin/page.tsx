import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import UserTable from "../../../components/UserTable";
import IsNotAdmin from "../IsNotAdmin";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (session.user.role !== "ADMIN") {
    return <IsNotAdmin />;
  }

  return (
    <div>
      <div className="container">
        <UserTable />
      </div>
    </div>
  );
}
