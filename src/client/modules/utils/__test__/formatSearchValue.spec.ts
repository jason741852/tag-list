import { FilterType } from '../../../types';
import { formatSearchValue } from '../formatSearchValue';

describe('formatSearchValue', () => {
  it('should split values by `+`', () => {
    const searchString = 'abc + def + hij';
    expect(formatSearchValue(searchString, FilterType.And)).toEqual([
      'abc',
      'def',
      'hij',
    ]);
  });

  it('should split values by `,`', () => {
    const searchString = 'abc , def , hij';
    expect(formatSearchValue(searchString, FilterType.Or)).toEqual([
      'abc',
      'def',
      'hij',
    ]);
  });

  it('should preserve whitespace', () => {
    const searchString = 'ab   c , def , hij';
    expect(formatSearchValue(searchString, FilterType.Or)).toEqual([
      'ab   c',
      'def',
      'hij',
    ]);
  });
});
