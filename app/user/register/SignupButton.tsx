"use client";

import useStore from "../../store";

import AuthButton from "../../../components/button/button_components/AuthButton";

export default function SignupButton() {
  const { authFields } = useStore();

  const data = [authFields.email, authFields.password, authFields.username];

  const handleSubmit = () => {
    console.log(data);
  };

  return <AuthButton buttonText="Confirm" handleSubmit={handleSubmit} />;
}
