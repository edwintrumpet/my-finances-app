import React from 'react';
import {
  bool,
  func,
  node,
  number,
  string,
} from 'prop-types';
import { OutlinedInput as MuiOutlinedInput } from '@material-ui/core';

export default function OutlinedInput({
  endAdornment,
  disabled,
  handleBlur,
  handleChange,
  id,
  labelWidth,
  name,
  type,
  value,
}) {
  return (
    <MuiOutlinedInput
      endAdornment={endAdornment}
      disabled={disabled}
      id={id}
      labelWidth={labelWidth}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      type={type}
      value={value}
    />
  );
}

OutlinedInput.propTypes = {
  endAdornment: node,
  disabled: bool,
  handleBlur: func.isRequired,
  handleChange: func.isRequired,
  id: string,
  labelWidth: number,
  name: string,
  type: string,
  value: string,
};

OutlinedInput.defaultProps = {
  endAdornment: null,
  disabled: false,
  id: null,
  labelWidth: 0,
  name: null,
  type: 'text',
  value: null,
};
