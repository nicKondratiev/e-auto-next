"use client";

import Selectable from "../Selectable";

import useStore from "../../../app/store";

const wheelData = ["Left", "Right"];

export default function Wheel() {
  const { inputFields } = useStore();

  return (
    <Selectable
      header="Wheel"
      name="wheel"
      item={inputFields.wheel}
      data={wheelData}
    />
  );
}
