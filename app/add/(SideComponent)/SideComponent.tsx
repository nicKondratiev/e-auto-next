import ListingPreview from "./ListingPreview";
import SectionsNav from "./SectionsNav";

export default function SideComponent() {
  return (
    <div className="sticky top-4 flex h-fit w-[250px] flex-col gap-4">
      <SectionsNav />
      <ListingPreview />
    </div>
  );
}
