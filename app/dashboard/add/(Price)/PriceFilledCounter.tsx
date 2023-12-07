"use client";

import FilledCounter from "../../../../components/FilledCounter";

import useStore from "../../../store";

import { countTruthyValues } from "../../../../utils/countTruthyValues";

export default function PriceFilledCounter() {
  const { inputFields } = useStore();

  const truthyFieldsCount = countTruthyValues([inputFields.price]);
  return <FilledCounter count={truthyFieldsCount} total={1} />;
}
