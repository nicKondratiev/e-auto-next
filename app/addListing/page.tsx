import ListAltIcon from "@mui/icons-material/ListAlt";
import Manu from "../../components/dropdown_components/Manu";
import Models from "../../components/dropdown_components/Models";
import Locations from "../../components/dropdown_components/Locations";
import Year from "../../components/dropdown_components/year/Year";

export default function addListing() {
  return (
    <div>
      <div className="h-[800px] w-full rounded-lg bg-white">
        <div className="flex gap-3 border-b border-gray-100 px-5 py-8">
          <ListAltIcon fontSize="medium" />
          <h3>Primary Features</h3>
        </div>

        <div className="">
          <Manu />
          <Models />
          <Locations />
          <Year />
        </div>
      </div>
    </div>
  );
}
