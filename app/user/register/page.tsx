import { AuthForm } from "../AuthForm";

import { InputField } from "../AuthForm";

export default function SignupForm() {
  const signupInputs: InputField[] = [
    { type: "text", placeholder: "Email" },
    { type: "text", placeholder: "Username" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <AuthForm
      title="Create Account"
      inputFields={signupInputs}
      buttonText="Confirm"
      spanText="With an existing account"
      linkText="Log in"
      linkUrl="login"
    />
  );
}
