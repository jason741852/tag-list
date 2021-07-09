import React, { useCallback, useMemo, useReducer } from 'react';

import { ITEM_DATA } from '../../itemData';
import { ListItem } from './components/ListItem';
import { ListToolbar } from './components/ListToolbar';
import actionTypes from './state/actionTypes';
import { reducer, getInitialState } from './state/reducer';
import { selectors } from './state/selectors';
import ListPageContext from './tagListPageContext';

export const TagListPage = () => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState({ data: ITEM_DATA, tagsByItemId: {} }),
  );

  const items = useMemo(() => selectors.getItems(state), [state]);

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
    (tags: string[]) => {
      dispatch({
        type: actionTypes.searchTag,
        payload: {
          tags,
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
    [onAddTag, onRemoveTag, onSearchTags],
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
