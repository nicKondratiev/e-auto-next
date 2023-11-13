import PrimaryFeatures from "./(primaryFeatures)/PrimaryFeatures";

export const rootContainerStyles: string =
  "flex h-auto w-full flex-col gap-3 rounded-lg bg-white p-8";

export default function AddListing() {
  return (
    <div>
      <PrimaryFeatures />
    </div>
  );
}
