"use client";

// reusables
import DropDown from "../dropdown/Dropdown";
import Child from "../dropdown/Child";

// zustand store
import useStore from "../../app/store";

// json data
import carsData from "../../app/json/carsData.json";

export default function Manu() {
  const store = useStore();

  const manufacturers = carsData.map((car) => car.brand);

  return (
    <div>
      <DropDown
        canOpen={true}
        header="Manufacturer"
        setItem={store.addManu}
        Child={
          <Child
            data={manufacturers}
            item={store.searchParams.manu}
            setItem={store.addManu}
          />
        }
        item={store.searchParams.manu}
      />
    </div>
  );
}
