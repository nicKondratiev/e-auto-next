"use client";

import Input from "../../../components/input/Input";

import useStore from "../../store";

export default function PriceInput() {
  const store = useStore();

  return (
    <Input
      value={store.inputFields.price}
      setValue={store.addPrice}
      placeholder="Enter price"
    />
  );
}
