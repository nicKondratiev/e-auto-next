import ListingOptions from "./ListingOptions";
import SideComponent from "./(SideComponent)/SideComponent";

export const rootContainerStyles: string =
  "flex h-auto w-full flex-col gap-8 rounded-lg bg-white p-8";

export default function AddListing() {
  return (
    <div className="flex gap-5">
      <SideComponent />
      <ListingOptions />
    </div>
  );
}
