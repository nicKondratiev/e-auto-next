"use client";

import Link from "next/link";

import { useState } from "react";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { InputField } from "../register/page";
import AuthInput from "../../../components/input/AuthInput";
import LoginButton from "./LoginButton";

export default function LoginForm() {
  const [error, setError] = useState<boolean>(false);

  console.log(error);

  const loginInputs: InputField[] = [
    { fieldName: "email", type: "text", placeholder: "Email" },
    { fieldName: "password", type: "password", placeholder: "Password" },
  ];

  return (
    <div className="w-96">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Authorization</h1>
        <form className="flex flex-col items-center gap-4">
          {loginInputs.map((input, index) => (
            <AuthInput
              key={index}
              fieldName={input.fieldName}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          {error && (
            <div className="flex w-full items-center justify-start gap-3">
              <span>
                <ErrorOutlineIcon className="text-red-500" fontSize="medium" />
              </span>
              <p className="font-light text-red-500">
                Username or password is incorrect
              </p>
            </div>
          )}
          <LoginButton setError={setError} />
          <span className="text-gray-500">
            {`Don't have an account? - `}
            <Link className=" text-blue-500" href="register">
              Create
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
