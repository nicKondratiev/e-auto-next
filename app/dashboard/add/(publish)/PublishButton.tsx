"use client";

import useStore from "../../../store";
import { getSession } from "next-auth/react";
import { countTruthyValues } from "../../../../utils/countTruthyValues";
import { DefaultSession } from "next-auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PublishButton() {
  const [isLoading, setIsLoading] = useState(false);

  const { setFormSubmitted, reset, inputFields } = useStore();

  const router = useRouter();

  let makeApiCall = async () => {
    const user = (await getSession())?.user as DefaultSession & {
      _id?: string | null;
    };

    setIsLoading(true);

    await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ ...inputFields, userId: user._id }),
    }).then(() => {
      setIsLoading(false);
      setFormSubmitted(false);
    });
  };

  const handleClick = async () => {
    if (truthyFieldsCount === Object.keys(inputFields).length) {
      try {
        await makeApiCall().then(() => {
          router.refresh();
          router.push("listings");
          reset();
        });
      } catch (err) {
        console.log("Error during API call");
      }
    } else {
      setFormSubmitted(true);
    }
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
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-lg bg-blue-500 px-8 py-3 text-sm text-white duration-200 hover:bg-blue-600"
      >
        {!isLoading ? "Publish" : "Loading..."}
      </button>
    </div>
  );
}
