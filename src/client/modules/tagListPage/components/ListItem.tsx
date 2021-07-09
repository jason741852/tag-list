import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { MAX_TAGS_COUNT } from '../../../constants';
import { Button } from '../../../shared/components/button';
import { Tag } from '../../../shared/components/tag';
import { TextField } from '../../../shared/components/textField';
import { validateTagName } from '../../utils/validateTagName';
import tagListPageContext from '../tagListPageContext';

import './ListItem.scss';

type ListItemProps = {
  id: number;
  name: string;
  createdAt: string;
  tags: string[];
};

export const ListItem = ({
  id,
  createdAt,
  name,
  tags,
}: ListItemProps) => {
  const { onAddTag, onRemoveTag } = useContext(tagListPageContext);
  const [newTagName, setNewTagName] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    setIsNameValid(validateTagName(newTagName));
  }, [newTagName]);

  const handleAddTag = () => {
    if (!newTagName || !isNameValid) {
      return;
    }

    onAddTag(newTagName, id);

    setNewTagName('');
  };

  const handleRemoveTag = (tag: string) => {
    onRemoveTag(tag, id);
  };

  return (
    <div className={'list-item'}>
      <div className={'list-item--title'}>
        <div className={'list-item--name'}>{name}</div>
        <div className={'list-item--created-at'}>
          Created at: {createdAt}
        </div>
      </div>
      <div className={'list-item--tags'}>
        {tags.map((tag) => (
          <div key={tag} className={'list-item--tag'}>
            <Tag label={tag} onDelete={() => handleRemoveTag(tag)} />
          </div>
        ))}
      </div>
      <div className={'list-item--add-tag-field'}>
        {tags.length < MAX_TAGS_COUNT && (
          <TextField
            value={newTagName}
            onChange={setNewTagName}
            hasError={!isNameValid}
          />
        )}
      </div>
      <div className={'list-item--add-tag-button'}>
        <Button label={'Add Tag'} onClick={handleAddTag} />
      </div>
    </div>
  );
};
