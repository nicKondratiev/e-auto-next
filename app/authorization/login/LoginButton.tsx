"use client";

import useStore from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type LoginButtonProps = {
  setError: Dispatch<SetStateAction<boolean>>;
};

export default function LoginButton({ setError }: LoginButtonProps) {
  const { authFields } = useStore();

  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  console.log(callbackUrl);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: authFields.email,
        password: authFields.password,
        redirect: true,
        callbackUrl: callbackUrl,
      });

      if (res?.error) {
        setError(true);
        return;
      }

      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthButton buttonText="Log in" handleSubmit={handleSubmit} />;
}
