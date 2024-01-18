"use client";

import { useState } from "react";
import { Card, User } from "@nextui-org/react";
import { EditIcon } from "./icons";
import AdminActions from "./AdminActions";
import { UserInterface } from "../app/dashboard/admin/page";

export default function UserCard({ user }: { user: UserInterface }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const spanStyling = "flex gap-2 text-sm font-semibold";

  return (
    <div className="h-full">
      <div
        className={`box-border flex w-[400px] flex-col overflow-hidden rounded-xl bg-white px-4 py-2 shadow-small duration-300 ${
          isModalOpen ? "h-full flex-1" : "h-1/3"
        }`}
      >
        {user?._id && (
          <div className="flex h-full shrink-0 flex-col gap-2">
            <div className="">
              <div className="flex flex-col items-start">
                <div className="flex w-full items-center justify-between">
                  <User name={user.username} />
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="rounded-lg bg-blue-500 p-1 text-lg text-gray-100 duration-150 hover:scale-110 hover:text-white"
                  >
                    <EditIcon />
                  </button>
                </div>

                <div className="flex w-full flex-col gap-2">
                  <span className="text-sm font-semibold">Information</span>
                  <Card className="rounded-lg px-2 py-1">
                    <span className={spanStyling}>
                      Creation date:
                      <p className="font-normal">
                        {new Date(user.createdAt).toLocaleString()}
                      </p>
                    </span>
                    <span className={spanStyling}>
                      Is Banned:
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
                  </Card>
                </div>
              </div>
            </div>

            <div className="h-full">
              <AdminActions
                isBanned={user?.isBanned!}
                banExpirationDate={user.banExpirationDate}
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
