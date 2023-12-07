"use client";

import useStore from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";

import { useRouter } from "next/navigation";

import { AuthFields } from "../../store";

export default function SignupButton() {
  const { authFields } = useStore();

  const data: Partial<AuthFields> = {
    email: authFields.email,
    password: authFields.password,
    username: authFields.username,
  };

  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      console.log(responseData);

      if (res.ok) {
        router.push("login");
      } else {
        console.log("User registration failed");
      }
    } catch (err) {
      console.log("Error during registration");
    }
  };

  return <AuthButton buttonText="Confirm" handleSubmit={handleSubmit} />;
}
