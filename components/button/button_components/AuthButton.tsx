type AuthButtonProps = {
  buttonText: "Log in" | "Confirm";
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function AuthButton({
  buttonText,
  handleSubmit,
}: AuthButtonProps) {
  return (
    <button
      onClick={handleSubmit}
      className="h-14 w-full rounded-full bg-blue-500 font-light text-white"
    >
      {buttonText}
    </button>
  );
}
