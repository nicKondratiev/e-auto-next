"use client";

import { useEffect, useState } from "react";
import { User as UserType } from "../app/dashboard/admin/page";
import { User } from "@nextui-org/react";
import { EditIcon } from "./icons";
import AdminActions from "./AdminActions";

const getUser = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/users?userId=${id}`, {
    method: "GET",
  });

  return data.json();
};

type UserInterface = UserType & {
  createdAt: string;
  isBanned: boolean;
  banExpirationDate: null | string;
};

export default function UserCard({ id }: { id: string }) {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  console.log(isModalOpen);

  return (
    <div className="flex flex-col gap-2">
      <div className="h-1/3 w-[300px] rounded-xl bg-white px-4 py-2 shadow-small">
        {user?._id && (
          <div className="flex h-full flex-col items-start justify-between">
            <div className="flex w-full items-center justify-between">
              <User name={user.username} />
              <button className="text-lg text-gray-700 duration-150 hover:scale-110 hover:text-black">
                <EditIcon onClick={() => setIsModalOpen(!isModalOpen)} />
              </button>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="flex gap-2 text-xs font-semibold">
                Creation date:
                <p className="font-normal">
                  {new Date(user.createdAt).toLocaleString()}
                </p>
              </span>

              <span className="flex gap-2 text-xs font-semibold">
                User ID:
                <p className="font-normal">{user._id}</p>
              </span>

              <span className="flex gap-2 text-xs font-semibold">
                IsBanned:
                <p className="font-normal">{String(user.isBanned)}</p>
              </span>

              <span className="flex gap-2 text-xs font-semibold">
                Ban exp date:
                <p className="font-normal">{String(user.banExpirationDate)}</p>
              </span>
            </div>

            <div>
              <span className="flex gap-2 text-xs font-semibold">
                Total Listings:
                <p className="font-normal">2</p>
              </span>
            </div>
          </div>
        )}
      </div>
      {isModalOpen && <AdminActions isBanned={user?.isBanned!} />}
    </div>
  );
}
