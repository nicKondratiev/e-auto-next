"use client";

import { useState } from "react";

// reusables
import Child from "../Child";
import DropDown from "../Dropdown";

// json data
import carsData from "../../../app/json/carsData.json";

// useStore from zustand
import useStore from "../../../app/store";

const Models = () => {
  const store = useStore();

  const [inputVal, setInputVal] = useState<string>("");

  // filter carsData so it will only show models of selected manufacturer
  const chosenManu = carsData.filter(
    (car) => car.brand === store.searchParams.manu
  );

  const models = chosenManu[0]?.models || [];

  return (
    <DropDown
      header="Models"
      item={store.searchParams.model}
      inputVal={inputVal}
      setInputVal={setInputVal}
      canOpen={Boolean(models[0])}
      setItem={store.addModel}
      Child={
        <Child
          data={models}
          setItem={store.addModel}
          inputVal={inputVal}
          item={store.searchParams.model}
        />
      }
    />
  );
};

export default Models;
