import { produce } from 'immer';
import { MAX_TAGS_COUNT } from '../../../constants';
import { ITEM_DATA } from '../../../data/itemData';
import { TAG_DATA } from '../../../data/tagData';
import { randomChoose } from '../../../shared/utils/randomChoose';

import { ItemOriginal, Item, FilterType } from '../../../types';
import actionTypes from './actionTypes';
import { ListState } from './types';

const convertListDataToDictionary = (
  movieData: ItemOriginal[],
  tagsByItemId: Record<number, string[]> = {},
): Record<number, Item> => {
  return movieData.reduce((acc, { id, name, created_at }) => {
    acc[id] = {
      id,
      name,
      createdAt: created_at,
      tags: tagsByItemId[id] || [],
    };
    return acc;
  }, {} as Record<number, Item>);
};

export const getInitialState = ({
  data,
  tagsByItemId,
}: {
  data: ItemOriginal[];
  tagsByItemId?: Record<number, string[]>;
}): ListState => {
  const dataByIds = convertListDataToDictionary(data, tagsByItemId);
  const allIds = data.map(({ id }) => id);

  return {
    listItems: {
      allIds,
      filteredIds: allIds,
      byIds: dataByIds,
    },
  };
};

export const reducer = produce(
  (draft: ListState, { type, payload }) => {
    switch (type) {
      case actionTypes.addTag: {
        const { tag, itemId } = payload;

        const existingTags = draft.listItems.byIds[itemId].tags;

        // Don't add if the tag is in this item already
        if (
          existingTags.length >= MAX_TAGS_COUNT ||
          existingTags.find((value) => value === tag)
        ) {
          return;
        }
        existingTags.push(tag);

        break;
      }
      case actionTypes.removeTag: {
        const { tag, itemId } = payload;
        draft.listItems.byIds[itemId].tags = draft.listItems.byIds[
          itemId
        ].tags.filter((value) => value !== tag);

        break;
      }
      case actionTypes.searchTag: {
        const { tags, filterType } = payload as {
          tags: string[];
          filterType: FilterType;
        };

        // reset if nothing to search
        if (tags.length === 0) {
          draft.listItems.filteredIds = draft.listItems.allIds;
          return draft;
        }

        const { allIds, byIds } = draft.listItems;
        draft.listItems.filteredIds = allIds.filter((id) => {
          const { tags: itemTags } = byIds[id];

          return filterType === FilterType.Or
            ? tags.some((tag) => itemTags.includes(tag))
            : tags.every((tag) => itemTags.includes(tag));
        });

        break;
      }
      case actionTypes.generateRandomTags: {
        const state = getInitialState({ data: ITEM_DATA });
        state.listItems.allIds.forEach((id) => {
          const count = Math.floor(Math.random() * 5);
          const tags = randomChoose(TAG_DATA, count);
          state.listItems.byIds[id].tags.push(...tags);
        });
        draft = state;

        break;
      }

      case actionTypes.resetTags: {
        draft = getInitialState({ data: ITEM_DATA });
      }
    }

    return draft;
  },
);
