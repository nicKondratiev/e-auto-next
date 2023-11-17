"use client";

import FilledCounter from "../../../components/FilledCounter";

import useStore from "../../store";

import { countTruthyValues } from "../../utils/countTruthyValues";

export default function PhotoFilledCounter() {
  const { searchParams } = useStore();

  const truthyParamsCount = countTruthyValues([searchParams.img]);

  return <FilledCounter count={truthyParamsCount} total={1} />;
}
