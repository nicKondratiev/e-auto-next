"use client";

import Input from "../../../components/input/Input";

import useStore from "../../store";

export default function PriceInput() {
  const store = useStore();

  return (
    <Input
      value={store.searchParams.price}
      setValue={store.addPrice}
      placeholder="Enter price"
    />
  );
}
