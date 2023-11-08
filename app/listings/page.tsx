import CarsList from "../../components/CarsList";

export default function Listings() {
  return (
    <div className="flex flex-col gap-4">
      <CarsList />
      <CarsList />
      <CarsList />
      <CarsList />
      <CarsList />
    </div>
  );
}
