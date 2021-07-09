import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { ITEM_DATA } from '../../data/itemData';
import {
  getTagsFromLocalStorage,
  saveTagsToLocalStorage,
} from '../../shared/utils/localStorage';
import { FilterType } from '../../types';
import { ListItem } from './components/ListItem';
import { ListToolbar } from './components/ListToolbar';
import actionTypes from './state/actionTypes';
import { reducer, getInitialState } from './state/reducer';
import { selectors } from './state/selectors';
import ListPageContext from './tagListPageContext';

export const TagListPage = () => {
  const [state, dispatch] = useReducer(
    reducer,
    { data: ITEM_DATA, tagsByItemId: getTagsFromLocalStorage() },
    getInitialState,
  );

  const items = useMemo(() => selectors.getItems(state), [state]);
  const tagsByItemId = useMemo(
    () => selectors.getTagsByItemIds(state),
    [state],
  );

  useEffect(() => {
    saveTagsToLocalStorage(tagsByItemId);
  }, [tagsByItemId]);

  const onAddTag = useCallback(
    (tag: string, itemId: number) => {
      dispatch({
        type: actionTypes.addTag,
        payload: {
          tag,
          itemId,
        },
      });
    },
    [dispatch],
  );

  const onRemoveTag = useCallback(
    (tag, itemId) => {
      dispatch({
        type: actionTypes.removeTag,
        payload: {
          tag,
          itemId,
        },
      });
    },
    [dispatch],
  );

  const onSearchTags = useCallback(
    (tags: string[], filterType: FilterType) => {
      dispatch({
        type: actionTypes.searchTag,
        payload: {
          tags,
          filterType,
        },
      });
    },
    [dispatch],
  );

  const onGenerateRandomTags = useCallback(() => {
    dispatch({
      type: actionTypes.generateRandomTags,
    });
  }, [dispatch]);

  const onResetTags = useCallback(() => {
    dispatch({
      type: actionTypes.resetTags,
    });
  }, [dispatch]);

  const contextValue = useMemo(
    () => ({
      onAddTag,
      onRemoveTag,
      onSearchTags,
      onGenerateRandomTags,
      onResetTags,
    }),
    [
      onAddTag,
      onRemoveTag,
      onSearchTags,
      onGenerateRandomTags,
      onResetTags,
    ],
  );

  return (
    <ListPageContext.Provider value={contextValue}>
      <div>
        <ListToolbar />
        {items.map(({ id, name, createdAt, tags }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            createdAt={createdAt}
            tags={tags}
          />
        ))}
      </div>
    </ListPageContext.Provider>
  );
};
