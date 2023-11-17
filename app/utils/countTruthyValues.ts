export const countTruthyValues = (params: string[]) => {
  return params.filter(Boolean).length;
};
