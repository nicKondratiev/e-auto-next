import Photo from "./(Photo)/Photo";
import Price from "./(Price)/Price";
import PrimaryFeatures from "./(primaryFeatures)/PrimaryFeatures";

export const rootContainerStyles: string =
  "flex h-auto w-full flex-col gap-8 rounded-lg bg-white p-8";

export default function AddListing() {
  return (
    <div className="flex flex-col gap-5">
      <PrimaryFeatures />
      <Photo />
      <Price />
    </div>
  );
}
