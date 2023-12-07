import LoginForm from "./authorization/login/Login";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div className="flex h-full w-full items-center bg-gray-50 px-36">
      <LoginForm />
    </div>
  );
}
