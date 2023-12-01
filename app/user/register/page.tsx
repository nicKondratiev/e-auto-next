import { AuthForm } from "../AuthForm";

import { InputField } from "../AuthForm";

export default function SignupForm() {
  const signupInputs: InputField[] = [
    { fieldName: "email", type: "text", placeholder: "Email" },
    { fieldName: "username", type: "text", placeholder: "Username" },
    { fieldName: "password", type: "password", placeholder: "Password" },
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
