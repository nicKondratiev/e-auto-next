import "./styles.css";

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
  return (
    <div className="flex h-auto w-full flex-col gap-3 rounded-lg bg-white p-8">
      <div className="flex h-full items-center gap-3">
        <ListAltIcon fontSize="medium" />
        <h3>Primary Features</h3>
      </div>

      <div className="flex justify-center border-t py-8">
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
