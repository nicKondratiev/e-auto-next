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

  const handleClick = async () => {
    if (!disabled) {
      if (makeApiCall !== undefined) {
        try {
          await makeApiCall().then(() => {
            router.refresh();
            router.push("listings");
            reset();
          });
        } catch (err) {
          console.log("Error during API call");
        }
      }
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
