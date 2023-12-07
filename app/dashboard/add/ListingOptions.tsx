import Photo from "./(Photo)/Photo";
import Price from "./(Price)/Price";
import PrimaryFeatures from "./(primaryFeatures)/PrimaryFeatures";
import Publish from "./(publish)/Publish";

export const rootContainerStyles: string =
  "section flex h-auto w-full flex-col gap-8 rounded-lg bg-white p-8";

export default function ListingOptions() {
  return (
    <div className="flex w-[800px] flex-col gap-5">
      <PrimaryFeatures />
      <Photo />
      <Price />
      <Publish />
    </div>
  );
}
