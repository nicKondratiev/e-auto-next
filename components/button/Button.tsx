"use client";

import { useRouter } from "next/navigation";

export default function Button({ disabled }: { disabled: boolean }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("listings")}
      className="cursor-pointer rounded-lg bg-orange-600 px-8 py-3 text-sm text-white hover:bg-orange-700"
      disabled={disabled}
    >
      Publish
    </button>
  );
}
