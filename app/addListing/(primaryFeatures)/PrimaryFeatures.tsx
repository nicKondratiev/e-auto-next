"use client";

import "./styles.css";

import { rootContainerStyles } from "../page";

import ListAltIcon from "@mui/icons-material/ListAlt";
import Manu from "../../../components/dropdown/dropdown_components/Manu";
import Models from "../../../components/dropdown/dropdown_components/Models";
import Locations from "../../../components/dropdown/dropdown_components/Locations";
import Year from "../../../components/dropdown/dropdown_components/year/Year";
import Wheel from "../../../components/selectable/selectable_component/Wheel";
import Transmission from "../../../components/selectable/selectable_component/Transmission";
import Fuel from "../../../components/selectable/selectable_component/Fuel";
import Clearance from "../../../components/dropdown/dropdown_components/clearance/Clearance";
import Mileage from "../../../components/selectable/selectable_component/Mileage";
import SectionHeader from "../../../components/SectionHeader";
import useStore from "../../store";

import { countTruthyValues } from "../../utils/countTruthyValues";

// this array of objects will be itterated over, so same code repetition will be avoided
let dropDown_Couples: Record<"left" | "right", React.ReactElement>[] = [
  {
    left: <Manu />,
    right: <Models />,
  },
  {
    left: <Locations />,
    right: <Year />,
  },
  {
    left: <Clearance />,
    right: <Mileage />,
  },
];

export default function PrimaryFeatures() {
  const { searchParams } = useStore();

  const truthyParamsCount = countTruthyValues([
    searchParams.manu,
    searchParams.model,
    searchParams.location,
    searchParams.year,
    searchParams.custom,
    searchParams.mileage,
    searchParams.wheel,
    searchParams.transmission,
    searchParams.fuelType,
  ]);

  console.log(truthyParamsCount);

  return (
    <div className={rootContainerStyles}>
      <SectionHeader count={truthyParamsCount} total={9}>
        <ListAltIcon fontSize="medium" />
        <h3>Primary Features</h3>
      </SectionHeader>

      <div className="flex justify-center">
        <div className="flex w-full flex-col gap-4">
          {dropDown_Couples.map((couple, index) => (
            <div key={index} className="dropdown-flex">
              {couple.left}
              {couple.right}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Wheel />
        <Transmission />
        <Fuel />
      </div>
    </div>
  );
}
