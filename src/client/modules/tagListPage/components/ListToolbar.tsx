import React, { useContext } from 'react';
import { Button } from '../../../shared/components/button';
import tagListPageContext from '../tagListPageContext';
import { ListSearch } from './ListSearch';

export const ListToolbar = () => {
  const { onGenerateRandomTags, onResetTags } = useContext(
    tagListPageContext,
  );

  return (
    <div className={'list-toolbar'}>
      <Button
        label="Populate random tags"
        onClick={onGenerateRandomTags}
      />
      <Button label="Reset tags" onClick={onResetTags} />
      <ListSearch />
    </div>
  );
};
