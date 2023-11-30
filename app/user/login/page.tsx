import { AuthForm } from "../AuthForm";

import { InputField } from "../AuthForm";

export default function LoginForm() {
  const loginInputs: InputField[] = [
    { type: "text", placeholder: "Email | Username" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <AuthForm
      title="Authorization"
      inputFields={loginInputs}
      buttonText="Log in"
      spanText="Don't have an account? - "
      linkText="Create"
      linkUrl="register"
    />
  );
}
