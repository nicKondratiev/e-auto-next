import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import UserTable from "../../../components/UserTable";
import IsNotAdmin from "../IsNotAdmin";
import UserCard from "../../../components/UserCard";

export type User = {
  username: string;
  email: string;
  role: string;
  _id: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache",
  });

  return res.json();
}

export default async function AdminPage() {
  const users = await getUsers();

  const session = await getServerSession(authOptions);

  if (session.user.role !== "ADMIN") {
    return <IsNotAdmin />;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex gap-2">
        <UserTable users={users} />
      </div>
    </div>
  );
}
