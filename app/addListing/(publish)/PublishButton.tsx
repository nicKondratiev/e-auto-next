"use client";

import useStore from "../../store";

import Button from "../../../components/button/Button";
import { countTruthyValues } from "../../../utils/countTruthyValues";

export default function PublishButton() {
  const { searchParams } = useStore();

  const truthyParamsCount = countTruthyValues([
    searchParams.custom,
    searchParams.fuelType,
    searchParams.img,
    searchParams.location,
    searchParams.manu,
    searchParams.mileage,
    searchParams.model,
    searchParams.price,
    searchParams.transmission,
    searchParams.wheel,
    searchParams.year,
  ]);

  return (
    <div>
      <Button disabled={truthyParamsCount !== 11} />
    </div>
  );
}
