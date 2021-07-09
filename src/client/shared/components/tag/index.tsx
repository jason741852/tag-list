import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

import './tag.scss';

type TagProps = {
  label: string;
  onDelete?: () => void;
};

export const Tag = ({ label, onDelete }: TagProps) => {
  return (
    <div className={'tag'}>
      <div className={'tag__label'}>{label}</div>
      <div className={'tag__delete-icon'} onClick={onDelete}>
        <TiDeleteOutline />
      </div>
    </div>
  );
};
