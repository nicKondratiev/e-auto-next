"use client";

import FilledCounter from "../../../components/FilledCounter";

import { countTruthyValues } from "../../utils/countTruthyValues";

import useStore from "../../store";

export default function Filled() {
  const { searchParams } = useStore();

  const truthyParamsCount = countTruthyValues([
    searchParams.manu,
    searchParams.model,
    searchParams.location,
    searchParams.year,
    searchParams.custom,
    searchParams.mileage,
    searchParams.wheel,
    searchParams.transmission,
    searchParams.fuelType,
  ]);

  return <FilledCounter count={truthyParamsCount} total={9} />;
}
