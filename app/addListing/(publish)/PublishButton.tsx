"use client";

import useStore from "../../store";

import Button from "../../../components/button/Button";
import { countTruthyValues } from "../../../utils/countTruthyValues";

export default function PublishButton() {
  const { inputFields } = useStore();

  const truthyFieldsCount = countTruthyValues([
    inputFields.custom,
    inputFields.fuelType,
    inputFields.img,
    inputFields.location,
    inputFields.manu,
    inputFields.mileage,
    inputFields.model,
    inputFields.price,
    inputFields.transmission,
    inputFields.wheel,
    inputFields.year,
  ]);

  return (
    <div>
      <Button disabled={truthyFieldsCount !== 11} />
    </div>
  );
}
