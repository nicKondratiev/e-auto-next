"use server";

import { UserInterface } from "../app/dashboard/admin/page";
import { revalidateTag } from "next/cache";

export const updateUser = async (
  userId: UserInterface["_id"],
  selectedUser: UserInterface,
  updatedRole: UserInterface["role"],
  userRole: UserInterface["role"],
  isUnbanSelected: boolean,
  isBanned: boolean,
  banExpirationDate: UserInterface["banExpirationDate"],
  selectedDays: number | number[]
) => {
  try {
    const response1 = await fetch(
      `http://localhost:3000/api/admin/update-role?userId=${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...selectedUser,
          role: updatedRole || userRole,
          isBanned: isUnbanSelected ? null : isBanned,
          banExpirationDate: isUnbanSelected ? null : banExpirationDate,
        }),
      }
    );
    const result1 = await response1.json();

    let result2;
    if (selectedDays) {
      const response2 = await fetch(
        "http://localhost:3000/api/admin/ban-user",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            banDuration: selectedDays,
          }),
        }
      );

      result2 = await response2.json();
    }

    console.log(result1, result2);
    revalidateTag("users-collection");
  } catch (error) {
    console.log(error);
  }
};
