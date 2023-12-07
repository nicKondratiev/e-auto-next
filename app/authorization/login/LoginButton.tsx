"use client";

import useStore from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { authFields } = useStore();

  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: authFields.email,
        password: authFields.password,
        redirect: false,
      });

      if (res?.error) {
        console.log("Invalid credentials");
        return;
      }

      router.refresh();
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return <AuthButton buttonText="Log in" handleSubmit={handleSubmit} />;
}
