import React from 'react';
import {
  bool,
  func,
  node,
  string,
} from 'prop-types';
import { TextField as MuiTextField } from '@material-ui/core';

export default function TextField({
  customization,
  disabled,
  handleBlur,
  handleChange,
  label,
  name,
  type,
  value,
  variant,
}) {
  return (
    <MuiTextField
      className={customization}
      disabled={disabled}
      label={label}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      type={type}
      value={value}
      variant={variant}
    />
  );
}

TextField.propTypes = {
  customization: string,
  disabled: bool,
  handleBlur: func,
  handleChange: func,
  label: string,
  name: string,
  type: string,
  value: node,
  variant: string,
};

TextField.defaultProps = {
  customization: null,
  disabled: false,
  handleBlur: null,
  handleChange: null,
  label: null,
  name: null,
  type: 'text',
  value: null,
  variant: 'standard',
};
