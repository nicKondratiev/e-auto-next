"use client";

// reusables
import Child from "../Child";
import DropDown from "../Dropdown";

// json data
import carsData from "../../../app/json/carsData.json";

// useStore from zustand
import useStore from "../../../app/store";
import { useEffect } from "react";

const Models = () => {
  const { inputFields, updateField } = useStore();

  // filter carsData so it will only show models of selected manufacturer
  const chosenManu = carsData.filter((car) => car.brand === inputFields.manu);
  const models = chosenManu[0]?.models || [];

  useEffect(() => {
    if (!inputFields.manu) {
      updateField("model", "");
    }
  }, [inputFields.manu, updateField]);

  return (
    <DropDown
      header="Models"
      name="model"
      canOpen={Boolean(models[0])}
      Child={<Child data={models} name="model" />}
    />
  );
};

export default Models;
