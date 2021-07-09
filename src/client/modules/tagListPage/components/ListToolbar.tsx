import React, { useContext } from 'react';
import { Button } from '../../../shared/components/button';
import tagListPageContext from '../tagListPageContext';
import { ListSearch } from './ListSearch';

import './ListToolbar.scss';

export const ListToolbar = () => {
  const { onGenerateRandomTags, onResetTags } = useContext(
    tagListPageContext,
  );

  return (
    <div className={'list-toolbar'}>
      <div className={'list-toolbar__button-group'}>
        <div className={'list-toolbar__button'}>
          <Button
            label="Populate random tags"
            onClick={onGenerateRandomTags}
          />
        </div>
        <div className={'list-toolbar__button'}>
          <Button label="Reset tags" onClick={onResetTags} />
        </div>
      </div>
      <div className={'list-toolbar__search-field'}>
        <ListSearch />
      </div>
    </div>
  );
};
