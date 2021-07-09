import React from 'react';
import cn from 'classnames';

import './textfield.scss';

type TextFieldProps = {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  hasError?: boolean;
  prefixIcon?: React.ReactNode;
};

export const TextField = ({
  onChange,
  hasError,
  placeholder,
  value,
  prefixIcon,
}: TextFieldProps) => {
  const classNames = cn('text-field', {
    'text-field__has_error': hasError,
  });
  return (
    <div className={classNames}>
      {prefixIcon && (
        <div className={'text-field__prefix-icon'}>{prefixIcon}</div>
      )}
      <input
        className={'text-field__input'}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
