// This function returns a user-defined size of shuffled array
export const randomChoose = (arr: any[], size: number) => {
  const randomizedArray = arr.sort(() => 0.5 - Math.random());
  return randomizedArray.slice(0, size);
};
