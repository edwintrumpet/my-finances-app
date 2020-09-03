import React from 'react';
import { string, node } from 'prop-types';
import { FormControl as MuiFormControl } from '@material-ui/core';

export default function FormControl({ children, variant }) {
  return (
    <MuiFormControl variant={variant}>
      {children}
    </MuiFormControl>
  );
}

FormControl.propTypes = {
  children: node,
  variant: string,
};

FormControl.defaultProps = {
  children: null,
  variant: 'standard',
};
