"use client";

import Input from "../Input";

import useStore from "../../../app/store";

export default function PriceInput() {
  const { inputFields } = useStore();

  return (
    <Input value={inputFields.price} name="price" placeholder="Enter price" />
  );
}
