export const countTruthyValues = <T>(params: T[]) => {
  return params.filter(Boolean).length;
};
