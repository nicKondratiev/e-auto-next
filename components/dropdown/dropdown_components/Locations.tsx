"use client";

import { useState } from "react";

// reusables
import Child from "../Child";
import DropDown from "../Dropdown";

// json data
import locationData from "../../../app/json/locations.json";

// useStore from zustand
import useStore from "../../../app/store";

const Locations = () => {
  const store = useStore();

  const [inputVal, setInputVal] = useState<string>("");

  const locations = locationData.georgia;

  return (
    <DropDown
      header="Location"
      canOpen={true}
      item={store.inputFields.location}
      setItem={store.addLocation}
      inputVal={inputVal}
      setInputVal={setInputVal}
      Child={
        <Child
          data={locations}
          setItem={store.addLocation}
          inputVal={inputVal}
          item={store.inputFields.location}
        />
      }
    />
  );
};

export default Locations;
