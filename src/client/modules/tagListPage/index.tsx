import React from 'react';
import { ITEM_DATA } from '../../itemData';
import { ListItem } from './components/ListItem';

export const TagListPage = () => {
  return (
    <div>
      {ITEM_DATA.map(({ id, name, created_at }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          createdAt={created_at}
          tags={[]}
        />
      ))}
    </div>
  );
};
