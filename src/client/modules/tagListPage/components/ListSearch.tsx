import React, { useContext, useState, useEffect } from 'react';
import { SearchField } from '../../../shared/components/searchField';
import { useDebounce } from '../../../shared/utils/useDebounce';
import { FilterType } from '../../../types';
import tagListPageContext from '../tagListPageContext';

const placeholderText = `Use ',' as OR filter; use '+' as AND`;

const debounceTimer = 500;

const andFilterRegex = new RegExp(`[+]`);
const orFilterRegex = new RegExp(`[,]`);

const getFilterType = (searchValue: string): FilterType => {
  if (andFilterRegex.test(searchValue)) return FilterType.And;
  if (orFilterRegex.test(searchValue)) return FilterType.Or;

  return FilterType.And;
};

export const ListSearch = () => {
  const { onSearchTags } = useContext(tagListPageContext);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(
    searchValue,
    debounceTimer,
  );

  useEffect(() => {
    const filterType = getFilterType(debouncedSearchValue);

    const tags = debouncedSearchValue
      .split(filterType === FilterType.And ? '+' : ',')
      .map((value) => value.trim())
      .filter((value) => Boolean(value));
    onSearchTags(tags, filterType);
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
