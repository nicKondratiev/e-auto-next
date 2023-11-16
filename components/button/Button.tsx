"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("listings")}
      className="cursor-pointer rounded-lg bg-orange-600 px-8 py-3 text-sm text-white hover:bg-orange-700"
    >
      Publish
    </button>
  );
}
