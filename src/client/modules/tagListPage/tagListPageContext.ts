import React from 'react';
import { FilterType } from '../../types';

export default React.createContext({
  onAddTag: (tag: string, itemId: number) => {},
  onRemoveTag: (tag: string, itemId: number) => {},
  onSearchTags: (tags: string[], filterType: FilterType) => {},
  onGenerateRandomTags: () => {},
  onResetTags: () => {},
});
