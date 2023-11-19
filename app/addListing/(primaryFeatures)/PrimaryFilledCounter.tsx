"use client";

import FilledCounter from "../../../components/FilledCounter";

import { countTruthyValues } from "../../../utils/countTruthyValues";

import useStore from "../../store";

export default function Filled() {
  const { inputFields } = useStore();

  const truthyFieldsCount = countTruthyValues([
    inputFields.manu,
    inputFields.model,
    inputFields.location,
    inputFields.year,
    inputFields.custom,
    inputFields.mileage,
    inputFields.wheel,
    inputFields.transmission,
    inputFields.fuelType,
  ]);

  return <FilledCounter count={truthyFieldsCount} total={9} />;
}
