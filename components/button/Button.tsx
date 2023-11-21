"use client";

import { useRouter } from "next/navigation";

import useStore from "../../app/store";

export default function Button({ disabled }: { disabled: boolean }) {
  const { setFormSubmitted, reset, inputFields } = useStore();

  const router = useRouter();

  const handleClick = () => {
    if (!disabled) {
      router.push("listings");
      setFormSubmitted();
      reset();
    } else {
      setFormSubmitted();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-lg bg-orange-600 px-8 py-3 text-sm text-white hover:bg-orange-700"
    >
      Publish
    </button>
  );
}
