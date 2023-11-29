"use client";

import Input from "../Input";

import useStore from "../../../app/store";

export default function Mileage() {
  const { inputFields } = useStore();

  return (
    <Input value={inputFields.mileage} name="mileage" placeholder="Mileage" />
  );
}
