"use client";

import Input from "../../input/Input";

import useStore from "../../../app/store";

export default function Mileage() {
  const store = useStore();

  return (
    <Input
      value={store.searchParams.mileage}
      setValue={store.addMileage}
      placeholder="Mileage"
    />
  );
}
