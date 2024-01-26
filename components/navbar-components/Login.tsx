"use client";

import { useRouter } from "next/navigation";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./styles.css";

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/user/login");
  };

  return (
    <button className="button" onClick={handleClick}>
      <PersonOutlineOutlinedIcon />
      Log in
    </button>
  );
}
