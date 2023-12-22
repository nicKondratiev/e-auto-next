"use client";

import useStore from "../../../store";
import { getSession } from "next-auth/react";
import Button from "../../../../components/button/Button";
import { countTruthyValues } from "../../../../utils/countTruthyValues";
import { DefaultSession } from "next-auth";

export default function PublishButton() {
  const { inputFields } = useStore();

  let makeApiCall = async () => {
    const user = (await getSession())?.user as DefaultSession & {
      _id?: string | null;
    };

    await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ ...inputFields, userId: user._id }),
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
