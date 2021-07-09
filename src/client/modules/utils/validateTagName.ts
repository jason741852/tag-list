const invalidRegex = new RegExp('[+,]');

export const validateTagName = (value: string) => {
  return !invalidRegex.test(value);
};
