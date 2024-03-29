import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import UserTable from "../../../components/UserTable";
import IsNotAdmin from "../IsNotAdmin";

export type UserInterface = {
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  _id: string;
  createdAt: string;
  isBanned: boolean;
  banExpirationDate: null | string;
};

async function getUsers(): Promise<UserInterface[]> {
  const res = await fetch("http://localhost:3000/api/users", {
    next: {
      tags: ["users-collection"],
    },
    cache: "default",
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
        {/* <UserTable users={users} key={Math.random()} /> */}
      </div>
    </div>
  );
}
