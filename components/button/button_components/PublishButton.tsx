"use client";

import useStore from "../../../app/store";

import Button from "../../../components/button/Button";
import { countTruthyValues } from "../../../utils/countTruthyValues";

export default function PublishButton() {
  const { inputFields } = useStore();

  let makeApiCall = async () => {
    await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify(inputFields),
    });
  };

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
      <Button disabled={truthyFieldsCount !== 11} makeApiCall={makeApiCall} />
    </div>
  );
}
