"use client";

import { signOut } from "next-auth/react";
import "./styles.css";

export default function Logout() {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <button className="button" onClick={handleClick}>
      Logout
    </button>
  );
}
