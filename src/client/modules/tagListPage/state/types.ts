import { Item } from '../../../types';

export type ListState = {
  listItems: {
    allIds: number[];
    filteredIds: number[];
    byIds: Record<number, Item>;
  };
};
