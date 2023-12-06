"use client";

import { useRouter } from "next/navigation";
import "./styles.css";

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/user/login");
  };

  return (
    <button className="button" onClick={handleClick}>
      Log in
    </button>
  );
}
