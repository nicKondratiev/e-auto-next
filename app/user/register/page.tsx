import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import { AuthFields } from "../../store";
import AuthInput from "../../../components/input/AuthInput";
import SignupButton from "./SignupButton";

export type InputField = {
  fieldName: keyof AuthFields;
  type: string;
  placeholder: string;
};

export default async function SignupForm() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

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
          <SignupButton />
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
