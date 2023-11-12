"use client";

import Selectable from "../Selectable";

import useStore from "../../../app/store";

const wheelData = ["Left", "Right"];

export default function Wheel() {
  const store = useStore();

  console.log(store.searchParams.wheel);

  return (
    <Selectable
      header="Wheel"
      item={store.searchParams.wheel}
      setItem={store.addWheel}
      data={wheelData}
    />
  );
}
