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

export default function PrimaryFeatures() {
  return (
    <div className="flex h-[800px] w-full flex-col gap-3 rounded-lg bg-white">
      <div className="flex gap-3 py-8">
        <ListAltIcon fontSize="medium" />
        <h3>Primary Features</h3>
      </div>

      <div className="px-10">
        <div className="flex w-full justify-center border-t py-8">
          <div className="grid grid-rows-2 gap-4">
            <div className="flex gap-6">
              <Manu />
              <Models />
            </div>
            <div className="flex gap-6">
              <Locations />
              <Year />
            </div>
            <div className="flex gap-6">
              <Clearance />
              <Mileage />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Wheel />
          <Transmission />
          <Fuel />
        </div>
      </div>
    </div>
  );
}
