import ListAltIcon from "@mui/icons-material/ListAlt";
import Manu from "../../components/dropdown_components/Manu";

export default function addListing() {
  return (
    <div>
      <div className="h-[800px] w-full rounded-lg bg-white">
        <div className="flex gap-3 border-b border-gray-100 px-5 py-8">
          <ListAltIcon fontSize="medium" />
          <h3>Primary Features</h3>
        </div>

        <div>
          <Manu />
        </div>
      </div>
    </div>
  );
}
