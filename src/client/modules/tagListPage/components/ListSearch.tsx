import React, { useContext, useState, useEffect } from 'react';
import { SearchField } from '../../../shared/components/searchField';
import { useDebounce } from '../../../shared/utils/useDebounce';
import tagListPageContext from '../tagListPageContext';

const placeholderText = `Use ',' to search multiple tags`;

const debounceTimer = 500;

export const ListSearch = () => {
  const { onSearchTags } = useContext(tagListPageContext);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(
    searchValue,
    debounceTimer,
  );

  useEffect(() => {
    const tags = debouncedSearchValue
      .trim()
      .split(',')
      .filter((value) => Boolean(value));
    onSearchTags(tags);
  }, [debouncedSearchValue, onSearchTags]);

  const handleSearchTags = (value: string) => {
    setSearchValue(value);
  };

  return (
    <SearchField
      value={searchValue}
      placeholder={placeholderText}
      onChange={handleSearchTags}
    />
  );
};
