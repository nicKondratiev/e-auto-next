"use client";

// reusables
import DropDown from "../Dropdown";
import Child from "../Child";

// json data
import carsData from "../../../app/json/carsData.json";

export default function Manu() {
  const manufacturers = carsData.map((car) => car.brand);

  return (
    <DropDown
      header="Manufacturer"
      name="manu"
      canOpen={true}
      Child={<Child data={manufacturers} name="manu" />}
    />
  );
}
