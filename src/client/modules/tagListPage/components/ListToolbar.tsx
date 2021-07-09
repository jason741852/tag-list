import React, { useContext, useState } from 'react';
import { Button } from '../../../shared/components/button';
import { SearchField } from '../../../shared/components/searchField';
import tagListPageContext from '../tagListPageContext';

const placeholderText = `Use ',' to search multiple tags`;

export const ListToolbar = () => {
  const { onSearchTags, onGenerateRandomTags, onResetTags } =
    useContext(tagListPageContext);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchTags = (value: string) => {
    setSearchValue(value);
    const tags = value
      .trim()
      .split(',')
      .filter((value) => Boolean(value));
    onSearchTags(tags);
  };

  return (
    <div className={'list-toolbar'}>
      <Button
        label="Populate random tags"
        onClick={onGenerateRandomTags}
      />
      <Button label="Reset tags" onClick={onResetTags} />
      <SearchField
        value={searchValue}
        placeholder={placeholderText}
        onChange={handleSearchTags}
      />
    </div>
  );
};
