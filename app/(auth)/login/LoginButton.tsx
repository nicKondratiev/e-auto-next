"use client";

import useStore from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";
import { signIn, getSession } from "next-auth/react";
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: authFields.email,
        password: authFields.password,
      });

      if (res?.error) {
        setError(true);
        return;
      }

      const session = await getSession();

      console.log(session);

      router.replace(callbackUrl !== "/" ? callbackUrl : "/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthButton buttonText="Log in" handleSubmit={handleSubmit} />;
}
