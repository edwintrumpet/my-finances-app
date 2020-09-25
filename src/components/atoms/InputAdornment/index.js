import React from 'react';
import { node, string } from 'prop-types';
import { InputAdornment as MuiInputAdornment } from '@material-ui/core';

export default function InputAdornment({ children, position }) {
  return <MuiInputAdornment position={position}>{children}</MuiInputAdornment>;
}

InputAdornment.propTypes = {
  children: node,
  position: string,
};

InputAdornment.defaultProps = {
  children: null,
  position: null,
};
