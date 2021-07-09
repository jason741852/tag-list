import React, { useState } from 'react';
import { Button } from '../../../shared/components/button';
import { Tag } from '../../../shared/components/tag';
import { TextField } from '../../../shared/components/textField';

import './ListItem.scss';

type ListItemProps = {
  id: number;
  name: string;
  createdAt: string;
  tags: string[];
};

export const ListItem = ({
  createdAt,
  name,
  tags,
}: ListItemProps) => {
  const [newTagName, setNewTagName] = useState<string>('');

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
          <div className={'list-item--tag'}>
            <Tag key={tag} label={tag} onDelete={() => {}} />
          </div>
        ))}
      </div>
      <div className={'list-item--add-tag-field'}>
        <TextField value={newTagName} onChange={setNewTagName} />
      </div>
      <div className={'list-item--add-tag-button'}>
        <Button label={'Add Tag'} onClick={() => {}} />
      </div>
    </div>
  );
};
