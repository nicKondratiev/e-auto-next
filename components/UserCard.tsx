"use client";

import { useState } from "react";
import { User } from "@nextui-org/react";
import { EditIcon } from "./icons";
import AdminActions from "./AdminActions";
import { UserInterface } from "../app/dashboard/admin/page";

export default function UserCard({ user }: { user: UserInterface }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const spanStyling = "flex gap-2 text-sm font-semibold";

  return (
    <div className="h-full">
      <div
        className={`flex w-[400px] flex-col overflow-hidden rounded-xl bg-white px-4 py-2 shadow-small duration-300 ${
          isModalOpen ? "h-full flex-1" : "h-1/3"
        }`}
      >
        {user?._id && (
          <div className="flex h-full shrink-0 flex-col gap-2">
            <div>
              <div className="flex h-1/3 flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <User name={user.username} />
                  <button className="text-lg text-gray-700 duration-150 hover:scale-110 hover:text-black">
                    <EditIcon onClick={() => setIsModalOpen(!isModalOpen)} />
                  </button>
                </div>

                <div className="flex w-full flex-col">
                  <span className="text-sm font-semibold">Information</span>
                  <div className="w-full rounded-lg px-2 shadow-none">
                    <span className={spanStyling}>
                      Creation date:
                      <p className="font-normal">
                        {new Date(user.createdAt).toLocaleString()}
                      </p>
                    </span>
                    <span className={spanStyling}>
                      User ID:
                      <p className="font-normal">{user._id}</p>
                    </span>
                    <span className={spanStyling}>
                      IsBanned:
                      <p className="font-normal">{String(user.isBanned)}</p>
                    </span>
                    <span className={spanStyling}>
                      Ban exp date:
                      <p className="font-normal">
                        {String(user.banExpirationDate)}
                      </p>
                    </span>
                    <span className={spanStyling}>
                      Total Listings:
                      <p className="font-normal">2</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full">
              <AdminActions
                key={Math.random()}
                isBanned={user?.isBanned!}
                userRole={user.role}
                selectedUser={user}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
