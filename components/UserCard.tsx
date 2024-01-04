"use client";

import { useEffect, useState } from "react";
import { User } from "../app/dashboard/admin/page";

const getUser = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/users?userId=${id}`, {
    method: "GET",
  });

  return data.json();
};

type UserType = User & {
  createdAt: Date;
  isBanned: boolean;
  banExpirationDate: null | Date;
};

export default function UserCard({ id }: { id: string }) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser(id);

        setUser(userData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="h-full w-[300px] rounded-xl bg-white shadow-small">
      {user && <h1>{user.username}</h1>}
    </div>
  );
}
