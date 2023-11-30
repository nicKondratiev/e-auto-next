import Link from "next/link";

import AuthInput from "../../components/input/AuthInput";

export type InputField = {
  type: string;
  placeholder: string;
};

type AuthFormTypes = {
  title: "Authorization" | "Create Account";
  inputFields: InputField[];
  buttonText: "Log in" | "Confirm";
  spanText: `Don't have an account? - ` | `With an existing account`;
  linkText: "Create" | "Log in";
  linkUrl: "register" | "login";
};

export const AuthForm = ({
  title,
  inputFields,
  buttonText,
  spanText,
  linkText,
  linkUrl,
}: AuthFormTypes) => {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <form className="flex flex-col items-center gap-4">
          {inputFields.map((input, index) => (
            <AuthInput
              key={index}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          <button className="h-14 w-full rounded-full bg-blue-500 font-light text-white">
            {buttonText}
          </button>
          <span className="text-gray-500">
            {`${spanText} `}
            <Link className=" text-blue-500" href={linkUrl}>
              {linkText}
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
