"use client";

import { useRouter } from "next/navigation";

import useStore from "../../app/store";

type ButtonProps = {
  disabled: boolean;
  makeApiCall?: () => Promise<void>;
};

export default function Button({ disabled, makeApiCall }: ButtonProps) {
  const { setFormSubmitted, reset } = useStore();

  const router = useRouter();

  const handleClick = () => {
    if (!disabled) {
      makeApiCall !== undefined && makeApiCall();
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
      className="cursor-pointer rounded-lg bg-blue-500 px-8 py-3 text-sm text-white duration-200 hover:bg-blue-600"
    >
      Publish
    </button>
  );
}
