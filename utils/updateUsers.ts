"use server";

import { UserInterface } from "../app/dashboard/admin/page";
import { revalidatePath, revalidateTag } from "next/cache";

export const updateUser = async (
  selectedUser: UserInterface,
  updatedRole: UserInterface["role"],
  isUnbanSelected: boolean,
  selectedDays: number | number[]
) => {
  const { _id, role } = selectedUser;
  try {
    const response = await fetch(
      `http://localhost:3000/api/admin/update-user?userId=${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: updatedRole || role,
          banDuration: selectedDays,
          isUnbanSelected: isUnbanSelected,
        }),
        cache: "no-cache",
      }
    );

    const data = await response.json();
    console.log(data);

    revalidateTag("users-collection");
  } catch (error) {
    console.log(error);
  }
};
