import ListingOptions from "./ListingOptions";
import SideComponent from "./(SideComponent)/SideComponent";

export default function AddListing() {
  return (
    <div className="flex gap-5">
      <SideComponent />
      <ListingOptions />
    </div>
  );
}
