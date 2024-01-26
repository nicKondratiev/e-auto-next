"use client";

import { signOut } from "next-auth/react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./styles.css";

export default function Logout() {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <button className="button py-2 " onClick={handleClick}>
      <LogoutOutlinedIcon />
      Logout
    </button>
  );
}
