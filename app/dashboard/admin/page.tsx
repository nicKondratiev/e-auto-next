import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import UserTable from "../../../components/UserTable";
import IsNotAdmin from "../IsNotAdmin";

export type User = {
  username: string;
  email: string;
  role: string;
  _id: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return users.data;
}

export default async function AdminPage() {
  const data = await getUsers();

  const users = data.map((user) => ({
    username: user.username,
    email: user.email,
    role: user.role,
    _id: user._id,
  }));

  const session = await getServerSession(authOptions);

  if (session.user.role !== "ADMIN") {
    return <IsNotAdmin />;
  }

  return (
    <div>
      <div className="container">
        <UserTable users={users} />
      </div>
    </div>
  );
}
