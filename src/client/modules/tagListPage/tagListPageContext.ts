import React from 'react';

export default React.createContext({
  onAddTag: (tag: string, itemId: number) => {},
  onRemoveTag: (tag: string, itemId: number) => {},
  onSearchTags: (tags: string[]) => {},
  onGenerateRandomTags: () => {},
  onResetTags: () => {},
});
