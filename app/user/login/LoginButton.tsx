"use client";

import useStore from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";

export default function LoginButton() {
  const { authFields } = useStore();

  const data = [authFields.email, authFields.password];

  const handleSubmit = () => {
    console.log(data);
  };

  return <AuthButton buttonText="Log in" handleSubmit={handleSubmit} />;
}
