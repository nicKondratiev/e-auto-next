import Link from "next/link";
import "./styles.css";
import AuthInput from "../../../components/input/AuthInput";

const LoginForm = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Authorization</h1>
        <form className="flex flex-col items-center gap-4">
          <AuthInput type="text" placeholder="Email | Username" />
          <AuthInput type="password" placeholder="Password" />
          <button className="h-14 w-full rounded-full bg-blue-500 font-light text-white">
            Log in
          </button>
          <span className="text-gray-500">
            {`Don't have an account? - `}
            <Link className=" text-blue-500" href={"register"}>
              Create
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
