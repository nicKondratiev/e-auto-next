"use client";

import FilledCounter from "../../../components/FilledCounter";

import useStore from "../../store";

import { countTruthyValues } from "../../../utils/countTruthyValues";

export default function PriceFilledCounter() {
  const { searchParams } = useStore();

  const truthyParamsCount = countTruthyValues([searchParams.price]);
  return <FilledCounter count={truthyParamsCount} total={1} />;
}
