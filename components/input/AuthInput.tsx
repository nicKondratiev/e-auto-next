"use client";

import "./styles.css";

type AuthInput = {
  type: string;
  placeholder: string;
};

export default function AuthInput({ type, placeholder }: AuthInput) {
  return (
    <div>
      <input type={type} className="input" placeholder={placeholder} />
    </div>
  );
}
