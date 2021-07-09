import React from 'react';
import { BsSearch } from 'react-icons/bs';

import { TextField } from '../textField';

type SearchFieldProps = {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export const SearchField = ({
  value,
  placeholder,
  onChange,
}: SearchFieldProps) => {
  return (
    <TextField
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      prefixIcon={<BsSearch />}
    />
  );
};
