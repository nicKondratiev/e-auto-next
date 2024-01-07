"use client";

import { useState } from "react";
import { User as UserType } from "../app/dashboard/admin/page";
import { User } from "@nextui-org/react";
import { EditIcon } from "./icons";
import AdminActions from "./AdminActions";

type UserInterface = UserType & {
  createdAt: string;
  isBanned: boolean;
  banExpirationDate: null | string;
};

export default function UserCard({ user }: { user: UserInterface }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  console.log(user);

  return (
    <div className="h-full">
      <div
        className={`flex w-[300px] flex-col overflow-hidden rounded-xl bg-white px-4 py-2 shadow-small duration-300 ${
          isModalOpen ? "h-full flex-1" : "h-1/3"
        }`}
      >
        <div className="flex shrink-0 flex-col gap-4">
          <div>
            {user?._id && (
              <div className="flex h-1/3 flex-col items-start">
                <div className="flex w-full items-center justify-between">
                  <User name={user.username} />
                  <button className="text-lg text-gray-700 duration-150 hover:scale-110 hover:text-black">
                    <EditIcon onClick={() => setIsModalOpen(!isModalOpen)} />
                  </button>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">Information</span>
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
                    <p className="font-normal">
                      {String(user.banExpirationDate)}
                    </p>
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

          <div>
            <AdminActions isBanned={user?.isBanned!} />
          </div>
        </div>
      </div>
    </div>
  );
}
