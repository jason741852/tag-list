const localStorageKey = 'TAGS';

export const saveTagsToLocalStorage = (
  tags: Record<number, string[]>,
) => {
  localStorage.setItem(localStorageKey, JSON.stringify(tags));
};

export const getTagsFromLocalStorage = (): Record<
  number,
  string[]
> => {
  const tags = localStorage.getItem(localStorageKey);
  return tags ? JSON.parse(tags) : {};
};
