import Image from "next/image";

export default function CarsList() {
  return (
    <>
      <div>
        <Image src={""} alt="carImage" />
        <div className="flex gap-2">
          <h2 className="font-bold">Manufacturer Model</h2>
          <h2 className="font-semibold text-gray-400">Year</h2>
        </div>
      </div>
    </>
  );
}
