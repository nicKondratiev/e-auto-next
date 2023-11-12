"use client";

import Selectable from "../Selectable";

import useStore from "../../../app/store";

const transmissionData = ["Manual", "Automatic", "Tiptronic"];

export default function Transmission() {
  const store = useStore();

  return (
    <Selectable
      header="Transmission"
      item={store.searchParams.transmission}
      setItem={store.addTransmission}
      data={transmissionData}
    />
  );
}
