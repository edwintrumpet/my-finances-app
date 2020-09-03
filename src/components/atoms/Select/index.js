import React from 'react';
import {
  func,
  node,
  number,
  string,
} from 'prop-types';
import { Select as MuiSelect } from '@material-ui/core';

export default function Select({
  children,
  handleBlur,
  handleChange,
  labelId,
  labelWidth,
  name,
  value,
}) {
  return (
    <MuiSelect
      labelId={labelId}
      labelWidth={labelWidth}
      onBlur={handleBlur}
      onChange={handleChange}
      name={name}
      value={value}
    >
      {children}
    </MuiSelect>
  );
}

Select.propTypes = {
  children: node,
  handleBlur: func,
  handleChange: func,
  labelId: string,
  labelWidth: number,
  name: string,
  value: node,
};

Select.defaultProps = {
  children: null,
  handleBlur: null,
  handleChange: null,
  labelId: null,
  labelWidth: 0,
  name: null,
  value: null,
};
