import { FilterType } from '../../types';

export const formatSearchValue = (
  value: string,
  filterType: FilterType,
) =>
  value
    .split(filterType === FilterType.And ? '+' : ',')
    .map((value) => value.trim())
    .filter((value) => Boolean(value));
