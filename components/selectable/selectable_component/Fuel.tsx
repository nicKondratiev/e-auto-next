"use client";

import Selectable from "../Selectable";

import useStore from "../../../app/store";

const fuelData = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];

export default function Fuel() {
  const store = useStore();

  console.log(store.inputFields.fuelType);

  return (
    <Selectable
      header="Fuel type"
      item={store.inputFields.fuelType}
      setItem={store.addFuelType}
      data={fuelData}
    />
  );
}
