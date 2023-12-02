import Link from "next/link";

import { AuthFields } from "../../store";
import AuthInput from "../../../components/input/AuthInput";

export type InputField = {
  fieldName: keyof AuthFields;
  type: string;
  placeholder: string;
};

export default function SignupForm() {
  const signupInputs: InputField[] = [
    { fieldName: "email", type: "text", placeholder: "Email" },
    { fieldName: "username", type: "text", placeholder: "Username" },
    { fieldName: "password", type: "password", placeholder: "Password" },
  ];

  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Create Account</h1>
        <form className="flex flex-col items-center gap-4">
          {signupInputs.map((input, index) => (
            <AuthInput
              key={index}
              fieldName={input.fieldName}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          <button className="h-14 w-full rounded-full bg-blue-500 font-light text-white">
            Confirm
          </button>
          <span className="text-gray-500">
            {`With an existing account - `}
            <Link className=" text-blue-500" href="login">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
