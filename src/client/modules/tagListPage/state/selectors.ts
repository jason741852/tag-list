import { createSelector } from "reselect";
import { ListState } from "./types";

const getListItemsSelector = ({ listItems }: ListState) => listItems;

const getItemsSelector = createSelector(
  getListItemsSelector,
  ({ filteredIds, byIds }) => filteredIds.map((id) => byIds[id])
);

export const selectors = {
  getItems: getItemsSelector,
  getTagsByItemIds: createSelector(getItemsSelector, (items) =>
    items.reduce((acc, { id, tags }) => {
      acc[id] = tags;
      return acc;
    }, {} as Record<number, string[]>)
  ),
};
