"use client";

import DropDown from "../../Dropdown";
import YearChild from "./YearChild";

import useStore from "../../../../app/store";

function Year() {
  const store = useStore();

  return (
    <DropDown
      header="Year"
      canOpen={true}
      name="year"
      Child={<YearChild item={store.inputFields.year} />}
    />
  );
}
export default Year;
