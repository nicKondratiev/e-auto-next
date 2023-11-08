import ListAltIcon from "@mui/icons-material/ListAlt";

export default function addListing() {
  return (
    <div>
      <div className="h-[800px] w-full rounded-lg bg-white">
        <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-8">
          <ListAltIcon fontSize="medium" />
          <h3>Primary Features</h3>
        </div>
      </div>
    </div>
  );
}
