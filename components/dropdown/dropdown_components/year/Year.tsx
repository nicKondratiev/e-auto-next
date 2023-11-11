"use client";

import DropDown from "../../Dropdown";
import YearChild from "./YearChild";

import useStore from "../../../../app/store";
// import { fromToSetter } from "../fromTo/FromTo";
import { useState } from "react";
import Child from "../../Child";

function Year() {
  const store = useStore();

  const [inputVal, setInputVal] = useState("");

  return (
    <DropDown
      header="Year"
      item={store.searchParams.year}
      canOpen={true}
      inputVal={inputVal}
      setInputVal={setInputVal}
      setItem={store.addYear}
      Child={<YearChild item={store.searchParams.year} />}
    />
  );
}
export default Year;
