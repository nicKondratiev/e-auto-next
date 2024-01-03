"use client";

import { useRouter } from "next/navigation";
import { DeleteIcon } from "../../icons";

export default function DeleteButton({ carId }: { carId: string }) {
  const router = useRouter();

  async function deleteListing(carId: string) {
    await fetch(`http://localhost:3000/api/cars?carId=${carId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) router.refresh();
    });
  }

  return (
    <span
      onClick={() => deleteListing(carId)}
      className="cursor-pointer text-lg text-danger active:opacity-50"
    >
      <DeleteIcon />
    </span>
  );
}
