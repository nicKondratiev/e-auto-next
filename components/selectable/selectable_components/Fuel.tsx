"use client";

import Selectable from "../Selectable";

import useStore from "../../../app/store";

const fuelData = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];

export default function Fuel() {
  const { inputFields } = useStore();

  return (
    <Selectable
      header="Fuel type"
      name="fuelType"
      item={inputFields.fuelType}
      data={fuelData}
    />
  );
}
