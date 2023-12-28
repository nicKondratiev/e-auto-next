"use client";

import { useRouter } from "next/navigation";
import { DeleteIcon } from "../../icons";

export default function DeleteButton({ userId }: { userId: string }) {
  const router = useRouter();

  const deleteUser = async (id: string) => {
    await fetch(`http://localhost:3000/api/users?userId=${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        router.refresh();
      }
    });
  };

  return (
    <span
      onClick={() => deleteUser(userId)}
      className="cursor-pointer text-lg text-danger active:opacity-50"
    >
      <DeleteIcon />
    </span>
  );
}
