"use client";

import Selectable from "../Selectable";

import useStore from "../../../app/store";

const transmissionData = ["Manual", "Automatic", "Tiptronic"];

export default function Transmission() {
  const { inputFields } = useStore();

  return (
    <Selectable
      header="Transmission"
      name="transmission"
      item={inputFields.transmission}
      data={transmissionData}
    />
  );
}
