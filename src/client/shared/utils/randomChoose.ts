// This function returns a randomized size of shuffled array
export const randomChoose = (arr: any[]) => {
  const count = Math.floor(Math.random() * arr.length);
  const randomizedArray = arr.sort(() => 0.5 - Math.random());
  return randomizedArray.slice(0, count);
};
