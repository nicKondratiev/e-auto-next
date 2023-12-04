"use client";

import useStore from "../../store";
import { AuthFields } from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { authFields } = useStore();

  const router = useRouter();

  const data: Partial<AuthFields> = {
    email: authFields.email,
    password: authFields.password,
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        data,
        redirect: false,
      });

      if (res?.error) {
        console.log("something went wrong");
        return;
      }

      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthButton buttonText="Log in" handleSubmit={handleSubmit} />;
}
