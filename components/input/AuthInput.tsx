"use client";

import { useEffect } from "react";
import useStore, { AuthFields } from "../../app/store";

import "./styles.css";

type AuthInputProps = {
  fieldName: keyof AuthFields;
  type: string;
  placeholder: string;
};

export default function AuthInput({
  fieldName,
  type,
  placeholder,
}: AuthInputProps) {
  const { authFields, updateField, reset } = useStore();

  console.log(authFields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField(fieldName, e.target.value);
  };

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <div>
      <input
        onChange={handleChange}
        type={type}
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
}
